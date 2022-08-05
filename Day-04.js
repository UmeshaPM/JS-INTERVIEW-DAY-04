console.log("working");

//Q-1 :-

//What is a Temporal Dead Zone?

//A Temporal Dead Zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
//Temporal means something temporary, not permanent, and Dead means something which is not working or can say it is in a lifeless state, Zone denotes an area but here we are in programming so this term area will be something related to memory, or also zone can be thought of as the time period or phase. 
//So merging these terms narrates that some entity is temporarily in a lifeless or inactive state and cannot be used for any kind of work.

//Example :

function tdz() {
    console.log(a); //100
    // console.log(b); //ReferenceError
    var a = 100;
    let b = 20;
}
tdz();

//..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

//Q-2 :-

//What is the for-in loop in JavaScript? Give its syntax

//The for loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times.
// for in loop is used to iterate object's key and values. we can use iterate array as well.

//Sytax :-

// for(let i in obj){
    //Code Here
// }

//Example :-

// let obj1 = {
//     Brand: "Redmi",
//     Amount: 15000,
//     RAM: 3
//   };
  
//   for (let i in obj1) {
//     console.log(i);
//   }

//..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

//Q-3 :-

//Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

//Local Scope - Accessible inside that function only
//Block Scope - Inside block of code, it will access the variables inside that block only.
//Functional Scope - Variables are valid only inside that function.
//Scope Chain - Variables are accessible inside and outside their scope.

//..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

//Q-4 :-

//What is difference between null and undefined and where to use what?

//In JavaScript, undefined is a type, whereas null an object.
//Undefined - undefined means a variable has been declared but has not yet been assigned a value
//Null - null is an assignment value. It can be assigned to a variable as a representation of no value

//..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

//Q-5 :-

//what is Symbol?

//Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.
//Symbols are "immutable" and "Unique".
//It was introduced in ES6.

//Example :-

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false

//..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

//Q-6 :-

//Write code to explain map and filter in arrays

let arr = [10, 20, 30, 40, 50, 60, 70];

//map :-

let arr1 = arr.map((x) => x + 10);
console.log(arr1); // [20, 30, 40, 50, 60, 70, 80]

//filter :-

let arr2 = arr.map((x) => x > 10);
console.log(arr2); // [false, true, true, true, true, true, true]

//..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

//Q-7 :-

//Explain passed by value and passed by reference

// Passed By Value :-

// It only works with Primitive data type.
//If we made any changes in copied variable, this will not affect the original.

// Example:

let a = 10;
let b = a + 3;
console.log(a); // 10
console.log(b); // 13

// Passed By Reference :-

// It only works with non-Primitive data type.
//If we made any changes in copied object or array, this will affect the original.

// Example:

let obj = {
    name: 'Praveen',
    age: 24
}
let obj1 = obj;

obj1.name = 'Robert';

console.log(obj1); // {name: 'Robert', age: 24}
console.log(obj); // {name: 'Robert', age: 24}

//..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

//Q-8 :-

//Please explain Self Invoking Function and its code

// In JavaScript, a 'Self-Invoking' function is a type of function that is invoked or called automatically after its definition. 
//The execution of such an anonymous function is done by enclosing it in a parenthesis () set followed by another set of parenthesis ().

//Example :-

(function () {
    console.log("Hi i am here!!!");
  })();
