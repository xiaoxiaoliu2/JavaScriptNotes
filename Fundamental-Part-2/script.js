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
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
}
console.log(yearsUtilRetirement2(1991, 'Jonas'));
console.log(yearsUtilRetirement2(1970, 'Mike'));

// Challenge
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




// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// }
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (scoreDolphins, scoreKoalas) {
//   const avgDolphins = scoreDolphins;
//   const avgKoalas = scoreKoalas;
//   if (avgDolphins >= avgKoalas * 2) {
//       console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//       console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
//   } else {
//       console.log(`No team wins...`);
//   }
// }
















// console.log('2. Objects');
// console.log('3. Arrays');
// console.log('4. Loops');























