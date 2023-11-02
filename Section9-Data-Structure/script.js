'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
  // Object
  const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(obj) {
    console.log(obj);
  },
  
  orderDelivery2({ starterIndex, mainIndex, time, address}) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  // orderDelivery2: function ({ starterIndex, mainIndex, time, address}) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },

  // orderPasta: function(ing1, ing2, ing3) {
  //   console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  // },

  // orderPizza: function (mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // },

};


// sets
// Data Structure: maps: map values to keys, data is stored in key value pairs in maps

// 1. Deconstructuring Arrays
console.log(`1. Deconstructuring Arrays`);
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switch the two variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested array destructuring: array inside array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [h, , [k, l]] = nested;
console.log(h, k, l);

// set default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


// 2. Destructuring Objects
console.log(`2. Deconstructuring Objects`);
// const { name, openingHours, categories } = restaurant;
const { name, categories } = restaurant;
console.log(name, openingHours, categories);

// set new variable names
const {
  name: restaurantName, 
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// a way to set default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables while destructuring
let aa = 111;
let bb = 999;
const obj = { aa: 23, bb: 7, cc: 14 };
({aa, bb} = obj);
console.log(aa, bb);

// Nested objects
const { fri: { open: o, close: cl }, } = openingHours;
console.log(o, cl);

restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery2({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
})


// 3. spread operator: to expand an array into all its elements; parse arguments into functions
console.log(`3. Spread operator`);
const startArr = [7, 8, 9];
const badNewArr = [1, 2, startArr[0], startArr[1], startArr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...startArr];   // [1, 2, 7, 8, 9] spread operator, taking all the elements out of the array
const newArr0 = [1, 2, startArr];     // [1, 2, [7, 8, 9]]
console.log(newArr);
console.log(newArr0);
console.log(...newArr);    // 1 2 7 8 9
console.log(1, 2, 7, 8, 9);
const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Merge 2 arrays together
const menuMerge = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuMerge);


// iterables: arrays, strings, maps, sets: unpack array, unpack string
// only used when parsing arguments into a function, when building a new array
const str = `Jonas`;
const letters = [...str, ` `, `S.`];
console.log(...str);
console.log(letters);

// functions that accepts multiple arguments
const ingredients = [
  prompt(`Lets's make pasta! Ingredient 1?`),
  prompt(`Lets's make pasta! Ingredient 2?`),
  prompt(`Lets's make pasta! Ingredient 3?`),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
// 1) Destructuring
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ristorante Roma`;
console.log(restaurantCopy.name);
console.log(restaurant.name);

// spread operator: unpack the array
// rest operator: pack elements into an array
// rest syntax collects all the array after the last variable

console.log(`spread operator`);
const [d, e, ...others] = [1, 2, 3, 4, 5];
console.log(d, e, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const m = [23, 5, 7];
add(...m);

restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);
restaurant.orderPizza(`mushrooms`);


// the for-of Loop
console.log(`3. for-of Loop`)
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu2) console.log(item);   // log the elements of the array menu2
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Part 2: Strings
console.log(`-----------------------------------------------------`)
console.log(`Strings`)
const airline = `TAP Air Portugal`;
const plane = `A320`;

// convert string to array
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(`B737`[0]);
console.log(airline.length);
console.log(`B737`.length);

// string method: indexOf(), slice() method, toLowerCase(), toUpperCase(), trim(), replace(), includes(), startsWith(), split(), join(), padStart(), padEnd(), repeat()
console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`portugal`));
console.log(airline.slice(4));    // Air Portugal
console.log(airline.slice(4, 7));  // Air
console.log(airline.slice(0, airline.indexOf(` `))); // TAP
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

const checkMiddleSeat = function(seat) {
  const s = seat.slice(-1);
  if (s === `B` || s === `E`) console.log(`You got the middle seat`);
  else console.log(`You got lucky`);
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

console.log(new String(`jonas`));
console.log(typeof new String(`jonas`));
console.log(typeof new String(`jonas`).slice(1));

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// toLowerCase(), toUpperCase(): Fix capitalization in name
const passenger = `jOnAS`;
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase + passengerLower.slice(1);
console.log(passengerCorrect);

//  trim(): Comparing emails
const email = `hello@jonas.io`;
const loginEmail = ` Hello@Jonas.Io \n`;
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing: replace()
const priceCNY = `288.97¥`;
const priceUS = priceCNY.replace(`¥`, `$`).replace(`.`, `,`);
console.log(priceUS);
const announcemet = `All passengers come to boarding door 23. Boarding door 23.`;
console.log(announcemet.replace(`door`, `gate`));
console.log(announcemet.replace(/door/g, `gate`));  // regular expression, replace all `door` to `gate`

// Booleans: includes(), startsWith()
const plane1 = `Airbus A320neo`;
console.log(plane1.includes(`A320`));
console.log(plane1.includes(`Boeing`));
console.log(plane1.startsWith(`Airb`));

if (plane1.startsWith(`Airbus`) && plane1.endsWith(`neo`)) {
  console.log(`Part of the NEW Airbus family`);
};

// Practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log(`Welcome aboard`);
  }
};

checkBaggage(`I have a laptop, some food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);

// string method: split()   string --> array
// string method: join()    array --> string
console.log(`a+very+nice+string`.split(`+`));
console.log(`Jonas Schmedtmann`.split(` `));
const [firstName, lastName] = `Jonas Schmedtmann`.split(` `);

const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
};

capitalizeName(`Jessica ann smith davis`);
capitalizeName(`jonas schmedtmann`);

// padding a string: to add a number of characters to the string to a certain length
// padStart(), padEnd()
const message = `Go to gate 23!`;
console.log(message.padStart(20, `+`).padEnd(30, `+`));
console.log(`Jonas`.padStart(20, `+`).padEnd(30, `+`));

const maskCreditCard = function (number) {
  const str = number + ``;                  // number-->string
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};

console.log(maskCreditCard(229398798));
console.log(maskCreditCard(8987987989899798));
console.log(maskCreditCard(`989789997879878989798798`));


// repeat() method: repeat the same string multiple times
const message2 = `Bad weather... All Departures Delayed... `;
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`o`.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);







