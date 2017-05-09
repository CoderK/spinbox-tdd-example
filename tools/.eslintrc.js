module.exports = {
    parser: "babel-eslint",
    extends: "airbnb",
    plugins: [
        "react",
        "jsx-a11y",
        "import"
    ],
    env: {
        "browser": true,
        "node": true,
        "jest": true
    },
    globals: {
        "describe": false,
        "before": false,
        "after": false,
        "beforeEach": false,
        "afterEach": false,
        "it": false,
        "sinon": false
    },
    rules: {
        "indent": ["error", 4],
        "comma-dangle": 0,
        "no-underscore-dangle": 0,
        "no-alert": 0,
        "no-debugger": 0,
        "no-constant-condition": 0,
        "no-plusplus": 0,
        "no-param-reassign": 0,
        "no-unused-expressions": 0,
        "quote-props": 0,
        "class-methods-use-this": 0,
        "import/extensions": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": 0,
        "react/jsx-space-before-closing": 0,
        "jsx-a11y/img-has-alt": 0,
        "jsx-a11y/img-uses-alt": 0,
        "jsx-a11y/label-uses-for": 0,
        "jsx-a11y/mouse-events-map-to-key-events": 0,
        "jsx-a11y/no-hash-href": 0,
        "jsx-a11y/redundant-alt": 0,
        "jsx-a11y/valid-aria-role": 0
    }
};