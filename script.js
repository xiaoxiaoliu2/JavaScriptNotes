console.log('________________________________')
console.log('Here is the class exercises!')
// Values and Variables
// variables: store values that have a type; naming rules: camel case notation, descriptive
console.log('1. Value')
console.log("1.1 Jonas");    
console.log('1.2 ' + 23);

console.log('2. Variables')
let firstName = "Jonas";   
let first = "jonas"
console.log('2.1 ' + firstName);

let jonas_matilda = "JM";
let $function = 27;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// Data Types
// the type of values: number, string, boolean|| Undefined, Null, Symbol, BigInt
// no need to define the types of the value
console.log('3. Data Types')
let javascriptIsFun = true;
console.log('3.1 ' + javascriptIsFun);
console.log('3.2 ' + typeof true);
console.log('3.3 ' + typeof 23);
console.log('3.4 ' + typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log('3.5 ' + typeof javascriptIsFun);

let year;
console.log('3.6 ' + year);
console.log('3.7 ' + typeof year);
year = 1991;
console.log(typeof year);

// 3 ways to declare variables: let, const, var
// let: can change the value type later, mutate the variable, value can be null
// const: recommended; value in a const variable cannot be changed/mutated, value cannot be empty
// var: never use

// Operators: mathematical operators, comparison operators, logical operators, assignment operators
// transform values or combine multiple values
console.log('4. Operators')
console.log('4. Operators_Math Operators')
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log('4.1 ' + ageJonas, ageSarah);
console.log('4.2 ' + ageJonas * 2, ageJonas / 10, 2 ** 3);
const myFirstName = 'Jonas';
const myLastName = 'Schmedtmann';
console.log('4.3 ' + myFirstName + ' ' + myLastName);

console.log('4. Operators_Assignment Operators')
let x = 10 + 5;
x += 10;   // x=x+10 
console.log('4.4 ' + x);
x ++;    // x=x+1
console.log('4.5 ' + x);
x --;    // x=x-1
console.log('4.6 ' + x);

console.log('4. Operators_Comparison Operators(return boolean type)')
console.log(ageJonas > ageSarah);  // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now -2018);

console.log('4. Operators_Precedence');
let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);

// 5. strings
console.log('5. Strings')
const job = 'teacher';
const birthYear = 1991;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);
// template literals: use backtick to tell JavaScript that we are writing a template string
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`String with \n multiple \n lines`);

console.log(`String with 
multiple 
lines`);

// Logic

// Functions

// Object

//Loop



