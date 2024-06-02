// In a switch, code breaks out and the execution of code is stopped. 
// In a loop, it breaks out to the loop but the code after the loop is executed.


var pampa = 'mango';

switch(pampa){
    case 'apple': 
    console.log('apple is healthy fruit');
    break;
    case 'mango':
        console.log('mango is king of fruits');
        break;
    case 'jamunu':
            console.log('very healthy for the bidy');
            break;
    default: console.log(' i dont like the fruits');
}

// in loop
for (let i = 1; i< 6; i++){
    if(i == 4)
        break;
    console.log(i);
}
console.log('loop1')

// in whiel loop

let i = 0;
while(i<10){
    if(i === 5){
        break;
    }
    console.log(i);
    i++;
}
console.log("loop end");

// break in do while loop

let j = 0
do{
    if(j === 11){
        break;
    }
    console.log(j);
    j++;
}while(j<10);
console.log('loop2 end');
// using in nested loop

for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        if(i===1 && j===1){
            break;
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// outer loop and innerloop
// here inner loop will exit the until its condition is false, once a condition is false then
// outer loop will increment will happen
// printing the multiplication table
for (let i = 1; i <= 10; i++) { // Outer loop
    for (let j = 1; j <= 10; j++) { // Inner loop
        let product = i * j;
        console.log(`${i} * ${j} = ${product}`);
    }
    console.log('---'); // Separator for each iteration of the outer loop
}
