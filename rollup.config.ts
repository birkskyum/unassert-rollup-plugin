import { RollupOptions } from "rollup";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';

export const nodeResolve = resolve({
  browser: false,
  preferBuiltins: false
});

const config = (format, extension): RollupOptions => ({
    input: './src/unassert.ts',
    external: ['rollup-pluginutils', 'acorn', 'escodegen', 'unassert', 'convert-source-map', 'multi-stage-sourcemap'],
    output: {
        file: `dist/${format}/unassert-rollup-plugin.${extension}`,
        format,
        sourcemap: true
    },
    plugins: [
      nodeResolve,
      typescript(),
      commonjs()]
})

const configArray: RollupOptions[] = [
  config('cjs', 'cjs'),
  config('esm', 'mjs')
];

export default configArray

