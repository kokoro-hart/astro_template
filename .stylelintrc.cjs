/** @type {import("stylelint").Config} */

module.exports = {
  extends: ['stylelint-config-html/astro', 'stylelint-config-html/svelte'],
  plugins: ['stylelint-scss'],
  rules: {
    'selector-class-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/double-slash-comment-whitespace-inside': null,
  },
  ignoreFiles: ['dist/**', 'node_modules/**'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
    },
  ],
};
