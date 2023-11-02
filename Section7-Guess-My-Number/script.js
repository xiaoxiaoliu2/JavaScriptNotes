'use strict';
// EMOJI: cmd + ctrl + space 
/*
console.log(document.querySelector(`.message`).textContent);  // select element
// DOM (Documnet Object Model): structured representation of HTML documents. Allows JavaScript to access HTML elements and styles to manipulate them
// Document: special object serves as an entry point into the DOM, etc. document.querySelector()

// DOM method: change the element content
document.querySelector(`.message`).textContent = `Correct Number!`

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

// event: mouse clicking, mouse moving, key press
// listen to the event on button element
// GET THE ELEMENT/ using querySelector to select the button: document.querySelector(`.check`) 
// use addEventListener method on the element to attach an event handler
// 'click': the name of the event 
// function(){}: reaction(also called event handler), listen to the event, the function will only be called when the event happens

let secretNumber = Math.trunc(Math.random()*20) + 1;   //[0,20]
let score = 20;
let highscore = 0;

// guess(input), check(click event), message(judge), score
  // logic: secretNumber, guess(input) number; there is no guess(input); the guess is equal/lower/higher compared to the random number
  // FUNCTION 1: message(judge) respond to differenct scenario
  // FUNCTION 2: when the guess is 'Too high' or 'Too low', decrease the score by one
  // FUNCTION 3: when the score is 0, message(judge) respond lose the game

  // DOM also includes CSS styles: always specify a string
  // FUNCTION 4: when we win the game, 1【the background color turns to green】2【the secret number wider】

  // FUNCTION 5: implement reset button to play the game again
  // FUNCTION 6: highscore functionality

// refactoring: to get rid of some of the duplicate code; make the duplicate part as function
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
}
 
document.querySelector(`.check`).addEventListener
(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `No number!`;
    displayMessage(`No number!`);  // call the function
  
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = `Correct Number!`;
    displayMessage(`Correct Number!`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // when guess is different from secretnumber (too high/too low)
  }
  else {
    if (score > 1) {
      // document.querySelector(`.message`).textContent = guess > secretNumber ? `Too high!` : `Too low`;
      displayMessage(guess > secretNumber ? `Too high!` : `Too low`);

      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      // document.querySelector(`.message`).textContent = `You lost the game!`;
      displayMessage(`You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `Too high!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `You lost the game!`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }

  //   // when guess is too low
  // } 
});


// FUNCTION 5: implement reset button to play the game again
document.querySelector(`.again`).addEventListener
(`click`, function(){
  secretNumber = Math.trunc(Math.random()*20) + 1;   //[0,20]
  score = 20;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  // document.querySelector(`.message`).textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
})


// lose the prompt window: click the button, click outside of the window, hit ESC key