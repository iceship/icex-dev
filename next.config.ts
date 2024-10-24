import createMDX from '@next/mdx';
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);