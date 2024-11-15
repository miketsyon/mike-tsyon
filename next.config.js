const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

// Merge configurations
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/mike-tsyon' : '',
  images: {
    unoptimized: true
  },
  distDir: 'dist'
}

// Export the merged config
module.exports = withNextra({
  ...nextConfig
})