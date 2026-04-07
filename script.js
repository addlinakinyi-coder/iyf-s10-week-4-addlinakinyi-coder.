// --- WEEK 4: JAVASCRIPT FUNDAMENTALS ---

// 1. Setup & Welcome
let studentName = "addlin akinyi";
let currentWeek = 4;
console.log("Welcome to Week " + currentWeek + ", " + studentName + "!");

// 2. Interactive Calculator Functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) return "Error: Cannot divide by zero!";
    return a / b; 
}

// Testing the Calculator
console.log("Addition Test (10 + 5): " + add(10, 5));
console.log("Division Test (20 / 4): " + divide(20, 4));

// 3. Student Grade Tracker (Arrays & Objects)
let students = [
    { name: "Lin", grade: 85 },
    { name: "Alex", grade: 92 },
    { name: "Sam", grade: 78 }
];

function calculateAverage(studentList) {
    let sum = 0;
    for (let i = 0; i < studentList.length; i++) {
        sum += studentList[i].grade;
    }
    return sum / studentList.length;
}

console.log("Average Student Grade: " + calculateAverage(students));
 
