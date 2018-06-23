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
        let answer = this.a + this.b;
        console.log(answer);
    }

    subtract() {
        let answer = this.a - this.b;
        console.log(answer);
    }

    divide() {
        let answer = this.a / this.b;
        console.log(answer);
    }

    multiply() {
        let answer = this.a * this.b;
        console.log(answer);
    }
}

function add() {
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    let myCalculation = new Calculate(a,b);
    let thing = myCalculation.add();
    console.log(thing);
}


function subtract() {
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    let myCalculation = new Calculate(a,b);
    let thing = myCalculation.subtract();
    console.log(thing);
}

function divide() {
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    let myCalculation = new Calculate(a,b);
    let thing = myCalculation.divide();
    console.log(thing);
    return;
}

function multiply() {
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    let myCalculation = new Calculate(a,b);
    let thing = myCalculation.multiply();
    console.log(thing);
}

