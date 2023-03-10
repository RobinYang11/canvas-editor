
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
	input: "src/index.js",
	output: {
		file: "dist/bundle.js",
		format: "esm",
	},
	plugins: [
		resolve(),
		commonjs(),
		typescript(),
		babel({
			babelHelpers: "bundled",
			exclude: "node_modules/**",
		}),
		terser(),
	],
};