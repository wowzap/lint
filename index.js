const path = require('path');

module.exports = {
  eslint: require('./configs/eslint'),
  prettier: require('./configs/prettier'),
  stylelint: require('./configs/stylelint'),
  tsconfig: require(path.resolve(__dirname, './configs/tsconfig/base.json')),
  'react-app-tsconfig': require(path.resolve(__dirname, './configs/tsconfig/react-app.json')),
  'react-library-tsconfig': require(path.resolve(__dirname, './configs/tsconfig/react-library.json')),
  'react-vite-tsconfig': require(path.resolve(__dirname, './configs/tsconfig/vite.json')),
};
