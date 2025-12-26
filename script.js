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

function displayDigit(buttonClicked) {
    //const digitBtn = document.getElementsByClassName("digitBtn");
    //const zero = document.getElementById("0");
    const number = buttonClicked.textContent
    display.textContent = number;
    return digit;
}

function clickOperator(buttonClicked) {
    //const oprtrBtn = document.getElementsByClassName("oprtrBtn");
    const oprtr = buttonClicked.textContent;
    return oprtr;
}

const btn = document.querySelector("button");
function clickButton() {
    btn.addEventListener("click",() => {
        if (btn.class == "digit") {
            displayDigit(btn);
        };
        if (btn.class == "oprtr") {
            clickOperator(btn);
        };
    });
}

function displayResult() {
    num1 = displayDigit();
    operator = clickOperator();
    //if consecutive operator buttons are clicked
        //operator = last one clicked
    num2 = displayDigit();
    let result;
    const display = document.getElementById("display");
    //if clickOperator() runs again instead of = being clicked
        //operator = clickOperator()
        //num1 = num2
        //num2 = displayDigit()
        //result = operate(operator,num1,num2)
        //display.textContent = result;
    const equal = document.getElementById("=")
    equal.addEventListener("click",(num1,num2,operator) => {
        if (num1 == 0 || operator == 0 || num2 || 0) {
            //break out of this somehow or wait or sth not sure what yet
            alert("Not all components have been entered.");
        };
        let almostResult = operate(operator,num1,num2);
        result = almostResult;
        let resultPlaces = almostResult
            .toString()
            .length();
        if (resultPlaces > 12) {
            result = result.toPrecision(12);
        };
        display.textContent = result;
    });
    return result;
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