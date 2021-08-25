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
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
};
