import { ImageResponse } from 'next/og';

export const alt = 'Jay Jaehoon Jung — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background: 'linear-gradient(135deg, #0b233b 0%, #315b7d 55%, #b8cfdc 100%)',
          color: '#f2f5f7',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Arial, sans-serif',
          height: '100%',
          justifyContent: 'space-between',
          padding: '72px 82px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>JFLOWW</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'flex', fontSize: 70, fontWeight: 700, letterSpacing: '-0.045em' }}>Jay (Jaehoon) Jung</div>
          <div style={{ color: '#dbe8f0', display: 'flex', fontSize: 32 }}>Software Engineer · Backend &amp; Full-Stack</div>
        </div>
        <div style={{ color: '#dbe8f0', display: 'flex', fontSize: 23 }}>Python · Django · TypeScript · Next.js · PostgreSQL</div>
      </div>
    ),
    size
  );
}
