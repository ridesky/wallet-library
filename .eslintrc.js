module.exports = {
	root: true,
	env: {
		node: true
	},
	plugins: ["@typescript-eslint"],
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
	parser: "@typescript-eslint/parser",
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		// semi: ["error", "never"],
		// quotes: ["error", "single"],
		"prettier/prettier": "error"
	}
};
