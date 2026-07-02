const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
  {
    ignores: ['build/', 'node_modules/', '.docusaurus/'],
  },
];
