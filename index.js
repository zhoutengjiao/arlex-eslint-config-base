module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/essential",
  ],
  rules: {},
  parserOptions: {
    sourceType: "module",
    jsx: true,
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {},
};
