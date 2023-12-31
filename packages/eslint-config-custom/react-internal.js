const { init } = require('@fullstacksjs/eslint-config/init');
const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    esm: true,
    cspell: false,
    react: true,
    typescript: {
      parserProject: project,
      resolverProject: project,
    },
  },
  extends: ['plugin:@tanstack/eslint-plugin-query/recommended'],
});
