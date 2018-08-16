/*
Debugging error of clonedeep + --optimize-minimize + source-map in Webpack 3
*/
import clonedeep from 'lodash.clonedeep';
import _ from 'lodash';

const obj = {
  foo: 'bar'
};

const obj2 = clonedeep(obj);
console.log(obj2);
const obj3 = _.cloneDeep(obj);
console.log(obj3);
