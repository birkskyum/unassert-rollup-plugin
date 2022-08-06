import {rollup} from  'rollup';
import unassert from  '../dist/unassert-rollup-plugin.mjs';
import fs from  'fs';
import test from  'tape';
import typescript from "@rollup/plugin-typescript"

test('removes assert code', (t) => {
    // This is the example from https://github.com/unassert-js/unassert#example
    rollup({
        input: 'test/original.ts',
        plugins: [
          unassert({
              include: ['**/*'], // by default, unassert only includes .js files
            }),
            typescript()
        ]
    }).then((bundle) => {
        bundle.generate({
            format: 'es',
            sourcemap: 'inline'
        }).then((result) => {
            const expected = fs.readFileSync('test/expected.ts', 'utf8');
            t.equal(result.output[0].code, expected);
            t.end();
        });
    }).catch((e) => {
        console.error(e);
        process.exit(-1);
    });
});
