module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "plugin:storybook/recommended"],
  ignorePatterns: ["**/src/**/*.stories.{ts,tsx}", "webpack.config.ts"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  plugins: ["react", "i18next", "jest", "react-hooks"],
  rules: {
    "@typescript-eslint/prefer-nullish-coalescing": 0,
    "@typescript-eslint/quotes": [2, "double"],
    "@typescript-eslint/strict-boolean-expressions": 0,
    semi: ["error", "always", {
      omitLastInOneLineBlock: true
    }],
    "@typescript-eslint/semi": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "@typescript-eslint/consistent-type-assertions": 1,
    "@typescript-eslint/naming-convention": 1,
    quotes: [2, "double"],
    "react/button-has-type": [2],
    "@typescript-eslint/no-floating-promises": 1,
    "i18next/no-literal-string": 2,
    "@typescript-eslint/ban-tslint-comment": 1,
    "@typescript-eslint/method-signature-style": 2,
    "@typescript-eslint/prefer-includes": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-dynamic-delete": "warn"
  },
  overrides: [{
    files: ["**/src/**/*.test.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off"
    }
  }]
};