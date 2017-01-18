import { cons, car, cdr, toString } from 'hexlet-pairs';
import game from './template';

const description = 'What is the result of the expression?';

const rand = () => Math.round((Math.random() * (100 - 1)) + 1);

const randOp = () => {
  const list = ['+', '-', '*'];
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

const question = () => {
  const op1 = rand();
  const op2 = rand();
  const operator = randOp();
  return cons(cons(op1, op2), operator);
};

const toStr = (pair) => {
  const op1 = car(car(pair));
  const op2 = cdr(car(pair));
  const operator = cdr(pair);
  return `${op1} ${operator} ${op2}`;
};

const isValid = (value) => {
  if (!isNaN(parseInt(value, 10))) {
    return true;
  }
  return false;
};

const correctAnswer = (pair) => {
  const op1 = car(car(pair));
  const op2 = cdr(car(pair));
  const operator = cdr(pair);
  switch (operator) {
    case '+':
      return String(op1 + op2);
    case '-':
      return String(op1 - op2);
    case '*':
      return String(op1 * op2);
    default:
      return 'Undefined operator';
  }
};

const iterations = 3;

export default () =>
  game(description, question, toStr, isValid, correctAnswer, iterations);
