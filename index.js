// 1. CHHECKING THE GRADE MARKS
let score = 0
let alert = "";
if (score > 79 && score <= 100){
    alert ="A"
    console.log("A")
}else if(score >= 60 && score <= 79){
    alert ="B-"
    console.log("B-")
}else if (score >= 49 && score <= 59){
    alert = "C-"
    console.log("c-")
}else if (score >= 40 && score < 49){
    alert = "D-"
    console.log("D-")
}else {
    alert = "E-"
    console.log("E")
}

// 2. checking the speed
function checkSpeed(vSpeed){
    const speedLimit = 70;
    const speedRate =5
    if (vSpeed <= speedLimit){
        return "okay"
    }
    const overSpeed = vSpeed - speedLimit;
    let demeritPoints = 0;
    for (let speed = 0; speed< overSpeed; speed +=speedRate){
        demeritPoints += 1
        if(demeritPoints > 12){
            return "License Suspended";
        }
    }
   return `points : ${demeritPoints}`;
}
console.log(checkSpeed(77));


//3. Calculating the net salary of an employee


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
// function to calculate tax rate based on gross salary
const taxRate = (gross) => {
    if (gross <= 24000) {
        return 10/100
    }
    else if (gross > 24000 && gross <= 32333) {
        return 25/100
    }
    else {
        return 30/100
    }
}
// function to calculate NHIF deduction
const nhifDeduction = (gross) => {
    if (gross <= 5999) {
        return 150
    }
    else if (gross <= 7999) {
        return 300
    }
    else if (gross <= 11999) {
        return 400
    }
    else if (gross <= 14999) {
        return 500
    }
    else if (gross <= 19999) {
        return 600
    }
    else if (gross <= 24999) {
        return 750
    }
    else if (gross <= 29999) {
        return 850
    }
    else if (gross <= 34999) {
        return 900
    }
    else if (gross <= 39999) {
        return 950
    }
    else if (gross <= 44999) {
        return 1000
    }
    else if (gross <= 49999) {
        return 1100
    }
    else if (gross <= 59999) {
        return 1200
    }
    else if (gross <= 69999) {
        return 1300
    }
    else if (gross <= 79999) {
        return 1400
    }
    else if (gross <= 89999) {
        return 1500
    }
    else if (gross <= 99999) {
        return 1600
    }
    else {
        return 1700
    }
}
// function to calculate NSSF deduction ( we will use the old rates)
const nssfDeduction = 400
// function to calculate net salary
const salary = (gross) => {
    console.log(gross - (gross*taxRate(gross)) - nssfDeduction - nhifDeduction(gross))
}
// get user input
readline.question('Please enter your gross salary: ', gross => {
    salary(gross)
    readline.close()
})