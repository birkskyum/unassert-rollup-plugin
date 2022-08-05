import { RollupOptions } from "rollup";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';

export const nodeResolve = resolve({
  browser: false,
  preferBuiltins: false
});

const config: RollupOptions[] = [{
    input: './src/unassert.ts',
    external: ['rollup-pluginutils', 'acorn', 'escodegen', 'unassert', 'convert-source-map', 'multi-stage-sourcemap'],
    output: {
        file: `dist/unassert-rollup-plugin.js`,
        format: 'esm'
    },
    plugins: [
      nodeResolve,
      typescript(),
      commonjs()]
}]

export default config