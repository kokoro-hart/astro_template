/** @type {import("eslint/lib/shared/types").ConfigData} */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'unused-imports'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/prefer-default-export': 'off',
    'unused-imports/no-unused-imports': 'error',
  },
  globals: {
    Astro: 'readonly',
    window: 'readonly',
  },
  overrides: [
    // for mjs files
    {
      files: ['**/*.mjs'],
      rules: {},
    },
    // for Astro files
    {
      files: ['**/*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
    // for TypeScript files
    {
      files: ['**/*.ts'],
      rules: {},
    },
  ],
  ignorePatterns: ['astro.config.mjs', '.eslintrc.cjs', '.stylelintrc.cjs'],
};
