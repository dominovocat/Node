'use strict';
const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

console.log('hi!');

const result = MyMath.sum(2,6);
console.log('result = ',result);

const comp1 = new Component();
comp1.render();

const fs = require('fs/promises');

fs.readFile('./text.txt','utf-8')
.then((content)=>{
  const newContent = content+'\nLorem!';
  fs.writeFile('./text2.txt',newContent,'utf-8')
})

