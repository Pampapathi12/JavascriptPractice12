function Product(a,b){
    return a*b;
}
console.log(Product(6,10));

function language(){
    let first = 'html',
    second = 'CSS',
    third = "javascript"

    return {
        first,
        second,
        third
    }
}

let {first,second,third} = language();
console.log(first);
console.log(second);
console.log(third);

//1. returning a primitive value
function number(){
    return 41;
}
console.log(number());

//2. returning an object

function getUser(){
    return{
        name : 'pampapathi',
        age: 30
    };
}
console.log(getUser());

// 3. returning an array

function getColors(){
    return ['red', 'green', 'blue']
}
console.log(getColors());

// 4. returning a function

function getgreetingfunction(){
    return function(){
        return 'hello how are u';
    };
}
const greet = getgreetingfunction();
console.log(greet());

// 5 returning conditional values

function isAdult(age){
    if(age > 16){
        return " yes, you are adult"
    } else{
        return 'No, you are not adult'
    }

}

console.log(isAdult(20));
console.log(isAdult(16));

// 6. returning early from a function

function findUser(username){
    if(!username){
        return 'username is required'
    }
    if(username === 'Alice'){
        return {name : 'Alice', age: 30}
    }
    return 'User not found';
}
console.log(findUser('Alice'));
console.log(findUser('blob'));
console.log(findUser());

// 7. returning with no value

function logmessage(message){
    console.log(message)
    return; // it will show undefined

}
console.log(logmessage('hello how are u'));

// 8. returning from an arrow function

var add = (a,b) => a + b;
console.log(add(5,7));

// 9. returning promises

function fetchData(){
    return new Promise((resolve, rejecet) =>{
        setTimeout(() =>{
            resolve(' data received');
        }, 1000);
    });
}
fetchData().then(data => console.log(data))
