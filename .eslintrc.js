module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-console': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
