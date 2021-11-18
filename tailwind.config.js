module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                18: '4.5rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
