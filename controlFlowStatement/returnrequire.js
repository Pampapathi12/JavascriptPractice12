const readline = require('readline');
const r1 = readline.Interface({
    input : process.stdin,
    output : process.stdout
});

function getgreetingfunction(){
    return function(name){
        return `hi hello how are u ${name}`
    }
}
var pampa = getgreetingfunction();

r1.question(' please enter the name:-', (username) =>{
    console.log('username', pampa(username));
    r1.close();
});