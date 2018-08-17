/*
Debugging error of clonedeep + --optimize-minimize + source-map in Webpack 3
This is enough to generate the error about x is not a function in browser console
when source-map is on, and uglify is used
*/
import clonedeep from 'lodash.clonedeep';

const obj = {
  foo: 'bar'
};

const obj2 = clonedeep(obj);

console.log(obj2);
