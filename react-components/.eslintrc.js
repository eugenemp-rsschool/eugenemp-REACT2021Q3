module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'eslint:recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: ['prettier', 'react', '@typescript-eslint'],

  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
};
