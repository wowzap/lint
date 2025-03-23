# 🎉 Introduce

- eslint: `^8.31.0`
- prettier: `^2.8.8`
- typescript: `4.9.5`
- stylelint: `^14.16.1`

# 🔨 Usage

## .eslintrc.js

```js
module.exports = {
  root: true,
  extends: [require.resolve('@wowzap/lint/configs/eslint')],
  compilerOptions: {
    "jsxImportSource": "@emotion/react", // for emotion
  }
}
```

## .prettierrc.js

```js
const prettierConfig = require('@wowzap/lint/configs/prettier')

module.exports = {
  ...prettierConfig,
}
```

## .stylelintrc.js

```js
module.exports = {
  extends: ['@wowzap/lint/configs/stylelint'],
}
```

## tsconfig.json

```json
{
  "extends": "@wowzap/lint/configs/tsconfig/react-library.json",
}
```
