// Attempt at creating a js calculator

// TODO ----------------
// Add buttons and forms for user input
// Actually make it work


class Calculate {
    constructor (a,b,operator) {
        this.a = a;
        this.b = b; 
        this.operator = operator;
    }

    add() {
        answer = this.a + this.b;
        console.log(answer);
    }

}

function add() {
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    console.log(a+b);
}






// functions for operators
// let add = () => {alert(parseInt(document.getElementById("number1").value)) + parseInt(document.getElementById("number2").value)};
// let add = () => {alert(parseInt(document.getElementById("number1").value) + parseInt(document.getElementById("number2").value))};

let subtract = (c,d) => {return c - d};
let divide = (e,f) => {return e / f };
let multiply = (g,h) => {return g * h};


// operators, maybe put in a function that calls all the functions at a later point?
// function calculate() {
//     // something here about calling functions based off the button clicked
//     let operator = document.getElementById("input").value;
//     let myAnswer;

//     if (operator == "+") {
//         myAnswer = add(firstNum,secondNum);
//     } else if (operator == "-") {
//         myAnswer = subtract(firstNum,secondNum);
//     } else if (operator == "/") {
//         myAnswer = divide(firstNum,secondNum); 
//     } else if (operator=="*") {
//         myAnswer = multiply(firstNum,secondNum);
//     } else {
//         myAnswer = "You're an idiot";
//     }
//     console.log(myAnswer);
// }

// function output() {
//     return calculate();
//     // a bad attempt at some kind of equal function ?
// }
