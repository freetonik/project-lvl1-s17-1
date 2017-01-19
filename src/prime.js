import game from './template';

const description = 'Is this number is prime?';

const rand = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const question = () => rand(1, 100);

const toStr = number => `${number}`;

const isValid = (value) => {
  if (value === 'yes' || value === 'no') {
    return true;
  }
  return false;
};

const isPrime = (number) => {
  const half = Math.floor(number / 2);
  if (number <= 2) {
    return true;
  }

  const iter = (acc) => {
    if (acc > half) {
      return true;
    }
    if (number % acc === 0) {
      return false;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const correctAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const iterations = 3;

export default () =>
  game(description, question, toStr, isValid, correctAnswer, iterations);
