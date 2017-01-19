#!/usr/bin/node

import readlineSync from 'readline-sync';
import balance from '../balance';
import calc from '../calc';
import even from '../even';
import gcd from '../gcd';
import prime from '../prime';
import progression from '../progression';

const list = ['Balance', 'Calc', 'Even', 'GCD', 'Prime', 'Progression'];
const index = readlineSync.keyInSelect(list, 'Choose a game: ');
switch (list[index]) {
  case 'Balance':
    balance();
    break;
  case 'Calc':
    calc();
    break;
  case 'Even':
    even();
    break;
  case 'GCD':
    gcd();
    break;
  case 'Prime':
    prime();
    break;
  case 'Progression':
    progression();
    break;
  default:
    console.log('Bye! See you soon :)');
}
