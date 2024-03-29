module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'prettier/prettier': 'error',
  },
}
