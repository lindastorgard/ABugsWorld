module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    'prettier',
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', "vue/component-name-in-template-casing": "error",
    'linebreak-style': 0,
    'no-param-reassing': 0,
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "any"
        }
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  };