// module.exports = {
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:@typescript-eslint/eslint-recommended",
//     "plugin:prettier/recommended",
//     "prettier/@typescript-eslint",
//     "plugin:react/recommended"
//   ],
//   plugins: [
//     "@typescript-eslint"
//   ],
//   parser: "@typescript-eslint/parser",
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
//   rules: {
//     eqeqeq: "warn",
//     curly: "warn",
//     quotes: ["error", "double"],
//     semi: ["error", "always"]
//   },
// };
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks'
  ],
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    project: [
      "tsconfig.json",
    ],
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-filename-extension': ['warn', {extensions: ['.jsx', '.tsx']}],
    'react/prop-types': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
