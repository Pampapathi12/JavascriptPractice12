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