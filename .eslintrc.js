module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],
    'react/prop-types': 'off',
    'react-native/no-inline-styles': 'off',
  },
};
