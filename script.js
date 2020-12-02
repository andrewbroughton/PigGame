'use strict';

//selecting elements
   
//player one
let score0EL = document.getElementById('score--0');
const current0EL = document.querySelector('#current--0');
  
//player two
const score1EL = document.getElementById('score--1');
const current1EL = document.querySelector('#current--1');

const diceImg = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

let activePlayer = 0;
let totalScore = [0, 0];
let currentScore;
let playing = true; //state variable - button functionality, buttons work only if tru

//setting initial values
score0EL.textContent = 0;
score1EL.textContent = 0;
diceImg.classList.add('hidden');
currentScore = 0

//assigning dice roll
rollDiceBtn.addEventListener('click', function() {

    if(playing) {  //state variable - button works only if true
        //generating the random number / dice roll
    let diceRoll = Math.trunc(Math.random() * 6) + 1;

    //test
    console.log(diceRoll);
    
    //display dice
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${diceRoll}.png`;

    //check if dice equals 1
    if (diceRoll !== 1) {
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        //test
        console.log('dice roll =' + currentScore);
    }
    else if (diceRoll === 1) {

        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector(`.player--1`).classList.toggle('player--active');
    };
      
    // *test - console.log('working!!');
    }
    
});

//Hold button functionality
holdBtn.addEventListener('click', function() {

    if (playing) {
        document.getElementById(`score--${activePlayer}`).textContent = 
            totalScore[`${activePlayer}`] += currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
    
   if (totalScore[activePlayer] >= 100) {
        playing = false; //state variable - stops button functionality
        diceImg.classList.add('hidden');
        console.log('you win!');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        //RESET THE GAME

   }
   else {
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
   }
    }
   
});

newGameBtn.addEventListener('click', function() {
    playing = true;
    activePlayer = 0;
    
    totalScore = [0, 0];
    currentScore = 0;
    score0EL.textContent = 0;
    current0EL.textContent = 0;
    score1EL.textContent = 0;
    current1EL.textContent = 0;

    diceImg.classList.add('hidden');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
});









