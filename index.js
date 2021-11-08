'use strict';
const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

console.log('hi!');

const result = MyMath.sum(2,6);
console.log('result = ',result);

const comp1 = new Component();
comp1.render();