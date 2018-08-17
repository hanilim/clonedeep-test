/*
doesn't work because of error during minify
ERROR in ./node_modules/deepcopy/index.mjs
Module not found: Error: Can't resolve './src/index' in '/Users/hani/Documents/GitHub/clonedeep-test/node_modules/deepcopy'
 @ ./node_modules/deepcopy/index.mjs 1:0-38
 @ ./index4.js
 package hasn't been updated and issue exists in github but has no replies
*/
import deepcopy from 'deepcopy';

const obj = {
  foo: 'bar'
};

const obj2 = deepcopy(obj);
obj2.foo = 'baz';

console.log(obj2);
