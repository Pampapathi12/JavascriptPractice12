// types of exception errors
/*
1. syntax errors:- forgetting semicolon , mismatched brackets, mismatched parentheses, misspelled keyword and calling undefined functions
2.runtime errors:- division by zero, accesing elemnents outiside of the bounds of ans array, calling the method on a null or undefined object
3. type errors:- attempting to add astring to a number without explicit conversion, trying to call a mthod that doesnot exist on as givent data types eg calling the push() on an integer
4. logic errors:- using incorrect operators like = instead of ==, incorrect loop conditin causing infinite loops, errors in calculatins formulas
5.arithmetic errors:- divisoin by zero, overflow and underflow in floating point arithmetic
6. index out of range error:- trying to access array[10] when the array has only the 5 elements
7. null reference errors:- calling a method on a null object, accessing properties of an undefined variable
8. file I/O errors:- trying to open the file from the disk that doesnot exist in disk, lacking permission to access file, disk full errors when trying to write data
9. network errors:- connectinos erros,
10. out of memory errors:- loading very large files into memory
11. stack overflow errors:- a function calling itself with no base case in recursion
12. reference error, type error, range error:- 

 */



// stack overflow example

/* shift+alt+a global comment */

/* function infiniterecursion(){
    console.log("callin function");
    infiniterecursion()
}
infiniterecursion() */

/* mutual indirect recursion */
/* function functionA(){
    functionB()
}
function functionB(){
    functionA()
}
functionA() */// maximmum call stack size exceeded

/* recursive calculation  */
/* function fibonacci(n){
    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
fibonacci(100); */

/* uncontrolled events recursion */
/* function recursivetimeout(){
    console.log("recursive call")
    setTimeout(recursivetimeout, 0)
}
recursivetimeout() */

/* 
try{
    // code that might me throw an error
}
try{
    let result = 10 /0;
}

try {
    // code that might throw an error
} catch(error){
    // code to handle the errors
} finally{
    // code that always excutes
} */

   /*  function pampathi(){
        try{
            let result = 10 / 0;
        }catch(error){
            console.log("error", error.message);
        } finally{
            console.log("this runs ")
        }
    }
    pampathi(); */

   /*  function divide(a,b){
        if(b === 0){
            throw new Error('division by zero in not allowed');
        }
        return a/b;
    }
    try{
        let result = divide(10, 0)
    } catch(error){
        console.error(error.message);
    } */

