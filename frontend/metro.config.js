// This is required for Metro to understand and resolve the paths correctly during bundling.
const { getDefaultConfig } = require('expo/metro-config');

module.exports = {
  ...getDefaultConfig(__dirname),
  resolver: {
    alias: {
      '@components': './components',
      '@pages': './pages',
      '@assets': './assets',
      '@Methods': './Methods',
    },
  },
};
