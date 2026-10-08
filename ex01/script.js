function calculateGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) {
        return "Invalid Input"; 
    } 
    else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Score 95: " + calculateGrade(95)); 
console.log("Score 89: " + calculateGrade(89)); 
console.log("Score 0: " + calculateGrade(0));   
console.log("Score 150: " + calculateGrade(150)); 

function checkAccess(age, hasTicket) {
    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

console.log("Age 20 with ticket: " + checkAccess(20, true));   
console.log("Age 16 with ticket: " + checkAccess(16, true));   
console.log("Age 22 without ticket: " + checkAccess(22, false)); 