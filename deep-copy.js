/*
WORKS!
*/
import deepcopy from 'deep-copy';

const obj = {
  foo: 'bar',
  bar: {
    baz: 1
  }
};

const obj2 = deepcopy(obj);
obj2.foo = 'baz';
obj2.bar.baz = 2;

console.log(obj);
console.log(obj2);
