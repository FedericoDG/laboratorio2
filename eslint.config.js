export default [
  {
    ignores: ['node_modules/**', 'public/js/full-calendar.js'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-underscore-dangle': 'off',
      'no-param-reassign': 'off',
    },
  },
];
