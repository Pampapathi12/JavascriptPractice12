// if condition

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const add = function(a,b){
    return a+b;
};
// arrow function
const add1 = (a,b) =>{
    return a+b;
}

// simplified arrow function
const add3 = (a,b) => a+b;

console.log(add(2,3));
console.log(add1(2,3));
console.log(add3(2,3));

const checkage = (age) => {
    const ageNumber = parseInt(age, 10)
    if(isNaN(ageNumber)){
        console.log("please enter the a valid number for age")
    } else if(ageNumber< 0){
        console.log("age connot be negative")
    } else if(ageNumber < 18){
        console.log("ure minor")
    } else if(ageNumber >= 18 && ageNumber <65){
        console.log(" ure adult");
    } else{
        console.log('ure a sinor')
    }
};

r1.question('please enter ure age', (input)=>{
    checkage(input);
    // close the readline interface
    r1.close();
})

// 1. primitive data types
// number, string, boolean, null, undefined, symbol, bigint
// reference type object
// built in data structures:- array, set, map, weakset, weakmap,typed arrays
// custom data structure:- stack , queue, linked list, tree, graph
// logical conditions: equality(==),  strict eqaulity(===), inequality(!=), greater than (>), 
// Greater Than or Equal To (>=), Less Than (<), Less Than or Equal To (<=), Logical AND (&&), Logical OR (||), Logical NOT (!), Ternary Operator (?:)

let a = 5;
if(a == 5){
    console.log(' true')
}

if(a === 5){
    console.log('treue');
}

if(a != 10){
    console.log("a is not equal to 10")
}
if( a !== 5){
    console.log(' a is not equal to 5')
}

if(a > 2){
    console.log(' a is grater than 5')
}
if(a >= 5){
    console.log(' a is greatet then or equal to 5');
}
if(a < 5){
    console.log(' a is less than 5')
};
if(a <= 5){
    console.log(' a is less than 5 or equal to 5');
}
if(a<2 || a>10){
    console.log(' a is either less than 2 or greater than the 10')
}
if(!(a === 10)){
    console.log(' a is not equal to 10')
}
let result = (a > 10) ? "a is greater than 10" : "a is less than or equal to 10"
console.log(result);