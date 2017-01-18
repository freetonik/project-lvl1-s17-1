import game from './template';

const description = 'Answer "yes" if number odd otherwise answer "no".';

const question = () => Math.round((Math.random() * (100 - 1)) + 1);

const toStr = number => number;

const isValid = (value) => {
  if (value === 'yes' || value === 'no') {
    return true;
  }
  return false;
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const correctAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

const iterations = 3;

export default () =>
  game(description, question, toStr, isValid, correctAnswer, iterations);
