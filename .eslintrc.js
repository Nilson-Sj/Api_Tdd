module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017
    },

    "parser": "babel-eslint",

    "rules": {
        "no-undef": "error",
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ], "no-unused-vars": [
            "error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
        ]
    }
};