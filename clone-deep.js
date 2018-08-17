/*
clonedeep doesnt work bc uglifyJS has issues with es6
ERROR in main.js from UglifyJs
Unexpected token: keyword (const) [./node_modules/clone-deep/index.js:28,0][main.js:1,794]
*/
import clonedeep from 'clone-deep';

const obj = {
  foo: 'bar'
};

const obj2 = clonedeep(obj);
console.log(obj2);
