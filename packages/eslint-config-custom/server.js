const { init } = require('@fullstacksjs/eslint-config/init');
const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');
const projectEslint = resolve(process.cwd(), 'tsconfig.eslint.json');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    esm: true,
    cspell: false,
    typescript: {
      parserProject: projectEslint,
      resolverProject: project,
    },
    disableExpensiveRules: !process.env.CI || !process.env.HUSKY,
  },
});
