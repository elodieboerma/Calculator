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
    while (b === 0) {
        b = prompt(`You can't divide ${a} cookies by your zero friends. Enter a different 
            number.`);
    };
    return a / b;
}

let num1;
let operator;
let num2;

function operate(operator,num1,num2) {
    if (operator === "+") {
        return add(num1,num2);
    }else if (operator === "-") {
        return subtract(num1,num2);
    }else if (operator === "×") {
        return multiply(num1,num2);
    }else{
        return divide(num1,num2);
    };
}

btn.addEventListener("click",() => {
    const value = clickButton();
    //num1,num2,operator assignments
    let result;
    displayResult(num1,num2,operator);
});

const btn = document.querySelector("button");
function clickButton() {
    if (btn.class == "digit") {
        return displayDigit(btn);
    };
    if (btn.class == "oprtr") {
        return clickOperator(btn);
    };
};

function displayDigit(buttonClicked) {
    //const digitBtn = document.getElementsByClassName("digitBtn");
    //const zero = document.getElementById("0");
    const number = buttonClicked.textContent
    display.textContent = number;
    return number;
}

function clickOperator(buttonClicked) {
    //const oprtrBtn = document.getElementsByClassName("oprtrBtn");
    const oprtr = buttonClicked.textContent;
    return oprtr;
}

function displayResult(num1,num2,operator) {
    const display = document.getElementById("display");
    //if operators are clicked consecutively
        operator = clickOperator();
    //const equal = document.getElementById("=")
    btn.addEventListener("click",(num1,num2,operator) => {
        if (num1 == 0 || operator == 0 || num2 || 0) {
            alert("Not all components have been entered. Click \"clear\" to restart.");
            return;
        };
        if (btn.getElementId() == "="
            || btn.getElementId() == "+"
            || btn.getElementId() == "-"
            || btn.getElementId() == "×"
            || btn.getElementId() == "÷") {
                let almostResult = operate(operator,num1,num2);
                result = almostResult;
                let resultPlaces = almostResult
                    .toString()
                    .length();
                if (resultPlaces > 12) {
                    result = result.toPrecision(12);
                };
                display.textContent = result;
                operator = btn.clickOperator();
        };
        /*if (btn.getElementId() == "+"
            || btn.getElementId() == "-"
            || btn.getElementId() == "×"
            || btn.getElementId() == "÷") {
                operator = btn.clickOperator();
                num1 = num2
                num2 = displayDigit()
                result = operate(operator,num1,num2)
                display.textContent = result;
        }else{*/
            return result;
        //};
    });
}

function clear() {
    const clear = document.getElementById("clear");
    clear.addEventListener("click",(num1,num2,operator,result) => {
        num1 = null;
        num2 = null;
        operator = null;
        result = null;
    });
}