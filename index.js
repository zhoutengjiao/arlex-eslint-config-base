module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {},
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {},
};
