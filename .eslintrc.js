const FORCE_production = 0;

const path = require('path');
const importPath = require('./jsconfig.json').compilerOptions.baseUrl;
const node_envs = (process.env.NODE_ENV || "").split("+");

const production = (FORCE_production || node_envs.includes("production")) ? 2 : 0;
const production_warn = production ? 1 : 0;
const production_error_else_warn = production ? 2 : 1;

module.exports = {
	env: {
		"browser": true,
		"es6": true,
		"commonjs": true,
		"node": true,
		"jest": true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	parser: "babel-eslint",
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 8,
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true
		}
	},
	plugins: [
		"react",
		"babel",
		"import"
	],
	rules: {
		"accessor-pairs": production_warn,
		"array-bracket-newline": "off",
		"array-bracket-spacing": "off",
		"array-callback-return": ["warn", { allowImplicit: true }],
		"array-element-newline": "off",
		"arrow-body-style": "off",
		"arrow-parens": "off",
		"arrow-spacing": production_warn,
		"babel/no-invalid-this": "warn",
		"block-scoped-var": "off",
		"block-spacing": [
			"warn",
			"never"
		],
		"brace-style": [production_warn, "1tbs", { "allowSingleLine": true }],
		"callback-return": [
			"warn",
			[
				"cb",
				"error_cb",
				"cb_error",
				"success_cb",
				"cb_success",
				"callback",
				"error_callback",
				"callback_error",
				"success_callback",
				"success_error"
			]
		],
		"camelcase": "off",
		"capitalized-comments": "off",
		"class-methods-use-this": "off",
		"comma-dangle": "off",
		"comma-spacing": [production_warn, { "before": false, "after": true }],
		"comma-style": [
			production_warn,
			"last"
		],
		"complexity": "off",
		"computed-property-spacing": [
			"error",
			"never"
		],
		"consistent-return": "off",
		"consistent-this": "off",
		"constructor-super": "warn",
		"curly": "off",
		"default-case": production_warn,
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": production_warn,
		"eol-last": "off",
		"eqeqeq": "off",
		"for-direction": production_error_else_warn,
		"func-call-spacing": [production_warn, "never"],
		"func-name-matching": production_warn,
		"func-names": "off",
		"func-style": "off",
		"function-paren-newline": "off",
		"generator-star-spacing": [production_warn, { "before": true, "after": false }],
		"getter-return": "error",
		"global-require": "warn",
		"guard-for-in": "off",
		"handle-callback-err": "off",
		"id-blacklist": "error",
		"id-length": "off",
		"id-match": "error",
		"implicit-arrow-linebreak": [
			"off", // for functional programming
			"beside"
		],
		"import/no-unresolved": "error",
		"import/ignore": [],
		"import/named": "error",
		"import/default": "error",
		"indent": [production_warn, "tab", { "SwitchCase": 1 }],
		"init-declarations": "off",
		"jsx-quotes": "off",
		"key-spacing": [
			production_warn,
			{
				mode: "minimum"
			}
		],
		"keyword-spacing": [
			production_warn/* ,
			{
				overrides: {
					return: { after: false }
				}
			} */
		],
		"line-comment-position": "off",
		"linebreak-style": "off",
		"lines-around-comment": "off",
		"lines-between-class-members": [
			production_warn,
			"always",
			{ exceptAfterSingleLine: true }
		],
		"max-classes-per-file": "off",
		"max-depth": "off",
		"max-len": [production_warn, { "code": 120 }],
		"max-lines": "off",
		"max-nested-callbacks": "error",
		"max-params": "off",
		"max-statements": "off",
		"max-statements-per-line": "off",
		"multiline-comment-style": "off",
		"multiline-ternary": "off",
		"new-cap": [
			production_warn,
			{
				"newIsCap": true,
				"capIsNew": false,
				"properties": false
			}
		],
		"new-parens": "error",
		"newline-per-chained-call": "off",
		"no-alert": production_warn,
		"no-array-constructor": "off",
		"no-await-in-loop": "off",
		"no-bitwise": "off",
		"no-buffer-constructor": "error",
		"no-caller": "error",
		"no-catch-shadow": "off",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": ["error", "except-parens"],
		"no-confusing-arrow": production_warn,
		"no-continue": "off",
		"no-console": production_warn,
		"no-const-assign": "error",
		"no-constant-condition": "off",
		"no-control-regex": "warn",
		"no-delete-var": "off",
		"no-debugger": production,
		"no-div-regex": "off",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-keys": production_error_else_warn,
		"no-duplicate-case": "error",
		"no-duplicate-imports": production_error_else_warn,
		"no-else-return": "off",
		"no-empty": production,
		"no-empty-character-class": production_error_else_warn,
		"no-empty-function": "off",
		"no-empty-pattern": production_error_else_warn,
		"no-eq-null": "off",
		"no-eval": "warn",
		"no-ex-assign": "warn",
		"no-extend-native": production_error_else_warn,
		"no-extra-boolean-cast": "off",
		"no-extra-bind": "warn",
		"no-extra-label": "warn",
		"no-extra-parens": "off",
		"no-extra-semi": "warn",
		"no-fallthrough": "warn",
		"no-floating-decimal": "off",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": [
			"warn",
			{
				"boolean": false,
				"number": false,
				"string": false
			}
		],
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-inner-declarations": "off",
		"no-invalid-regexp": "error",
		"no-invalid-this": "off", // enabled through plugin
		"no-irregular-whitespace": production_error_else_warn,
		"no-iterator": "error",
		"no-labels": "off",
		"no-label-var": "error",
		"no-lone-blocks": "warn",
		"no-lonely-if": "off",
		"no-loop-func": "warn",
		"no-magic-numbers": "off",
		"no-mixed-operators": [
			production_warn,
			{
				groups: [
					["&&", "||"],
					["&", "|"],
					["+", "-"],
					["*", "/", "%"],
					["==", "!=", "===", "!==", ">", ">=", "<", "<=", "instanceof"],
					["in", "instanceof"]
				],
				allowSamePrecedence: true
			}
		],
		"no-mixed-requires": ["error", { "grouping": false, "allowCall": false }],
		"no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
		"no-multi-assign": production_warn,
		"no-multi-spaces": "off",
		"no-multi-str": "off",
		"no-multiple-empty-lines": "off",
		"no-negated-condition": "off",
		"no-nested-ternary": production_warn,
		"no-new": "off",
		"no-new-func": production_error_else_warn,
		"no-new-object": production_error_else_warn,
		"no-new-require": "error",
		"no-new-symbol": "error",
		"no-new-wrappers": "off",
		"no-obj-calls": "error",
		"no-octal": "warn",
		"no-octal-escape": "error",
		"no-param-reassign": "warn",
		"no-path-concat": production_error_else_warn,
		"no-plusplus": "off",
		"no-process-env": "off",
		"no-process-exit": "error",
		"no-proto": "off",
		"no-prototype-builtins": production_warn,
		"no-redeclare": "error",
		"no-regex-spaces": "warn",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-properties": "off",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-script-url": "warn",
		"no-self-assign": "error",
		"no-self-compare": "off",
		"no-sequences": "error",
		"no-shadow": "warn",
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "warn",
		"no-sync": "off",
		"no-tabs": "off",
		"no-template-curly-in-string": "warn",
		"no-ternary": "off",
		"no-this-before-super": "error",
		"no-throw-literal": "off", // for promise async
		"no-trailing-spaces": [
			production_warn,
			{
				ignoreComments: true,
				skipBlankLines: true
			}
		],
		"no-undef-init": "off",
		"no-undef": "error",
		"no-undefined": "off",
		"no-underscore-dangle": "off",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": production_warn,
		"no-unreachable": production_error_else_warn,
		"no-unsafe-finally": "warn",
		"no-unsafe-negation": production_error_else_warn,
		"no-unused-expressions": "warn",
		"no-unused-labels": "warn",
		"no-unexpected-multiline": "error",
		"no-unused-vars": [
			"warn",
			{
				ignoreRestSiblings: true
			}
		],
		"no-use-before-define": [
			production_error_else_warn,
			{
				"functions": false,
				"classes": false
			}
		],
		"no-useless-computed-key": "warn",
		"no-useless-constructor": production_warn,
		"no-useless-call": "warn",
		"no-useless-rename": "warn",
		"no-useless-concat": "off",
		"no-useless-escape": "warn",
		"no-useless-return": "error",
		"no-var": production_warn,
		"no-void": "error",
		"no-warning-comments": production_warn,
		"no-whitespace-before-property": production_warn,
		"no-with": "error",
		"nonblock-statement-body-position": "off",
		"object-curly-newline": [production_warn, { "consistent": true }],
		"object-curly-spacing": "off",
		"object-property-newline": "off",
		//"object-shorthand": [production_warn, "methods", {"avoidQuotes": true}],
		"one-var": [production_warn, "never"],
		"one-var-declaration-per-line": "off",
		"operator-assignment": "off",
		"operator-linebreak": "off",
		"padded-blocks": "off",
		"padding-line-between-statements": "error",
		"prefer-arrow-callback": "off",
		"prefer-const": production_warn,
		"prefer-destructuring": production_warn,
		"prefer-numeric-literals": "error",
		"prefer-object-spread": "off",
		"prefer-promise-reject-errors": ["error", { "allowEmptyReject": true }],
		"prefer-rest-params": production_warn,
		"prefer-spread": production_warn,
		"prefer-template": "off",
		"quote-props": "off",
		"quotes": "off",
		"radix": "off",
		"require-await": "warn",
		"require-jsdoc": "off",
		"require-yield": production_error_else_warn,
		"rest-spread-spacing": [
			production_warn,
			"never"
		],
		"semi": ["warn", "always", { "omitLastInOneLineBlock": true }],
		"semi-spacing": production_warn,
		"semi-style": [
			production_warn,
			"last"
		],
		"sort-imports": "off",
		"sort-keys": "off",
		"sort-vars": "off",
		"space-before-blocks": production_warn,
		"space-before-function-paren": [
			production_warn, {
				anonymous: "never",
				named: "never",
				asyncArrow: "always"
			}
		],
		"space-in-parens": "off",
		"space-infix-ops": production_warn,
		"space-unary-ops": [
			production_warn,
			{
				words: true,
				nonwords: false,
				overrides: {
					"+": true
				}
			}
		],
		"spaced-comment": "off", // for commenting out
		"strict": "off",
		"switch-colon-spacing": production_warn,
		"symbol-description": "error",
		"template-curly-spacing": production_warn,
		"template-tag-spacing": production_error_else_warn,
		"unicode-bom": [
			"error",
			"never"
		],
		"use-isnan": "error",
		"valid-jsdoc": production_warn,
		"valid-typeof": production_error_else_warn,
		"vars-on-top": "off",
		"wrap-iife": "off",
		"wrap-regex": "off",
		"yield-star-spacing": [production_warn, { "before": true, "after": false }],
		"yoda": production_warn,
		"react/button-has-type": production_error_else_warn,
		"react/no-access-state-in-setstate": "error",
		"react/no-find-dom-node": production_error_else_warn,
		"react/destructuring": "off",
		"react/display-name": "off",
		"react/no-direct-mutation-state": "error",
		"react/no-redundant-should-component-update": "error",
		"react/require-render-return": "error",
		"react/require-optimization": production_warn,
		"react/prop-types": production_warn,
		"react/no-this-in-sfc": production_error_else_warn,
		"react/no-unknown-property": ["error"],
		"react/style-prop-object": "error",
		"react/void-dom-elements-no-children": production_error_else_warn,
		"react/no-children-prop": "error",
		"react/no-danger": "error",
		"react/no-string-refs": production_error_else_warn,
		"react/no-will-update-set-state": production_error_else_warn
	},
	"settings": {
		"import/resolver": {
			"node": {
				"paths": [path.resolve(__dirname, importPath)]
			}
		}
	}
};