/*
Debugging error of clonedeep + --optimize-minimize + source-map in Webpack 3
*/
import { Map } from 'immutable';

const obj = Map({
  foo: 'bar'
});

const obj2 = obj;
obj2.foo = 'baz';
console.log(obj2);
