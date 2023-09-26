const config = {
    semi: false,
    arrowParens: 'always',
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    printWidth: 100,
    bracketSameLine: true,
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}

module.exports = config
