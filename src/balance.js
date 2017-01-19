import game from './template';

const description = 'Balance the given number.';

const question = () => Math.round((Math.random() * (10000 - 10)) + 1);

const toStr = number => `${number}`;

const isValid = (value) => {
  if (!isNaN(parseInt(value, 10))) {
    return true;
  }
  return false;
};

const correctAnswer = (number) => {
  const arr = String(number).split('').sort().map(Number);
  const len = arr.length - 1;

  const iter = (current) => {
    if ((current[len] - current[0]) <= 1) {
      return arr.join('');
    }
    arr[0] += 1;
    arr[len] -= 1;
    return iter(current.sort());
  };
  return iter(arr);
};

const iterations = 3;

export default () =>
  game(description, question, toStr, isValid, correctAnswer, iterations);
