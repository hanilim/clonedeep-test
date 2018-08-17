/*
Debugging error of clonedeep + --optimize-minimize + source-map in Webpack 3
*/
import clonedeep from 'clone-deep';

const obj = {
  foo: 'bar'
};

const obj2 = clonedeep(obj);
console.log(obj2);
