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
document.body.addEventListener(`click`, high5);   // addEventListener is higher order function; high5 is callback function

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



// closure

































