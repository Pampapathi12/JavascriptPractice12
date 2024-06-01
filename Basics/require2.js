const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter the first number: ", function(num1) {

  rl.question("Enter the second number: ", function(num2) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);


    const sum = num1 + num2;

    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

    rl.close();
  });
});
