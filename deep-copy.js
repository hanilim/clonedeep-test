/*
Debugging error of clonedeep + --optimize-minimize + source-map in Webpack 3

*/
import deepcopy from 'deep-copy';

const obj = {
  foo: 'bar'
};

const obj2 = deepcopy(obj);
obj2.foo = 'baz';

console.log(obj2);
