import { transform } from "lodash";
import { compose, pipe } from "lodash/fp"

//Function programming
//closures
//currying
//pure functions
//immutability

let input = "  JavaScript  ";

const trim = str => str.trim();
wrap = (type, str) => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

console.log(wrap(toLowerCase(trim(input))));
//issues, too many brackets, left to right reading order
//one can use lodash (compose and pipe) to resolve the same

transform = compose(wrap, toLowerCase, trim); // still order incorrect
transform(input);

transform = pipe(trim, toLowerCase, wrap("div"));//now left to right order
transform(input);


//currying, allows to convert multiple arugment to one argument
function add(a, b) {
  return a + b;
}

//using currying
function add(a) {
  return function (b) {
    return a + b;
  }
}

add(1)(5); // same as add(1,5);

//now using ES6
const add2 = a => b => a + b; //(a,b) => a+b

wrap = type => str => `<${type}>${str}</${type}>`;

//pure functions

// not a pure function
function minAge(age) {
  if (age > minAge) {
    return True;
  }
}

// pure function. always same output for same input
// benefits --> self documenting, testing, concurrency, cacheable
function minAge(age, minAge) {
  if (age > minAge) {
    return True;
  }
}

//immutability --> can be used in multi threaded applciations
//faster change detection
//predictability
// but javascript doesn't support immutable objects by default

const person = { name: 'john', age: 40 };
const updatedObject = Object.assign({}, person); // copy person object to new object
const updatedObject2 = Object.assign({}, person, { name: 'tanmay' }); // copy and change property
const updatedObject3 = { ...person, name: 'bob' }; // using spread operator, preferred approach
// above only do shallow copies, so be careful 

//deep copy? 

//working with arrays
const numbers = [1, 2, 3];
//adding
const added = [...numbers, 4, 5];
//addign in btwn
const index = numbers.indexOf(2)
const added2 = [...numbers.slice(0, index), 4, ...numbers.slice(index)]

//removing
const removed = numbers.filter(x => x >= 2);

//updating
const updated = numbers.map(x => x === 2 ? 20 : x);

//since Javascript doens't support immutability by default various libraries are available
// immutable, immer, mobi

//Immutable.js, provides it's own datastructures
let book = { title: 'Harry Potter' };

function publish(book) {
  book.isPublished = true; // this will change original book object
}
publish(book)

import { Map } from 'immutable';
let book = Map({ title: 'Harry Potter' });

function publish2(book) {
  book.set("isPublished", true); //returns a new object
}
book = publish(book);
console.log(book.get('title'));
console.log(book.toJS());

//Immer, preffered
import {produce} from 'immer';

let book = {title: 'Harry Potter'};

function publish(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  }) //takes books, and produces a new draftBook 
}

let newBook = publish(book);
console.log(newBook);
console.log(book);







