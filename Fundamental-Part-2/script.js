// strict mode: a special mode that we can activate in JavaScript, which makes it easier for us to make secure JavaScript code;activate strict mode by adding string at the beginning of the script
// strict mode forbids us to do certain things and it creates visible errors in the developor console
`use strict`;
// basics of functions, objects, arrays, and loops
console.log('Fundaental Part 2');
// functions: the building blocks of real world JavaScript applications are functions, 
// like variable but with whole chunks of code: variable holds value, function holds lines of code
console.log('1. Functions');
console.log('1.1');
function logger() {
  console.log('My name is Jonas');
}
logger();    // call/invoke/run the function
logger(); 
logger();


// fruit processor function, can reuse the function with differenct input values and get a different output
// this function return value
// apples and oranges are parameters/variables
// call the function with 2 arguments;  store/capture/save the result of the function in a variable and then log the value to the console
console.log('1.2');
function fruitProcessor(apples, oranges) {       
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;     
}

const appleJuice = fruitProcessor(5, 0);    
const appleOrangeJuice = fruitProcessor(2,3); 
console.log('1.2.1 ' + appleJuice);
console.log('1.2.2 ' + appleOrangeJuice);
console.log('1.2.3 ' + fruitProcessor(5, 0));      // log the result of the function directly


// Parameter: placeholder in the function; Argument: the actual value filled in the placeholder, the function returns a value, out or the function we can save the value into a variable
console.log('1.3 function declaration & function expression');

function calcAge1(birthYear) {               // function declaration: can be called before defined
  return 2037 - birthYear;
}
const calcAge2 = function (birthYear) {      // function expression: save function value to a variable
  return 2037 - birthYear;
}
const calcAge3 = birthYear => 2037 - birthYear; // Arrow Function: a special form of function expression: param => result

const age1 = calcAge1(1991);
console.log('1.3.1 ' + age1);
const age2 = calcAge2(1991);
console.log('1.3.2 ' + age2);
const age3 = calcAge3(1991);
console.log('1.3.3 ' + age3);


const yearsUtilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
}
const yearsUtilRetirement1 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log('1.3.4 ' + yearsUtilRetirement(1991));
console.log('1.3.5 ' + yearsUtilRetirement1(1991, 'Jonas'));
console.log('1.3.6 ' + yearsUtilRetirement1(1980, 'Bob'));

// functions calling other functions
console.log('1.4 functions calling other functions')
function cutFruitPieces(fruit) {
  return fruit * 3;
}
function fruitProcessor1(apple, oranges) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log('1.4.1 ' + fruitProcessor1(2, 3));

// Function review
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const yearsUtilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log('1.4.2 ' + `${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log('1.4.2 ' + `${firstName} has already retired`);
    return -1;
  }
}
console.log('1.4.2 ' + yearsUtilRetirement2(1991, 'Jonas'));
console.log('1.4.2 ' + yearsUtilRetirement2(1970, 'Mike'));

// Challenge
console.log('CHALLENGE');
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
      console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
      console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
      console.log(`No team wins...`);
  }
}
checkWinner(scoreDolphins, scoreKoalas);


// Data structure_ Arrays: to store data, then process
// 2 important data structure in JS are arrays and objects
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

console.log('2. Arrays');
const friends = ['Michael', 'Steven', 'Peter'];   // literal syntax
const year = new Array(1991, 1982, 2008, 2020);
// read value
console.log(friends);
console.log('2.2 ' + friends[0]);       // Michael
console.log('2.3 ' + friends.length);   // 3
console.log('2.4 ' + friends[friends.length - 1]);  // Peter

// replace value
friends[2] = 'Jay';
console.log(friends);

// different type of value in Array
const firstName1 = 'Jonas';
const jonas = [firstName1, 'Schedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log('2.7 ' + jonas.length);

// Exercise
const calcAge4 = birthYear => 2037 - birthYear;
const years1 = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAge4(years1[0]);
const age5 = calcAge4(years1[1]);
const age6 = calcAge4(years1[years1.length - 1]);
console.log('2.7 ' + age4, age5, age6);
const ages = [calcAge4(years1[0]), calcAge4(years1[1]), calcAge4(years1[years1.length - 1])];
console.log(ages);

// Array Operations: also called methods
// push: add elements to the end of array
// unshift: add elements to the begining of the array
// pop: remove the last one element from the array
// shift: remove the first one element from the array
// indexof: the index of the element
// includes: if the element is included in the array

const friends1 = ['Michael', 'Steven', 'Peter'];
console.log(friends1);
friends1.push('Jay')
console.log(friends1);
friends1.unshift('John');
console.log(friends1);
friends1.pop();
console.log(friends1);
friends1.shift();
console.log(friends1);
console.log('2.8 ' + friends1.indexOf('Steven'));
console.log('2.9 ' + friends1.includes('Steven'));
if (friends1.includes('Steven')) {
  console.log('2.10 ' + 'You have a friend called Steven');
}



//Data structure_ Object: Key/property-Value pair, the order of elements does not matter
// Object for more order data, array from unstructure data
console.log('3. Objects');
// object literal syntax
// retrive data add new properties, and change data in objects using the dot and bracket notation
const jonas1 = {
  theFirstName: 'Jonas',
  theLastName: 'Schedtmann',
  theAge: 2037 - 1991,
  job: 'teacher',
  myFriends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas1);
console.log('3.1 ' + jonas1.theLastName);     // dot notation to retrive data

const nameKey = 'Name';
console.log('3.2 ' + jonas1['theLastName']);  // bracket notation 
console.log('3.3 ' + jonas1['theFirst' + nameKey]);
console.log('3.4 ' + jonas1['theLast' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstNae, lastName, age, job, and friends');
if (jonas1[interestedIn]) {
  console.log('3.5 ' + jonas1[interestedIn]);
} else {
  console.log('3.5 ' + 'Wrong request! Choose between firstNae, lastName, age, job, and friends');
}
// add properties to object
jonas1.location = 'Portugal';
jonas1['twitter'] = '@jonasschmedtman';
console.log(jonas1);

// challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log('3.6 ' + `${jonas1.theFirstName} has ${jonas1.myFriends.length} friends, 
and his best friend is called ${jonas1.myFriends[0]}`);

// object methods, add functions in object
// function attached to object is called method

const jonas2 = {
  theFirstName: 'Jonas',
  theLastName: 'Schedtmann',
  birthYear: 1991,
  job: 'teacher',
  myFriends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: false,

  // case 1
  // calcAge5: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // case 2
  // calcAge5: function () {
  //   console.log(this);            // this refers to the current object
  //   return 2037 - this.birthYear; //  using the value in object
  // }

  // case 3
   calcAge5: function () {
    this.age7 = 2037 - this.birthYear;    // use this to store a new property
    return this.age7;
   },       

   getSummary: function () {
    return `${this.theFirstName} is a ${this.calcAge5()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
   }
};

