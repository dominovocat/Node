// require('./style.css');
import "./style.css";
// const Component = require('./Component');
import Component from "./Component";
import secret, * as MyMath from "./math";

const comp = new Component(12);
const resultOfPow = MyMath.pow(5, 3);
console.log(resultOfPow);
const resultOfSum = MyMath.sum(5, 5);
console.log(resultOfSum);
console.log(secret());
