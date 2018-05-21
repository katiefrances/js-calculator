// Attempt at creating a js calculator

// functions for operators
let add = (a,b) => {return a +  b};
let subtract = (c,d) => {return c - d};
let divide = (e,f) => {return e / f };
let multiply = (g,h) => {return g * h};

// variables for numbers + operator storage
let firstNum = 50;
let secondNum = 2;

// operators, maybe put in a function that calls all the functions at a later point?
function calculate() {
    let operator = document.getElementById("input").value;
    let myAnswer;

    // console.log(operator);

    if (operator == "+") {
        myAnswer = add(firstNum,secondNum);
    } else if (operator == "-") {
        myAnswer = subtract(firstNum,secondNum);
    } else if (operator == "/") {
        myAnswer = divide(firstNum,secondNum); 
    } else if (operator=="*") {
        myAnswer = multiply(firstNum,secondNum);
    } else {
        myAnswer = "You're an idiot";
    }

    console.log(myAnswer);
}
