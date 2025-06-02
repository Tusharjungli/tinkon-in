import withMDX from '@next/mdx';

const nextConfig = withMDX({
  extension: /\.mdx?$/,
})({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  // ...other config
});

export default nextConfig;
