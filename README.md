This module (`ciel`) writes coloured logs in console window.

Its name higlights similarities in the pronunciation of:

* spelling of the letters `C.L.` meaning “coloured logs”,

* the French word “ciel”,

* the name of a certain character in “Tsukihime”, “Kagetsu Tohya”, “Melty Blood”, “Carnival Phantasm”.

## Installing Ciel

[![(npm package version)](https://nodei.co/npm/ciel.png?downloads=true)](https://npmjs.org/package/ciel) [![(a histogram of downloads)](https://nodei.co/npm-dl/ciel.png?months=3&height=2)](https://npmjs.org/package/ciel)

* Latest packaged version: `npm install ciel`

* Latest githubbed version: `npm install https://github.com/Mithgol/node-ciel/tarball/master`

You may visit https://github.com/Mithgol/node-ciel#readme occasionally to read the latest `README` because the package's version is not planned to grow after changes when they happen in `README` only. (And `npm publish --force` is [forbidden](http://blog.npmjs.org/post/77758351673/no-more-npm-publish-f) nowadays.)

## Using Ciel

When you `require()` the installed module, you get an object with the following methods:

* `.ok(someString)`

* `.fail(someString)`

* `.warn(someString)`

* `.skip(someString)`

* `.dupe(someString)`

* `.status(someString)`

Each of them writes the corresponding message (coloured and in all caps) in the console window and then writes the given string in plain text.

Example:

![(screenshot)](https://ipfs.io/ipfs/QmY9QSyyfSr7ChXz8UmWkPAGdCu1sj85TS1F4yPqb5STUz)

## Testing Ciel

[![(build testing status)](https://img.shields.io/travis/Mithgol/node-ciel/master.svg?style=plastic)](https://travis-ci.org/Mithgol/node-ciel)

It is necessary to install [JSHint](http://jshint.com/) for testing.

* You may install JSHint globally (`npm install jshint -g`) or locally (`npm install jshint` in the directory of Ciel).

After that you may run `npm test` (in the directory of Ciel). Only the JS code errors are caught; the code's behaviour is not tested.

## License

MIT license (see the `LICENSE` file).
