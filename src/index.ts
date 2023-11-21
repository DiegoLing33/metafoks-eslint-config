export = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import-helpers'],
    extends: [
        'eslint:recommended',
        'plugin:mobx/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    ignorePatterns: ['./src/__deprecated__/**/*.tsx'],
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['app', './src/app'],
                    ['entities', './src/entities'],
                    ['widgets', './src/widgets'],
                    ['features', './src/features'],
                    ['shared', './src/shared'],
                    ['pages', './src/pages'],
                    ['components', './src/components'],
                    ['screens', './src/screens'],
                    ['assets', './src/assets'],
                    ['lib', './src/lib'],
                    ['src', './src'],
                ],
                ignorePatterns: ['e2e/**/*'],
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        },
    },
    rules: {
        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': 0,

        // https://eslint.org/docs/rules/class-methods-use-this
        'class-methods-use-this': 0,

        // https://eslint.org/docs/rules/consistent-return
        'consistent-return': 0,

        // https://eslint.org/docs/rules/consistent-this
        'consistent-this': ['warn', 'self'],

        // https://eslint.org/docs/latest/rules/curly
        curly: ['error', 'multi-line'],

        // https://eslint.org/docs/rules/global-require
        'global-require': 0,

        // https://eslint.org/docs/latest/rules/max-len
        'max-len': ['error', { code: 120 }],

        // https://eslint.org/docs/rules/max-classes-per-file
        'max-classes-per-file': ['error', 1],

        // https://eslint.org/docs/rules/no-async-promise-executor
        'no-async-promise-executor': ['error'],

        // https://eslint.org/docs/rules/no-console
        'no-console': 0,

        // https://eslint.org/docs/rules/no-empty
        'no-empty': ['error', { allowEmptyCatch: true }],

        // https://eslint.org/docs/rules/no-irregular-whitespace
        'no-irregular-whitespace': ['error', { skipRegExps: true, skipTemplates: true }],

        // https://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': ['error'],

        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': ['error'],

        // https://eslint.org/docs/rules/no-param-reassign
        'no-param-reassign': ['error', { props: false }],

        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': 0,

        // https://eslint.org/docs/rules/no-return-assign
        'no-return-assign': 0,

        // https://eslint.org/docs/rules/no-return-await
        'no-return-await': 0,

        // https://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-finally': ['error'],

        // https://eslint.org/docs/rules/operator-assignment
        'operator-assignment': 0,

        // https://eslint.org/docs/rules/prefer-const
        'prefer-const': ['error', { destructuring: 'all' }],

        // https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': 0,

        // https://eslint.org/docs/rules/prefer-promise-reject-errors
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

        // Mobx

        // https://github.com/mobxjs/mobx/blob/main/packages/eslint-plugin-mobx/README.md
        'mobx/exhaustive-make-observable': 'warn',
        'mobx/unconditional-make-observable': 'error',
        'mobx/missing-observer': 'off',

        // https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md
        'import-helpers/order-imports': [
            'error',
            {
                newlinesBetween: 'always',
                groups: [
                    'module',
                    ['/^lib/'],
                    ['/^app/'],
                    ['/^pages/'],
                    ['/^widgets/'],
                    ['/^features/'],
                    ['/^entities/'],
                    ['/^shared/'],
                    ['/^src/__deprecated__/'],
                    ['/^src/'],
                    ['parent', 'sibling', 'index'],
                ],
                alphabetize: { order: 'asc', ignoreCase: true },
            },
        ],
    },
};
