module.exports = {
  env: {
    jest: true,
  },
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  extends: ['universe', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
