module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread":true,
            "arrowFunctions":true,
            "spread":true
        }
    },
    "rules": {
        "strict":0
    },
    "plugins":[
    "react"
     ]
};