// case 1
// console.log(jonas2.calcAge5(1991));
// console.log(jonas2[`calcAge5`](1991));
// case 2
// console.log(jonas2.calcAge5());
// case 3
console.log(jonas2.calcAge5());
console.log(jonas2.age7);

// challenge
console.log(jonas2.getSummary());


/* Challenge: Write your code below. Good luck! 🙂 */
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
  }
};
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
  }
};
console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(mark.bmi>john.bmi ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!` : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)

if (mark.bmi>john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi>mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

// control structures: if(){}else{}, loop(for loop, while loop)
// loop allows us to automate repetitive tasks: for(initialvalue; condition; ) {}
// for loop keeps running while condition is TRUE
console.log('4. Loops_for loop');
// case 1
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// case 2
const jonasArray = [
  'Jonas',
  'Schedtmann',
  2037-1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonas[i], typeof jonasArray[i]);
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

// case 3
const years = [1991, 2007, 1969, 2020];
const age = [];
for (let i = 0; i < years.length; i++) {
  // age[i] = 2037 - year[i];
  age.push(2037 - years[i]);
}
console.log(age);

// 2 important statements for loops: continue, break
// continue is to exit the current iteration of the loop and continue to the next one
// break is used to completely terminate the whole loop

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonas[i] !== 'string') continue;   // TYPE THE VALUE WHICH IS STRING
  console.log(jonas[i], typeof jonasArray[i]);
}

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonas[i] === 'number') break;       // WHEN COME ACROSS NUMBER, STOP THE LOOP
  console.log(jonas[i], typeof jonasArray[i]);
}

// LOOPING BACKWARDS
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonas[i], typeof jonasArray[i]);
}

// CREATE A LOOP INSIDE A LOOP

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for(let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise} Lifting weight reptition ${rep}`);
  }
};

// WHILE LOOP: a loop can be used without a counter
console.log('4. Loops_for loop');
for (let rep = 1; rep <= 10; rep++) {
  console.log(`For loop: Lifting weights repetition ${rep}`);
}
// case 1
let rep = 1;
while (rep <= 10) {
  console.log(`While loop: Lifting weights repetition ${rep}`);
  rep++;
}

// case 2

let dice = Math.trunc(Math.random() * 6) + 1;  // trunc: [0,5]
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

// Challenge
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i <= bills.length-1; i++) {
    tips[i] = calcTip(bills[i]);
}
for (let i = 0; i <= bills.length-1; i++) {
  totals[i] = bills[i] + tips[i];
}
console.log(tips);
console.log(totals);


const calcAverage0 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage0([2, 3, 7]));
console.log(calcAverage0(totals));
console.log(calcAverage0(tips));