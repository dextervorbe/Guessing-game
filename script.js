'use strict';

//creating random number

let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').value = number;

//setting scores

let score = 20;
let highscore = 0;



const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// function fires once player hits guess button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //if it is not a valid input

  if (!guess) {
    displayMessage('👀 ummmm..... I do not see any numbers inputed, try again');
  }

  //If player guesses correctly
  else if (guess === number) {
    displayMessage('👏 You are a guessing wizard 🙌');

    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } 
  }

  //If player guesses wrong
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '🥵 Too High' : '🥶 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😇 You luck has run out');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//restart game

document.querySelector('.again').addEventListener('click', function () {
  alert('Press Ok to start');
  
  score = 20;
  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing....');
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';

  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

});
