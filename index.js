const prettierOptions = require("@arlex/prettier-config-base");
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/essential",
    "prettier/vue",
  ],
  rules: {
    "prettier/prettier": ["warn", prettierOptions],
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {},
};
