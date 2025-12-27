function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b === 0) {
        b = prompt(`You can't divide ${a} cookies by your zero friends. Enter a different 
            number.`);
        if (b == 0) {
            alert("Please clear the calculator and restart.");
            return;
        };
    };
    return a / b;
}

let num1;
let operator;
let num2;

function operate(num1,operator,num2) {
    //display.textContent = "";
    if (operator == "+") {
        return add(num1,num2);
    }else if (operator == "-") {
        return subtract(num1,num2);
    }else if (operator == "*") {
        return multiply(num1,num2);
    }else if (operator == "/") {
        return divide(num1,num2);
    };
}

//creates an event handler to listen for when each button is clicked
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click",() => {
        handleButton(button);
    });
});
/*digit.addEventListener("click",() => {
    const value = clickButton(btn);
    //num1,num2,operator assignments
    let result;
    displayResult(num1,num2,operator);
});*/

//says how to handle each button class
function handleButton(btn) {
    if (btn.classList.contains("digit")) {
        handleDigit(btn.dataset.value); //.dataset retrieves data-* property, .value its value
    }else if (btn.classList.contains("oprtr")) {
        handleOprtr(btn.dataset.value);
    }else if (btn.classList.contains("equals")) {
        handleEquals();
    }else if (btn.classList.contains("clear")) {
        clearCalculator();
    };
};

function handleDigit(value) {
    display.textContent += value;
};

function handleOprtr(oprtr) {
    //oprtr first
    if (currentInput === "" && num1 === null) {
        alert("Enter a number first. Click \"clear\" to restart.");
        return;
    };
    //consecutive oprtr
    if (currentInput === "" && num1 !== null) {
        operator = oprtr;
    };
    //num1 exists and second number has been clicked
    if (num1 !== null && operator !== null && currentInput !== "") {
        num2 = Number(currentInput);
        num1 = computeAndDisplay(num1,operator,num2);
        currentInput = "";
    }else{
        num1 = Number(currentInput);
        currentInput = "";
    };
    operator = oprtr;
}

function handleEquals() {
    if (num1 == null || operator == null || currentInput == "") {
        num2 = Number(currentInput);

        const result = computeAndDisplay(num1, operator, num2);

        num1 = result;
        operator = null;
        currentInput = "";
    };
}

function computeAndDisplay(num1,operator,num2) {
    const display = document.getElementById("display");

    let result = operate(operator,num1,num2);
    if (result.toString().length > 12) {
        result = Number(result).toPrecision(12);
    }

    display.textContent = result;
    return Number(result);
}

function clearCalculator() {
    display.textContent = "";
}

function displayResult(num1,num2,operator) {
        if (btn.getElementId() == "="
            || btn.getElementId() == "+"
            || btn.getElementId() == "-"
            || btn.getElementId() == "×"
            || btn.getElementId() == "÷") {
                operator = btn.clickOperator();
        };
};