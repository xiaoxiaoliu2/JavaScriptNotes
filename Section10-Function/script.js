'use strict';
// default parameters: the parameters set by default
// const bookings = [];
const createBooking = function (
  flightNum, 
  numPassengers = 1, 
  price = 199 + numPassengers
  ) {
  // ES5 way to write default parameter
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers, 
    price,
  };
  console.log(booking);
};
createBooking(`LH123`);
createBooking(`LH123`, 2, 800);
createBooking(`LH123`, 2);
createBooking(`LH123`, 6);
createBooking(`LH123`, undefined , 1000);  // skip a parameter

// How it works to pass arguments into functions: primitives vs objects
const flight = `LH234`;     // string: primitive type, value is unchangable
const jonas = {             // object type, value is changable in the function
  name: `Jonas Schmedtmann`,
  passport: 8768686868,
};
const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr. ` + passenger.name;

  if (passenger.passport === 8768686868) {
    alert(`Checked in`);
  } else {
    alert(`Wrong passport!`);
  }
};
// checkIn(flight, jonas);  // const flightNum = flight;    const passenger = jonas;
// console.log(flight);    // not change
// console.log(jonas);     // change

// passing a primitive type to a function is the same as creating a copy outside the function, the value is copied
// when passing an object to a function is like copy an object, whatever change in the copy will also happen in the orginal

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);

// JavaScript does not have pass by reference, only passing by value
// for the object, pass a reference to the function, but not pass by reference
// C++ can pass a reference to any value instead of the value itself

// fundamental property of the JavaScript language: has first class function, which enables us to write higher order function

// function methods: bind method
// first-class functions and higher order functions
// first-class functions: a concept means that all functions are values
// higher order functions: functions as argument; functions as return in another function
// / /g: regular expression to select all the space in the string
 
const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`JavaScript is the best!`, oneWord);

// JS uses callbacks all the time
const high5 = function() {
  console.log(`⭐️`);
}
document.querySelector(`.buy`).addEventListener(`click`, high5);   // addEventListener is higher order function; high5 is callback function

// function returns a new funciton
const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  };
};

greet(`Hello`)(`Jonas`);
const greeterHey = greet(`Hey`);
greeterHey(`Jonas`);
greeterHey(`Steven`);

// arrow function return arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr(`Hi`)(`Jonas`);


// this key word
const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LM`,
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat aon ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
  },
};
lufthansa.book(239, `Jonas Schmedtmann`);
lufthansa.book(635, `John Smith`);
console.log(lufthansa);

const eurowings = {
  name: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
}

// call, apply, bind
// Call method
console.log(`__________________________________`)
console.log(`Call & Apply Method`)
const book = lufthansa.book;
book.call(eurowings, 23, `Sarah William`);   // this in book refer to eurowings
console.log(eurowings);

book.call(lufthansa, 239, `Mary Cooper`);   // this in book refer to lufthansa
console.log(lufthansa);

const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings:[],
};

book.call(swiss, `Mary Cooper`);
console.log(swiss);

// Apply method: not used in modern JS
const flightData = [589, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);    // spread method to gestructure the array

// Bind Method: allows us to manually set this keywords for any function call
// bind does not immediately call the function, instead it returns a new function where this keyword is bound
console.log(`__________________________________`)
console.log(`Bind Method`)
// const bookEW = book.bind(eurowings);
// bookEW(23, `Steven Williams`);
const bookEW23 = book.bind(eurowings, 12345);
bookEW23(`Jonas Schmedtmann`);
bookEW23(`Martha Cooper`);

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes); 
};
document.querySelector(`.buy`).addEventListener(
  `click`, lufthansa.buyPlane.bind(lufthansa));    // use bind to set this refer to the object lufthansa, or under addEventListener, this in buyPlane refer to the class name 'buy'

// Partial application: another use for bind method
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);  // set the rate as fixed number, rate param must be put at the first place
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));

// grid function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));


// CHALLENGE: simple Poll application
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(`${this.question}\n${this.options.join(`\n`)}\n(Write option numbr)`)
    );
    console.log(answer);
    // Register answer
    typeof answer === `number` && answer < this.answers.length && this.answers[answer]++;
    this.displayResults();
    this.displayResults(`string`);
  },

  displayResults (type = `array`) {     // default type is string
    if (type === `array`) {
      console.log(this.answers);
    } else if (type === `string`) {
      console.log(`Poll results are ${this.answers.join(`, `)}`);
    }
  }
};

  // poll.registerNewAnswer()
document.querySelector(`.poll`).addEventListener(`click`, poll.registerNewAnswer.bind(poll));

poll.registerNewAnswer();
poll.displayResults();

poll.displayResults.call({answers: [5, 2, 3]}, `string`);
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, `string`);
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});



// const registerNewAnswer = function() {
//   const input = prompt(
//     `What is your favourite programming language?
//           0: JavaScript
//           1: Python
//           2: Rust
//           3: C++
//           (Write option number)`
//   );
//   input;
//   if (Number.isInteger(Number(input)) && input >= 0 && input<=3) {
//     poll.answers[input]++; 
//   } else {
//     prompt(`Invalid Input! Please try again!`);
//     input;
//   };
// }
// // registerNewAnswer();


// document.querySelector(`.poll`).addEventListener(`click`, registerNewAnswer);

// const displayResults = function(type) {
//   if (typeof(type) === array){
//      console.log(poll.answers);
//     } else if (typeof(type) === string) {
//       console.log(`Poll results are 13, 2, 4, 1`);
//     }
// }

// Immediately Invoked Function Expressions(IIFE)
// a function only executed once and never again
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

// IIFE
(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})();
// console.log(isPrivate);   // inaccessible
(() => console.log(`This will ALSO never run again`))();

{
  const isPrivate = 23;
  var notPrivate = 46;     // variable defined by var is accessible
}
// console.log(isPrivate);
console.log(notPrivate);

// closure: internal property of a function
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

// Examples
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 5;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function
h();
f();    // variable environment, closure change from a = 23 to b = 5
console.dir()

// Example2
const boardPassengers = function(n, wait) {
  const perGroup = n / 3;
  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); // function will be executed after 1000 milliseconds, wait is in seconds
  console.log(`Will start boarding in ${wait} seconds`);
};


///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');   // saved to the backpack of the function
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();






























