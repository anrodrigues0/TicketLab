module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {useTransformReactJSXExperimental: true},
      'module:react-native-dotenv',
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        envName: 'MY_ENV',
      },
    ],
  ],
};
