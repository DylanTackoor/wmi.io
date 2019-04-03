module.exports = {
	extends: [`airbnb-base`, `plugin:prettier/recommended`],
	env: {
		node: true,
		es6: true,
	},
	rules: {
		'prettier/prettier': 'error',
		semi: [`error`, `never`],
		quotes: [`error`, `backtick`, `avoid-escape`],
		indent: [`error`, `tab`],
		'no-tabs': 0,
		'quote-props': [`error`, `as-needed`],
		'comma-dangle': [`error`, `only-multiline`],
	},
}
