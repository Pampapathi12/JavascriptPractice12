function Product(a,b){
    return a*b;
}
console.log(Product(1,4));

// Returning Multiple Values Using an Object

function multiplevalues(){
   let first = 'Html', second = "css", third = 'javascript'
   return {
    first,
    second,
    third
   }
}

let {first, second,third} = multiplevalues()
console.log(first);
console.log(second);
console.log(third);
// No Return and Empty Return Statement
function fun1(){

}
function  fun2(){
    return;
}
console.log(fun1())
console.log(fun2())
