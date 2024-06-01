// 1. function scope
// 2. global scope
// 3. block scope
// 4. declare global variable
// 5. declarae multiple variable in single statement
// 6. hoisting variable
// 7. redclare variable in same global scope
// 8. redclare variable in another scope like function
// 9. delete gobal variable declaring using var , using use strict mode


// There’re 3 kinds of scopes in JavaScript:
// global scope(ariables declared outside of all functions are known as global variables and in the global scope. Global variables are accessible anywhere in the program.), 
// function scope (Variables that are declared inside a function are called local variables and in the function scope. Local variables are accessible anywhere inside the function.), 
// block scope (Variable that is declared inside a specific block & can’t be accessed outside of that block. In order to access the variables of that specific block, we need to create an object for it)
//1.

function add(a, b){
    return a + b;
}
// console.log(add(2,3));
// functions are first class citizen 
//1. store functions in a variable
//2. pass a function as an argument to another functions
//3. return a function from another function

// 1.
function greet(){
    console.log('hello');
}
const myFunction = greet;
myFunction();

// 2.
function callFunction(func){
    console.log('hi helloe ');
    func();
}
function sayHi(){
    console.log('hi how are u');
}
callFunction(sayHi); // calling another function passing as argument and main function again calling the passed argument

// example storing function return value storing to varibale

// call back function example
function showLength(name, callback){
    callback(name)
}
const nameLength = function(name){
    console.log(`Given Name ${name} which  
    is ${name.length} chars long`); 
}
showLength('geeks', nameLength);

// function scope
var name = "pampapathi";

function introduce(greet){
    console.log('function scope example')
    var note = "everyone";
    function wish(){
        console.log(`${greet} ${note}, this is ${name} learning`)
    }
    wish()
}
introduce('hello');

// global scope
var globalscope = 25;

function printGlobalScope(){
    console.log("globalscope")
    console.log(globalscope)
}
printGlobalScope();


// block scope



function blockScope(value){
    if(value == 0){
         value = 25;
         let value1 = 24;
    console.log("blockscope");
    console.log(value, value1 );
    }
    console.log(value)
    // console.log(value1) // here value1 will not print this is block scope

}
blockScope(0);

// declare global scope
var globalvariable = 'pampa'
class MyClass {
    constructor(){
        this.globalvariable = globalvariable;

    }
}
function testFunction(){
    var myClassInstance = new MyClass();
    console.log('pampa',myClassInstance.globalvariable);
}

testFunction();

// declare multiple variables in single statement
var pampathi = 1, pampapathi1 = 2, pampapathi2 = 3;
 class MyClass1{
    constructor(){
        this.pampathi = pampathi;
        this.pampapathi1 = pampapathi1;
        this.pampapathi2 = pampapathi2;
    }
 }
var myClassInstance1 = new MyClass1();
console.log(myClassInstance1.pampathi, myClassInstance1.pampapathi1, myClassInstance1.pampapathi2);

// hoisting variable
function hoistingExample(){
    console.log(myvaribale); // output undefined
    var  myvaribale = 32;
    console.log(myvaribale); // output 32
}
hoistingExample();
// redclare variable in the same global scope
var reG = 5;
console.log('pampa123',reG)

class MyClass12 {
    constructor(){
        var reG = 4
    this.reG = reG;
    console.log(reG);
    }

}

var test1 = new MyClass12();
console.log(test1.reG);

// redeclare varibale in another scope like a function

var y1 = 15;

function testFunction1(){
    var y1 = 25;
    console.log(y1)
}
testFunction1();
console.log(y1)

// delete global variable declared using var using strict
var globalscope1234 = "pampapathi"
console.log('pampapathilog', globalscope1234);
class MyClass123{
    constructor(){
        this.globalscope123 = globalscope1234;
    }
}
 var myClassInstance123 = new MyClass123();
 console.log(myClassInstance123.globalscope123);
 delete  myClassInstance123.globalscope123;

 console.log(myClassInstance123.globalscope123); // undefined

"use strict";

class MyClassStrict {
    constructor(){
        this.globalStrict = "pampapathi"
    }
}

var myClassInstanceStrict = new MyClassStrict();
console.log(myClassInstanceStrict.globalStrict);

delete myClassInstanceStrict.globalStrict;
console.log('delete',myClassInstanceStrict.globalStrict);
