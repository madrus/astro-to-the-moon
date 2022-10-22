module.exports = {
  ...require('@madrus/configs').prettier,
  importOrder: [
    '^react',
    '^@',
    '^(mobx|cy|jest)(.*)',
    '^(src|test)(.*)',
    '^[./]',
  ],
  importOrderSeparation: true,
}
