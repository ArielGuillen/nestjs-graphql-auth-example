/*NOTE - 

  The Commit's message must have the following format: <type>: <message>.The <type> in the commit can be:

  feat: implementation of a new feature
  graphql: Only changes in the graphql schema
  fix: A bug correction
  ci: Changes in files and scripts of CI configuration (eg Dockerfile)
  docs: only changes in documentation
  build: Changes that affect the compilation system or external units (eg add YARN or NPM)
  perf: an performance improvement, without changes in functionality (eg making a faster loop)
  refactor: Changes in the code that do not correct a bug or add a feature, but improve readability.
  style: Changes that do not affect the meaning of the code, only formato.
  test: Add missing tests or correct existing tests
  revert: reverse an commitment
  chore: other changes that do not affect the production code (eg update the readme)

  Example of an commit:
    feat: add a new graphql endpoint
    fix: fix a bug in the graphql endpoint
    ci: add a new CI script

  IMPORTANT: Any other type of Commit will not be accepted
*/

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
        'graphql',
      ],
    ],
  },
};
