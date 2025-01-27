// find the duplicate elements in the array

var A = [1,2,3,4,2,5,6,4,5,1]
var duplicateA = A.filter((ele, index,arr) => arr.indexOf(ele) !== index)
console.log(duplicateA);

