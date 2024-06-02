const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const checkBranch = (marks) =>{
    let branch;
    switch(true){
        case marks >= 90:
            branch = " computer science engineer";
            break;
        case marks >= 80:
            branch = " mechanincal enginner";
            break;
        case marks >= 70:
            branch = " chemical engineer";
            break;
        case marks >= 60:
            branch = " civil engineer";
            break;
        default:
            branch = "bio technology";
            break;
    }
    console.log(` student branch name is: ${branch}`)
}

r1.question('please enter ure marks:-', (input)=>{
    const marks = parseInt(input, 10);// Interprets the string as a decimal number
    if(isNaN(marks)|| marks<0 || marks > 100){
        console.log('please enter the valid number between 0 and 100')
    } else{
        checkBranch(marks)
    }
    r1.close();
})


// in switch 2 ways condition , check in switch conndition if value then that value check in case then case will execute
// in switch case compare the value case value to given value and then give the result

const checkDay = (day) => {
    let dayname;
    switch(day){
        case 1 :
            dayname = "sunday";
            break;
        case 2 : 
             dayname = " monday";
             break;
        case 3 :
             dayname = " tuesday";
             break;
        case 4 :
             dayname = "wednesday";
             break;
        case 5 :
              dayname = "thursday";
              break;
        case 6 :
              dayname = "friday";
              break;
        case 7 : 
              dayname ="saturday";
              break;
        default :
            dayname = "invalid day";
            break;

    }
    console.log('dayname', dayname)
    return dayname;
    
}
r1.question(" please enter the day:-", (input) =>{
    const day = parseInt(input);
    if(isNaN(day) || day < 0 || day > 7 || day == 0){
        console.log(' day not equal to negative day and not equal to 0 and not greater than 7')
    } else{
        console.log(`Day name: ${checkDay(day)}`);
    }
    r1.close();
})