import game from './template';

const description = 'What number is missing in this progression?';

const rand = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const question = () => {
  const startNum = rand(1, 10);
  const step = rand(-9, 10);
  const arr = [startNum];

  const iter = (current, count) => {
    if (count === 0) {
      return current;
    }
    const last = current[current.length - 1];
    current.push(last + step);
    return iter(current, count - 1);
  };
  return iter(arr, 10);
};

const toStr = (arr) => {
  const strArr = [];
  arr.map(value => strArr.push(value));
  strArr[5] = '..';
  return strArr.join(' ');
};

const isValid = (value) => {
  if (!isNaN(parseInt(value, 10))) {
    return true;
  }
  return false;
};

const correctAnswer = (arr) => {
  console.log(arr[5]);
  return String(arr[5]);
};

const iterations = 3;

export default () =>
  game(description, question, toStr, isValid, correctAnswer, iterations);
