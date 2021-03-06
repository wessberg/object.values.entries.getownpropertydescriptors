import babel from "rollup-plugin-babel";
import {minify} from "uglify-js";
import uglify from "rollup-plugin-uglify";

const MINIFY = process.env.NODE_ENV === "production";

export default {
	entry: "src/index.js",
	format: "iife",
	moduleName: "object_values_entries_getownpropertydescriptors",
	plugins: [
		babel()
	].concat(MINIFY ? [uglify({
		compress: {
			warnings: false,
			dead_code: true,
			unsafe: true,
			drop_console: true,
			unused: true,
			loops: true,
			booleans: true,
			conditionals: true,
			sequences: true,
			properties: true,
			comparisons: true,
			if_return: true,
			join_vars: true,
			cascade: true,
			collapse_vars: true
		},
		screwIE8: false,
		comments: false,
		mangle: true
	}, minify)
	] : [])
}
