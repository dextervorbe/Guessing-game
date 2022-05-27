'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = number;
let score = 20;

console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      '👀 ummmm..... I do not see any numbers inputed, try again';
  } else if (guess === number) {
    document.querySelector('.message').textContent =
      '👏 You are a guessing wizard 🙌';
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🥵 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😇 You luck has run out';
        document.querySelector('.score').textContent = 0;
        
    }
  } else if (guess < number) {
      if(score > 1) {
          document.querySelector('.message').textContent = '🥶 Too Low';
          score--;
          document.querySelector('.score').textContent = score;

      } else {
        document.querySelector('.message').textContent =
        '😇 You luck has run out';
        document.querySelector('.score').textContent = 0;
      }
  } 
});
