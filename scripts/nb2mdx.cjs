/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const val = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true;
    args[key] = val;
    if (val !== true) i += 1;
  }
  return args;
}

function normalizeMarkdown(s) {
  return (
    s
      // MDX/JSX requires self-closing br
      .replace(/<br\s*>/gi, '<br />')
      .replace(/<br\/>/gi, '<br />')
      // some notebooks use HTML strong tags already; leave them as-is
      .trim()
  );
}

function escapeFrontmatterString(value) {
  // YAML single-quote escaping: '' inside ''
  return `'${String(value).replace(/'/g, "''")}'`;
}

function buildFrontmatter({ title, date, techStack, id, images, showSlider }) {
  const lines = ['---'];
  if (title) lines.push(`title: ${escapeFrontmatterString(title)}`);
  if (date) lines.push(`date: ${escapeFrontmatterString(date)}`);
  if (techStack) lines.push(`techStack: ${escapeFrontmatterString(techStack)}`);
  if (id) lines.push(`id: ${id}`);
  if (typeof showSlider === 'boolean') lines.push(`showSlider: ${showSlider}`);
  if (images && images.length) {
    lines.push('images:');
    for (const img of images) {
      lines.push(`  - src: ${escapeFrontmatterString(img.src)}`);
      lines.push(`    title: ${escapeFrontmatterString(img.title ?? '')}`);
      lines.push(`    description: ${escapeFrontmatterString(img.description ?? '')}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function cellSourceToString(cell) {
  const src = cell?.source;
  if (Array.isArray(src)) return src.join('');
  if (typeof src === 'string') return src;
  return '';
}

function detectLanguage(cell) {
  const metaLang = cell?.metadata?.language;
  const nbLang = cell?.metadata?.vscode?.languageId;
  const kernelspec = cell?.metadata?.kernelspec?.language;
  return metaLang || nbLang || kernelspec || 'python';
}

function asBase64String(x) {
  if (!x) return '';
  if (Array.isArray(x)) return x.join('');
  if (typeof x === 'string') return x;
  return '';
}

function toPublicUrlPath(p) {
  return String(p).split(path.sep).join('/');
}

function convertNotebookToMdx(notebookJson, opts) {
  const { frontmatter, includeOutputs, extractImages, writeImage } = opts;
  const out = [frontmatter, ''];

  const cells = Array.isArray(notebookJson?.cells) ? notebookJson.cells : [];
  for (let cellIndex = 0; cellIndex < cells.length; cellIndex += 1) {
    const cell = cells[cellIndex];
    const cellType = cell?.cell_type;
    if (cellType === 'markdown') {
      const md = normalizeMarkdown(cellSourceToString(cell));
      if (md) out.push(md, '');
      continue;
    }

    if (cellType === 'code') {
      const code = cellSourceToString(cell).trimEnd();
      if (code) {
        out.push('```' + detectLanguage(cell));
        out.push(code);
        out.push('```', '');
      }

      if (extractImages && typeof writeImage === 'function') {
        const outputs = Array.isArray(cell.outputs) ? cell.outputs : [];
        let wroteAny = false;
        for (let outIndex = 0; outIndex < outputs.length; outIndex += 1) {
          const o = outputs[outIndex];
          const pngBase64 = asBase64String(o?.data?.['image/png']);
          if (!pngBase64) continue;
          const buf = Buffer.from(pngBase64, 'base64');
          const publicRel = writeImage({
            buffer: buf,
            ext: 'png',
            cellIndex,
            outIndex,
          });
          if (publicRel) {
            wroteAny = true;
            out.push(`![output](${toPublicUrlPath(publicRel)})`, '');
          }
        }
        if (wroteAny) out.push('');
      }

      if (includeOutputs) {
        const outputs = Array.isArray(cell.outputs) ? cell.outputs : [];
        const textChunks = [];
        for (const o of outputs) {
          const t = o?.text;
          if (Array.isArray(t)) textChunks.push(t.join(''));
          else if (typeof t === 'string') textChunks.push(t);
          const dt = o?.data?.['text/plain'];
          if (Array.isArray(dt)) textChunks.push(dt.join(''));
          else if (typeof dt === 'string') textChunks.push(dt);
        }
        const text = textChunks.join('\n').trim();
        if (text) {
          out.push('```text');
          out.push(text);
          out.push('```', '');
        }
      }

      continue;
    }
  }

  return out.join('\n').trimEnd() + '\n';
}

function parseBoolean(v, defaultValue) {
  if (typeof v === 'boolean') return v;
  if (v === undefined || v === null) return defaultValue;
  const s = String(v).trim().toLowerCase();
  if (['true', '1', 'yes', 'y', 'on'].includes(s)) return true;
  if (['false', '0', 'no', 'n', 'off'].includes(s)) return false;
  return defaultValue;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const inFile = args.in;
  const outFile = args.out;

  if (!inFile || !outFile) {
    console.error(
      'Usage: node scripts/nb2mdx.cjs --in path/to/notebook.ipynb --out path/to/file.mdx [--title ""] [--date YYYYMMDD] [--techStack ""] [--id slug] [--cover "/temp/test1.jpg"] [--showSlider true|false] [--includeOutputs] [--extractImages]'
    );
    process.exit(1);
  }

  const title = args.title || path.basename(outFile, path.extname(outFile));
  const date = args.date || '20220101';
  const techStack = args.techStack || 'Python, Jupyter Notebook';
  const id = args.id || path.basename(outFile, path.extname(outFile));
  const cover = args.cover || '/temp/test1.jpg';
  const includeOutputs = Boolean(args.includeOutputs);
  const extractImages = Boolean(args.extractImages);
  const showSlider = parseBoolean(args.showSlider, true);

  const jsonText = fs.readFileSync(inFile, 'utf-8');
  const notebook = JSON.parse(jsonText);

  const frontmatter = buildFrontmatter({
    title,
    date,
    techStack,
    id,
    showSlider,
    images: [
      {
        src: cover,
        title: 'Cover',
        description: 'Notebook project',
      },
    ],
  });

  const publicRoot = path.join(process.cwd(), 'public');
  const imageOutDir = path.join(publicRoot, 'photo', 'proj', id);
  const writeImage = ({ buffer, ext, cellIndex, outIndex }) => {
    fs.mkdirSync(imageOutDir, { recursive: true });
    const filename = `nb-cell-${String(cellIndex).padStart(3, '0')}-out-${String(outIndex).padStart(2, '0')}.${ext}`;
    const absPath = path.join(imageOutDir, filename);
    fs.writeFileSync(absPath, buffer);
    return path.join('/photo', 'proj', id, filename);
  };

  const mdx = convertNotebookToMdx(notebook, { frontmatter, includeOutputs, extractImages, writeImage });

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, mdx, 'utf-8');
  console.log(`Wrote ${outFile}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

