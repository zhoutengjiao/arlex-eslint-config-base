module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    // 'prettier/prettier': ['warn', ]
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {},
};
