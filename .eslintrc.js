module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true
    },
    extends: [
        "eslint: recommended",
        "plugin: jsc-a11y/recommended",
        "plugin: prettier/recommended",
        "next",
        "next/core-web-vitals"
    ],
    rules: {
        "semi": ["error", "always"]
    },
};