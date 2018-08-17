/*
this WORKS
However, it adds 50kb and requires rewriting a lot of code
*/
import { Map } from 'immutable';

const obj = Map({
  foo: 'bar'
});

const obj2 = obj.set('foo', 'baz');
console.log(obj2.get('foo'));
