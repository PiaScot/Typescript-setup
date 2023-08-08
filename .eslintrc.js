module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  extends: ["airbnb-base", "prettier"],
  rules: {
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
    "no-console": "off",
  },
  ignorePatterns: ["dist"],
};
