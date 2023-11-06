'use strict';
// two major paradigms in modern JavaScript: Object-oriented programming, functional programming
// a programming paradigm based on the concept of objects (paradigm means the styles of the code)
// use objects to model the real-world or abstract features
// objects may contain data/properties and code/methods. pack data and the corresponding behavior into one block
// Objects are building blocks of application, and interact with one another through a public interface (API)
// API is the method that code outsice of the object can access and use to communicate with the object

// 1. create new object using constructor functions
const Person = function(firstName, birthYear) {
  console.log(this);              // refer to the new empty object_Person{}
  this.firstName = firstName;
  this.birthYear = birthYear;
  // never create methods in constructor function, use prototypes or prototypal inheritance
};
const jonas = new Person(`Jonas`, 1991);    
console.log(jonas);
console.log(jonas instanceof Person);   // true
// the difference between regular function and constructor function is that we use new to call the function
// a New empty object is created: Person{}
// function is called, this keyword = newly created object: Person({}.firstname = firstname
// the new empty object is linked to prototype
// function automatically return the empty object from the beginning

// Prototypes: constructor function has the property of prototypes, the prototype property of the constructor function
Person.prototype.calcAge = function () {      // method
  console.log(2037 - this.birthYear);
};
Person.prototype.species = `Homo Sapiens`;    // property
jonas.calcAge();
console.log(jonas);                         // the jonas itself: any object has access to the methods and properties from its prototype(class)
console.dir(Person.prototype.constructor);  // the Person itself

console.log(jonas.__proto__.__proto__);           // 1. prototype of object: the top of the prototype chain
console.log(Person.prototype);    // 2. Person Prototype: calcAge is the prototype property of the Constructor function Person
console.log(jonas.__proto__);     // 3. prototype of Jonas: calcAge is the prototype of Jonas

// the prototype of array
const arr = [3, 6, 8, 9, 2, 1, 9,1,1,1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// extend the prototype method: add a method to return all the unique elements of an array//
// we add a new method to the prototype of array constructor, all array will inherit the method
Array.prototype.unique = function () {
  return [...new Set(this)];         // this is gonna be the array, this method will be called on the array
}
console.log(arr.unique());     

const h1 = document.querySelector(`h1`);
console.dir(h1);

// ES6 classes

// Object.create