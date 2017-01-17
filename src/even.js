#!/usr/bin/node

import readlineSync from 'readline-sync';
import welcome from './welcome';

const description = 'Answer "yes" if number odd otherwise answer "no".';
welcome(description);
const name = readlineSync.question('\nMay I have your name? ');
console.log(`Hello, ${name}!\n`);

const rand = () => Math.round((Math.random() * (100 - 1)) + 1);

const enterAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  if (answer !== 'yes' && answer !== 'no') {
    return enterAnswer();
  }
  return answer;
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isCorrect = (condition, parity) => {
  if ((condition === 'yes' && parity === true) || (condition === 'no' && parity === false)) {
    console.log('Correct!');
    return true;
  }
  return false;
};

export default (count) => {
  const iter = (acc) => {
    if (acc === 0) {
      console.log(`Congratulations! ${name}`);
      return;
    }
    const number = rand();
    console.log(`Question: ${number}`);
    const answer = enterAnswer();
    if (isCorrect(answer, isEven(number))) {
      return iter(acc - 1);
    }
    console.log(`'${answer}' is wrong answer ;(.\nLet's try again, ${name}`);
  };

  return iter(count);
};
