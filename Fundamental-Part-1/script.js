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
console.log('5.1 ' + jonas);
// template literals: use backtick to tell JavaScript that we are writing a template string
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log('5.2 ' + jonasNew);

console.log('5.3 ' + `String with \n multiple \n lines`);

console.log('5.4 ' + `String with 
multiple 
lines`);

// Logic
// if(){}else{} control structure
console.log('6. Operators_Comparison Operators: ' + 'if(){}else{} control structure')
const age = 15;
if (age >= 18) {
  console.log('6.1 ' + 'Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log('6.1 ' + `Sarah is too young. Wait another ${yearsLeft} years`);
}

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log('6.2 ' + century);


// value types conversion: manually convert from one type to another; Only to 3 types Bumber, String, Boolean
// type coersion: JS convert behind the scenes for us
console.log('7. Value types conversion')
const inputYear = '1991';
console.log('7.1 ' + Number(inputYear), inputYear);
console.log('7.2 ' + Number(inputYear) + 18);

console.log('7.3 ' + Number('Jonas'));
console.log('7.4 ' + typeof NaN);

// type coercion: + number turn to string; - string turn to number
console.log('7.5 ' + `I am ` + 23 + ' years old');
console.log('7.6 ' + ('23' - '10' - 3));  // 10
console.log('7.7 ' + '23' / '2');         // 11.5

let n = '1' + 1;                          // 11 ;  + (turn to string)
n = n - 1;                                // 10;  - (turn to number)
console.log('7.8 ' + n);
console.log('7.9 ' + (2+3+4+'5'))                    // 95, 2+3+4=9
console.log('7.10 ' + ('10'-'4'-'3'-2+'5'))           // 15, 10-4-3-2=1

// falsy values: 5 types of falsy value: 0, '', undefined, null, NaN will become false when trying to convert to boolean
console.log('7.11 ' + Boolean(0));          //false
console.log('7.12 ' + Boolean(''));         //false
console.log('7.13 ' + Boolean(undefined));  //false
console.log('7.14 ' + Boolean());           //false
console.log('7.15 ' + Boolean({}));         // true

// conditionals_if-else
console.log("7. conditionals_if-else")
const money = 0;
if (money) {
  console.log('7.16 ' + "Don't spend it all!");
} else {
  console.log('7.16 ' + "You should get a job!");
}

let height
if (height) {
  console.log('7.17 ' + 'YAY! Height is defined');
} else {
  console.log('7.17 ' + 'Height is UNDEFINED');
}

// equality operators
console.log('8. Operators_Equality Operators ')
console.log('8.1 ' + (18 === 18)); 
// console.log('18' == 18);    // true, avoid: loose equality operator, double equal performs type coercion
console.log('8.2 ' + ('18' === 18));   // false, strict equality operator, comparison operator, does not perform type coercion

// use prompt function to get a value from any webpage, the value client put into the form
const favourite = Number(prompt("What's your favourite number?"));
console.log('8.3 ' + favourite);
console.log('8.4 ' + typeof(favourite));

if (favourite === 23) {
  console.log('8.5 ' + 'Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('8.5 ' + 'Cool! 7 is an amazing number!');
} else if (favourite === 9) {
  console.log('8.5 ' + 'Cool! 9 is an amazing number!');
} else {
  console.log('8.5 ' + 'Numbre is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('8.6 ' + 'Why not 23?');

// Logic: Boolean logic(true/false), basic logical operators: AND &&, OR ||, NOT !
console.log('9. Logic_Boolean Logic')
const hasDriversLicense = true;
const hasGoodVision = true;

console.log('9.1 ' + (hasDriversLicense && hasGoodVision));
console.log('9.2 ' + (hasDriversLicense || hasGoodVision));
console.log('9.3 ' + hasDriversLicense);
if (hasDriversLicense && hasGoodVision) {
  console.log('9.4 ' + "Sarah is able to drive");
} else {
  console.log('9.4 ' + "Someone else should drive...");
}

const isTired = true;
console.log('9.5 ' + (hasDriversLicense && hasGoodVision && isTired));
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('9.6 ' + 'Sarah is able to drive!');
} else {
  console.log('9.6 ' + 'Someone else should drive...');
}

// the switch statement: a complicated way of writing a complicated if/else statement when we want to compare one value to multiple different options
console.log('10. Conditionals_switch statement')

const day = 'monday';
 switch (day) {
  case 'monday':    // if day === 'monday'
    console.log('10.1 ' + "Plan course structure");;
    console.log('10.1 ' + "Go to coding meetup");
    break;
  case 'tuesday':
    console.log('10.1 ' + "Prepare theory videos");
    break;
  case 'wednesday':
  case 'thursday':
    console.log('10.1 ' + "Write code examples");
    break;
  case 'friday':
    console.log('10.1 ' + "Record videos");
    break;
  case 'saturday':
  case 'sunday':
    console.log('10.1 ' + "Enjoy the weekend");
    break;
  default:
    console.log('10.1 ' + "Not a valid day!");
 }

if (day === 'monday') {
  console.log('10.2 ' + "Plan course structure");
  console.log('10.2 ' + "Go to coding meetup");
} else if (day === 'tuesday') {
  console.log('10.2 ' + "Prepare theory videos");
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('10.2 ' + "Write code examples");
} else if (day === 'friday') {
  console.log('10.2 ' + "Record videos");
} else if (day === 'saturday' || day === 'sunday') {
  console.log('10.2 ' + "Enjoy the weekend");
} else {
  console.log('10.2 ' + "Not a valid day!");
}

// the difference between statements and expressions 
// expression: a piece of code the produce a value;                         word: 3+4, 1991, true && false && false
// statement: a bigger piece of code, does not produce a value on itself;   sentence/action: if-else, switch statement

console.log("11. Conditional/Ternary operator");

const myage = 23;
myage >= 18 ? console.log('11.1 ' + "I like to drink wine") : console.log('11.1 ' + "I like to drink water");

const drink = myage >= 18 ? 'wine' : 'water';
console.log('11.2 ' + drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}

console.log('11.3 ' + drink2);
console.log('11.4 ' + `I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// JS releases






