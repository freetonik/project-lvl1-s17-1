#!/usr/bin/node
const readlineSync = require('readline-sync');

console.log('Welcome to the Brain Games!');

const actual = readlineSync.question('\nMay I have your name? ');
console.log(`Hello, ${actual}!`);
