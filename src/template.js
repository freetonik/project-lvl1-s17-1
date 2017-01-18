import readlineSync from 'readline-sync';

export default (description, question, toStr,
    isValid, correctAnswer, iterations) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (acc) => {
    if (acc === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const task = question();
    console.log(`Question: ${toStr(task)}`);

    const enterAnswer = () => {
      const answ = readlineSync.question('Your answer: ');
      if (isValid(answ)) {
        return answ;
      }
      return enterAnswer();
    };

    const answer = enterAnswer();
    const correct = correctAnswer(task);
    if (answer === correct) {
      console.log('Correct!');
      iter(acc - 1);
      return;
    }
    console.log(`'${answer}' is wrong answer ;(.\nLet's try again, ${name}`);
  };
  return iter(iterations);
};
