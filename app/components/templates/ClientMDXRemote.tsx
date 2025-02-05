// app/components/ClientMDXRemote.tsx
"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

interface ClientMDXRemoteProps {
  source: MDXRemoteSerializeResult;
}

export default function ClientMDXRemote({ source }: ClientMDXRemoteProps) {
  return <MDXRemote {...source} />;
}
