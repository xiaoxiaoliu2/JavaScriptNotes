'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// methods are functions attached to objects
// arrays are objects

// simple array methods, new method, looping Arrays: forEach, forEach with Maps and Sets
// data transformations: map, filter, reduce, map, filter, reduce, chaining

// slice(): create a new array, the original array does not change
let arr = [`a`, `b`, `c`, `d`, `e`];
console.log(arr.slice(2));        // [`c`, `d`, `e`]  the element deleted
console.log(arr.slice(2, 4));     // [`c`, `d`]
console.log(arr.slice(-2));       // [`d`, `e`]
console.log(arr.slice(-1));       // [`e`]
console.log(arr.slice(1, -2));    // [`b`, `c`]
console.log(arr.slice());         // [`a`, `b`, `c`, `d`, `e`]
console.log([...arr]);            // [`a`, `b`, `c`, `d`, `e`]

// splice(): the original array change
console.log(arr.splice(-1));      // [`e`]  the element deleted
console.log(arr);                 // [`a`, `b`, `c`, `d`]
console.log(arr.splice(1, 2));    // [`b`, `c`]
console.log(arr);                 // [`a`, `d`]
console.log(arr.splice(-1));      // [`d`]
console.log(arr);                 // [`a`]

// reverse(): can mutate the original array
arr = [`a`, `b`, `c`, `d`, `e`];
const arr2 = [`j`, `i`, `h`, `g`, `f`];
console.log(arr2.reverse());
console.log(arr2);

// concat()
const letters = arr.concat(arr2);   // arr concatenates arr2
console.log([...arr, ...arr2]);     // use spread operator to concatenate the two arrays
console.log(letters);

// join()
console.log(letters.join(` - `));

// new array method in ES2022: at() method
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

console.log(arr3[arr3.length - 1]);  // arr3[2] = 64
console.log(arr3.slice(-1)[0]);      // [64][0] = 64
console.log(arr3.at(-1));            // 64

console.log(`jonas`.at(0));          // j

// loop array using forEach, break and continue methods do not work in forEach loop
// forEach can also be used on maps and sets
console.log(`-----for...of...-------`)
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

for (const [i, movement] of movements.entries()) {   // current index, current array element
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`-----forEach-------`)
movements.forEach(function(movement) { 
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

movements.forEach(function (mov, i, arr) {      // current array element, current index, entire array
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// forEach used on maps and sets

// THREE BIG AND IMPORTANT array methods to perform data transformations
// Map: maps the values of the orginal array to a new array with application of operation on orginal array elements
// Filter: returns a new array containing the array elements based on certain condition
// Reduce: boils all array elements down to one single value (adding all elements together)

// map
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function(mov){
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => 
`Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

// filter
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// reduce
const balance = movements.reduce(function (acc, cur, i, arr) {
  // console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

const balance1 = movements.reduce((acc, cur) => acc + cur, 0);   // acc starts at 0
console.log(balance1);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// chaining methods: combine the methods together: filter, map, reduce
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);