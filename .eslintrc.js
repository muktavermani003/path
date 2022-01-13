module.exports = {
	root: true,
	extends: ['prettier', '@react-native-community'],
	parser: 'babel-eslint',
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	rules: {
		'prettier/prettier': ['error'],
		'react/no-did-update-set-state': 0,
		'react/no-did-mount-set-state': 0,
		'no-mixed-spaces-and-tabs': 0,
		'react/forbid-prop-types': 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'react/jsx-curly-newline': 0,
		'react/jsx-filename-extension': 0,
		camelcase: 0,
		'react/jsx-closing-bracket-location': 0,
		'array-callback-return': 0,
		'react/jsx-props-no-spreading': 0,
		'no-nested-ternary': 0,
		'no-underscore-dangle': 0,
		'new-cap': 0,
		'class-methods-use-this': 0,
		'react/jsx-wrap-multilines': 0,
	},
};
