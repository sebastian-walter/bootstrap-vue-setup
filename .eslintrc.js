const path = require('path');

module.exports = {
  'plugins': [
    'jasmine',
    'sort-imports-es6-autofix',
  ],
  'env': {
    'jasmine': true,
  },
  'extends': [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/recommended',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack-dev.config.js'
      }
    }
  },
  'parserOptions': {
    'ecmaVersion': 7,
    'sourceType': 'module',
  },
  'rules': {
    'comma-dangle': ['error', 'always-multiline'],
    'func-names': 0,
    'import/first': 0,
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'import/no-nodejs-modules': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'indent': 'off',
    'max-len': ['error', {
      'code': 120,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }],
    'no-mixed-spaces-and-tabs': 0,
    'no-plusplus': ['error', {'allowForLoopAfterthoughts': true}],
    'no-tabs': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': ['error', {
      'ObjectExpression': {'multiline': true},
      'ObjectPattern': {'multiline': true}
    }],
    'sort-imports-es6-autofix/sort-imports-es6': [2, {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
    }],
    'vue/order-in-components': [2, {
      order: ['name',
        'props',
        'extends',
        'components',
        'directives',
        'data',
        'computed',
        'methods',
        'watch',
        'filters',
        'LIFECYCLE_HOOKS',
        'mixins',
        ['delimiters', 'functional', 'model', 'parent', 'provide', 'inject', 'el', 'template', 'propsData', 'render', 'renderError'],
      ],
    }],
    'vue/require-v-for-key': 0,
    'vue/valid-v-for': 0,
  },
};
