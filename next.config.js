const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  output: 'export',
  basePath: '/mike-tsyon',
  images: {
    unoptimized: true
  }
}

module.exports = withNextra(nextConfig)