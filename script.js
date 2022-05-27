'use strict';

const number = Math.trunc(Math.random() *20) + 1;

console.log(number);


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess);

    if(!guess) {
        document.querySelector('.message').textContent = '👀 ummmm..... I do not see any numbers inputed, try again';
    } 
});












