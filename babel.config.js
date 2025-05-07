module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          '@pages': './pages',
          '@components': './component',
          '@assets': './assets'
        },
      }],
      'react-native-reanimated/plugin',
    ],
  };
};