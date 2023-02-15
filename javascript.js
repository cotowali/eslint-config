module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'standard',
  ],
  rules: {
    'no-undef': 'off', // for auto-import
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'no-mixed-operators': 'off',
    'template-curly-spacing': ['error', 'always'],
    'no-unused-vars': ['error', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    }],
    'no-console': 'warn',
  },
}
