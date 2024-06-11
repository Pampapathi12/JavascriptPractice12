

// let age = 18;
// let message;

// if(age >= 16){
//     message = "you can drive";
// }else{
//     message = "you cannot drive";
// }

// console.log(message);

// message = age >= 16 ? ' you can drive' : 'u cannot drive';
// console.log(message);

// // synatax is condition ? expressionTrue : expressionIfFalse;
// // let variable = expre     ssionTrue : expressionIfFalse;

// let authenticated = true;
// let nextUrl = authenticated ?' u will redirect to admin area'  : 'access denied';
// console.log(nextUrl);

// // simplyfying ternary operator example
// let locked = 1;
// let canChange = locked != 1 ? true : false;
// console.log(canChange);

// // using multiple javascript ternary

// let speed = 90;
// let message1 = speed >= 120 ? 'too fast' : speed >= 80 ? 'fast' : 'OK';
// console.log(message1);

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question(' are u authenticated? (yes/no):', (answer) =>{
    const authenticated = answer.trim().toLocaleLowerCase() === 'yes';

    const nextUrl = authenticated ? 'authenticated' : 'unauthenticate';
    console.log(`Next URL: ${nextUrl}`);
    r1.close();
});

