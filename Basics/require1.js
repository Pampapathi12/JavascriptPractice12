const readline = require('readline');

class Calculator {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  start() {
    this.rl.question("Enter the first number: ", (num1) => {
      this.rl.question("Enter the second number: ", (num2) => {
        this.calculateSum(parseFloat(num1), parseFloat(num2));
      });
    });
  }

  calculateSum(num1, num2) {
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    this.rl.close();
  }
}

function runCalculator() {
  const calculator = new Calculator();
  calculator.start();
}

runCalculator();
