// BMI calculator with health classification

// in this program first calling the calculatebmi and sending the return value to the another
// function classifybmi then get the status


const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculateBMI = (weight, height) => {
    var value = weight / (height * height);
    console.log('weight', value)
    return value;
    
}
const classifyBMI = (bmi) => {
    if(bmi < 18.5){
        return 'underweight';
    }else if(bmi < 24.9){
        return 'normal weight';
    }else if(bmi < 29.9){
        return 'over weight';
    }else{
        return 'obesity'
    }
}

r1.question(' please enter your weight in kg :', (weightinkg)=>{
    const weight = parseFloat(weightinkg);
    r1.question(' please enter your height in meters', (height) =>{
        if(isNaN(weightinkg) || isNaN(height) || weight <= 0 || height <= 0){
            console.log(" please enter valid postive numbers for weight and height.");
        }else{
            const bmi = calculateBMI(weightinkg, height);
            console.log(`your bmi is: ${bmi.toFixed(2)}`);
            console.log(`health classification: ${classifyBMI(bmi)}`);
        }
        r1.close();
    });
});

// complex numbers
