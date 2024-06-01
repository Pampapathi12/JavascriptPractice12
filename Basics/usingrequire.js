const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fiz(n){
    for(let i = 1; i<=n; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("fiz");
        } else if(i % 3 === 0){
            console.log("Fizz");
        } else if(i % 5 === 0){
            console.log("Buzz");
        } else{
            console.log(i);
        }
        
    }
}

r1.question('enter a number: ',(answer) =>{
    const n = parseInt(answer, 10);
    if(!isNaN(n)){
        fiz(n)
    } else{
        console.log("please enter a valid number.");
    }
    r1.close();
});