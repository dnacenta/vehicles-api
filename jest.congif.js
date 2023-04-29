const {defaults: tsjPreset} = require('ts-jest/presets');

const transformIgnoreModules = [
  "@react-navigation/bottom-tabs",
  "@react-navigation/native",
  "@react-navigation/native-stack",
  "@rneui/base",
  "@rneui/themed",
  "axios",
  "expo",
  "expo-secure-store",
  "expo-status-bar",
  "react",
  "react-native",
  "react-native-gesture-handler",
  "react-native-safe-area-context",
  "react-native-screens",
];

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(' + transformIgnoreModules.join('|') + ')/)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMocks.js',
  },
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './__setup__.js',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './__setupAfterEnv__.ts',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    './App.tsx',
    '!./src/generated/**',
  ],
  transform: tsjPreset.transform,
  globals: {
    window: {
      confirm: {},
    },
    'ts-jest': {
      babelConfig: true,
    },
  },
  globalSetup: './global-setup.js',
  cacheDirectory: '.jest/cache',
  timers: 'fake',
  testEnvironment: 'jsdom',
};
