Not maintained. This was a temporary typescript port of rollup-plugin-unassert, but it's not in use anymore.

# unassert-rollup-plugin

A [Rollup](http://www.rollupjs.org) plugin to remove assertion calls via [Unassert](https://github.com/unassert-js/unassert).


## Install

`npm i -D unassert-rollup-plugin`

`yarn add -D unassert-rollup-plugin`

## Usage

Add it to the `plugins` section of your Rollup config as follows:

```ts
import {unassert} from 'unassert-rollup-plugin';

export default {
    ...
    plugins: [
        unassert()
    ]
};
```

### Available options

This plugin accepts the following options:

* `include`: A minimatch pattern or array of minimatch patterns, controlling which files are to be handled by this plugin. By default matches `*.js` only.
* `exclude`: A minimatch pattern or array of minimatch patterns, controlling which files are to be ignored by this plugin. By default it's empty.
* `sourcemap`: A boolean controlling whether to handle any existing sourcemaps, defaults to `true`. Setting this to `false` will hide the assert calls when debugging the generated bundle.
* `assertionPatterns`: as per [unassert options](https://github.com/unassert-js/unassert#options).
* `requirePatterns`: as per [unassert options](https://github.com/unassert-js/unassert#options).
* `importPatterns`: as per [unassert options](https://github.com/unassert-js/unassert#options).

### Example Rollup config

```ts
import unassert from 'unassert-rollup-plugin';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/my-lib.js',
    },
    plugins: [
        unassert({
            exclude: 'test/**/**.js',
            requirePatterns: ['assert = require("assert")']
        })
    ]
};
```
