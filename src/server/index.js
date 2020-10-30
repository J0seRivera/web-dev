require('ignore-styles');
require('@babel/polyfill');
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['jpg', 'ico', 'png', 'PNG', 'gif', 'webp'],
  name: '/assets/[hash].[ext]',
});

require('./server');
