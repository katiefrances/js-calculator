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

    subtract() {
        answer = this.a - this.b;
        console.log(answer);
    }

    divide() {
        answer = this.a / this.b;
        console.log(answer);
    }

    multiply() {
        answer = this.a * this.b;
        console.log(answer);
    }

}

function add() {
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    console.log(a + b);
}

function subtract() {
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    console.log(a - b);
}

function divide() {
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    console.log(a / b);
}

function multiply() {
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    console.log(a * b);
}

