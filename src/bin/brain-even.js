#!/usr/bin/node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number odd otherwise answer "no".');

const actual = readlineSync.question('\nMay I have your name? ');
console.log(`Hello, ${actual}!\n`);

const rand = () => Math.round((Math.random() * (100 - 1)) + 1);

const even = num => num % 2 === 0;

const answer = () => {
  const ans = readlineSync.question('Your answer: ');
  if (ans !== 'yes' && ans !== 'no') {
    return answer();
  }
  return ans;
};

const game = () => {
  const iter = (acc) => {
    if (acc === 0) {
      return console.log(`Congratulations! ${actual}`);
    }
    const num = rand();
    console.log(`Question: ${num}`);
    const ans1 = answer();
    if (ans1 === 'yes' && even(num)) {
      console.log('Correct!');
    } else if (ans1 === 'no' && !even(num)) {
      console.log('Correct!');
    } else {
      console.log(`'${ans1}' is wrong answer ;(.\nLet's try again, ${actual}`);
      return null;
    }
    return iter(acc - 1);
  };
  return iter(3);
};

game();
