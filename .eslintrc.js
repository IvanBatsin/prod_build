module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  plugins: [
    "react",
    "i18next"
  ],
  rules: {
    "@typescript-eslint/prefer-nullish-coalescing": 0,
    "@typescript-eslint/quotes": [2, "double"],
    "@typescript-eslint/strict-boolean-expressions": 0,
    semi: ["error", "always", { omitLastInOneLineBlock: true }],
    "@typescript-eslint/semi": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "@typescript-eslint/consistent-type-assertions": 1,
    "@typescript-eslint/naming-convention": 1,
    quotes: [2, "double"],
    "react/button-has-type": [2],
    "@typescript-eslint/no-floating-promises": 1,
    "i18next/no-literal-string": 2
  }
};
