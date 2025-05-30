module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['node_modules/(?!axios)'],
  testMatch: [
    '**/*.spec.js'
  ],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest'
  }
}
