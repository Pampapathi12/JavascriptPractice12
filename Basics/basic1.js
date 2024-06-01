// let
// block scope
// global scope
// function scope

{
    let num = 10;

    console.log(num)
}
// console.log(num) // error num is not defined

// global scope

let num1 = 25;
console.log(num1);
function pampa(){
    console.log(num1)
}
pampa();

// function scope
 function fun(){
    let num2 = 20;
    console.log(num2)
 }
 fun()
//  console.log(num2) // only access inside function only


 // redclararing variables in the same blocks

 let x1 = 77;
 {
    let x1 = 23;// legal
    console.log(x1)
 }
//  let x1 = 67; // illegal
 console.log(x1);

 // hoisting -> the beaviour of moving the declaration on top of the script is known as oistin

//  x3 = 12;
//  console.log(x3); // error x3 is not defined
//  let x3;