Quick New CRA Template

https://eslint.org/docs/user-guide/configuring

1. fix eslint strict error warning

CSS Modules Active 
webpack.config.prod
https://i.imgur.com/3iswwqk.png

webpack.config.dev
https://i.imgur.com/Pw5ghwS.png


Active popular third party css file
yarn add sass-loader node-sass postcss-cssnext

postcss.config.js
```
module.exports = {
	plugins: {
		'postcss-cssnext': {}
	}
}

```

webpack.config.prod
https://i.imgur.com/tVyxO38.png
https://i.imgur.com/p57khdG.png

webpack.config.dev
https://i.imgur.com/tVyxO38.png
https://i.imgur.com/p57khdG.png

Setup alias in webpack
https://i.imgur.com/4S0Qthx.png

Install Redux, and create customer middleware to handle ajax promise;

Bug 
webpack can't find third party assets

