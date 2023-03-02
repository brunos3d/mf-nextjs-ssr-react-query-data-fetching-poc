const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const { dependencies } = require('../../package.json');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  images: {
    domains: ['dummyjson.com', 'i.dummyjson.com'],
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'plp',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
        exposes: {
          './ProductsPage': './pages/index.tsx',
          './ProductList': './components/ProductList/index.tsx',
          './ProductCard': './components/ProductCard/index.tsx',
        },
        shared: {
          '@tanstack/react-query': {
            requiredVersion: false,
            singleton: true,
          },
          '@tanstack/query-core': {
            requiredVersion: false,
            singleton: true,
          },
          'styled-components': {
            eager: true,
            singleton: true,
            requiredVersion: dependencies['styled-components'],
          },
        },
      })
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
