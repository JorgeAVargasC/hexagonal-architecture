module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'prettier',
  ],
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-console': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-unused-vars': 'warn',
    indent: ['error', 2],
    'react/self-closing-comp': 'error',
    'react/prop-types': 'off',
    'react/jsx-key': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(.*config)(/.*|$)'],
              ['^(.*images)(/.*|$)'],
              ['^(.*icons)(/.*|$)'],
              ['^(.*docs)(/.*|$)'],
              ['^(.*utils)(/.*|$)'],
              ['^(.*routes)(/.*|$)'],
              ['^(.*pages)(/.*|$)'],
              ['^(.*layouts)(/.*|$)'],
              ['^(.*components)(/.*|$)'],
              ['^(.*recoil)(/.*|$)'],
              ['^(.*atoms)(/.*|$)'],
              ['^(.*hooks)(/.*|$)'],
              ['^(.*services)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
}
