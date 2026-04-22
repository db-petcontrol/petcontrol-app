const prettierConfig = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 80,

  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],

  importOrder: [
    '^react', 
    '^next', 
    '<THIRD_PARTY_MODULES>', 
    '^@/(.*)$', 
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  tailwindStylesheet: 'src/app/globals.css',
  tailwindFunctions: ['cn', 'cva'],

  tailwindConfig: './tailwind.config.ts',
}

export default prettierConfig
