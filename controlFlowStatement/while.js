let count = 1;
while (count < 10){
    console.log(count);
    count +=2;
}


const { resolve } = require('path');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// here async and await key using, when main function is calling that time user input passing to askQuestion function and in main function using await key to await return 
// value from the other function and after subscribe the value, and using ayncy to call the function

function askQuestion(query){
    return new Promise((resolve) => r1.question(query, resolve));

}

async function main(){
    let authenticated;
    while(true){
        const answer = await askQuestion(' are u authenticated (yes/no):-');
        if (answer.trim().toLowerCase() === 'yes'){
            authenticated = true;
            break;
        } else if(answer.trim().toLowerCase() === 'no'){
            authenticated = false
            break;
        } else{
            console.log(' please answer with "yes" or "no". ')
        }
    }

    const nextUrl = authenticated ? 'authenticate' : 'no authenticate';
    console.log(nextUrl);
    r1.close();

}
main();

