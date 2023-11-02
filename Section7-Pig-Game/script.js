'use strict';
// selecting elements(ID)
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);  // # used for ID, . used for class
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);


// initialize the game: score for both player set to 0; dice hidden

let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add(`hidden`);
  document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);
  document.querySelector(`.player--0`).classList.add(`player--active`); 
  document.querySelector(`.player--1`).classList.remove(`player--active`); 
}
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);   // toggle, if it's there, remove it; if not, add it
  player1El.classList.toggle(`player--active`);
};

// implementing functionality: rolling dice 
btnRoll.addEventListener(`click`, function () {
  // 1. generating a random dice roll
  if (playing) {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice); 

  // 2. display dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;

  // 3. check for rolled 1
  if(dice != 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // switch to next player
    switchPlayer();
  }
}
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
  // add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
  // check if player's score is >= 100
  if(scores[activePlayer] >= 10) {
    playing = false;
    // finish the game
    document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
    document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);  diceEl.classList.add(`hidden`);
    // activePlayer = activePlayer === 0 ? 1 : 0;
  } else {
    // switch to the next player
    switchPlayer();
}
  }
});


btnNew.addEventListener(`click`, init);






