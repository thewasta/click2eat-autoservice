module.exports = {
    root: true,
    env: {
        browser: true, es2020: true, "amd": true,
        "node": true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'no-unused-vars': 'warn',
        "quotes": ["warn", "single"],
        "no-console": ["warn"],
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        "semi": [
            "error",
            "always"
        ]
    },
}
