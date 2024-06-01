// let age = null;

// console.log(age);
// // 
// let x
// console.log(x);
// // symbol

// let symbol = Symbol("Geeks");
// let symbol1 = Symbol("Geeks");

// console.log(symbol == symbol1);
// console.log(symbol);
// console.log(symbol1);

// Object creation ways
// 1. object literal
// 2. constructor function
// 3. object.create()
// 4. class Syntax(Es6)
// 5. singleton pattern
// 6. factory function

// 1
// var pampa ={
//     name : 'pampa',
//     colid : 12340,
//     greet : function(){
//         console.log('Hello!');
//     }
// };
//  console.log(pampa.greet());
    
 // 2. 

//  function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log('hello');
//     }
//  }
//  var john = new Person('John', 30)

//  console.log('pamp', john);
//  console.log('pampa10', new Person('reddy', 25));

//  console.log(Person());

// 3.
// var PersonCreate = {
//     greet : function(){
//         console.log('hellp123');
//     }
// }
// var  san = Object.create(PersonCreate);
// san.name = 'reddy';
// san.age = 28;
// console.log('pampapa',san);

// 4.

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }
//     greet(){
//         console.log('hi pampa');
//     }
// }
// var smu = new Person('john', 2);
// console.log('smu',  smu);

// 5.

// var singleton =  {
//     instance : null,
//     getInstnace: function()
//     {
//         if(!this.instance){
//             this.instance = {
//                 name : 'pampa',
//                 greet: function(){
//                     console.log('hello');
//                 }
//             };
//         }
//         return this.instance;
//     }
// }
// var instance1 = singleton.getInstnace();
// console.log(instance1);


// instance1.greet();
// var  instance2 = singleton.getInstnace();
// console.log(instance2);
// console.log(instance1 == instance2);

// 6. 

// const readline = require('readline');
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function PersonCreate(callback){
//     r1.question('enter the name', (name) => {
//         r1.question('enter the age', (age) =>{
//             var Person = {
//                 name: name,
//                 age: parseInt(age),
//                 greet: function(){
//                     console.log('hi hello');
//                 }
//             };
//             callback(Person);
//             r1.close()
//         });

//     });
//     // return Person;
// }
// PersonCreate((person =>{
//     console.log('person', person)
// }));
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log('Hello!');
        }
    };
}

const john = createPerson('John', 30);
console.log(john)

// factoey object creat, 
