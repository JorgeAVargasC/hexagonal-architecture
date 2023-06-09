module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: true,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  importOrder: [
    '^react',
    '^@?\\w',
    '^(.*config)(/.*|$)',
    '^(.*images)(/.*|$)',
    '^(.*icons)(/.*|$)',
    '^(.*docs)(/.*|$)',
    '^(.*utils)(/.*|$)',
    '^(.*routes)(/.*|$)',
    '^(.*pages)(/.*|$)',
    '^(.*layouts)(/.*|$)',
    '^(.*components)(/.*|$)',
    '^(.*recoil)(/.*|$)',
    '^(.*atoms)(/.*|$)',
    '^(.*hooks)(/.*|$)',
    '^(.*services)(/.*|$)',
    '^\\u0000',
    '^\\.\\.(?!/?$)',
    '^\\.\\./?$',
    '^\\./(?=.*/)(?!/?$)',
    '^\\.(?!/?$)',
    '^\\./?$',
    '^.+\\.?(css)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  printWidth: 80,
}
