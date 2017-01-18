import { cons, car, cdr } from 'hexlet-pairs';
import game from './template';

const description = 'Find the greatest common divisor of given numbers.';

const rand = () => Math.round((Math.random() * (100 - 1)) + 1);

const question = () => {
  const op1 = rand();
  const op2 = rand();
  return cons(op1, op2);
};

const toStr = pair => `${car(pair)} ${cdr(pair)}`;

const isValid = (value) => {
  if (!isNaN(parseInt(value, 10))) {
    return true;
  }
  return false;
};

const correctAnswer = (pair) => {
  const op1 = car(pair);
  const op2 = cdr(pair);

  const iter = (a, b) => {
    if (a === b) return a;
    if (a > b) {
      return iter(a - b, b);
    }
    return iter(a, b - a);
  };
  return String(iter(op1, op2));
};

const iterations = 3;

export default () =>
  game(description, question, toStr, isValid, correctAnswer, iterations);
