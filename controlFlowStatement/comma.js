// leftexpressin and rightexpression

// in the comma operator always right side expression will execute

let pampa = (10, 10+20)
console.log(pampa)
// node .\test23.js   -> command

let x = 10;
let y = (x++, x+1)
console.log(x,y)

let a = 10;
a++
let b = (a+1)
console.log(a,b)

const matrix = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [8, 9, 4, 7],
    [7, 5, 9, 6]
];

// Outer loop iterating over rows
for (let i = 0; i < matrix.length; i++) {  
    //   console.log('length',matrix[i].length-1)
    // Inner loop iterating over columns within each row
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Element at (${i}, ${j}) = ${matrix[i][j]}`);
    }
}
