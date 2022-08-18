module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', '100'],
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'config',
        'docs',
        'feat',
        'fix',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};
