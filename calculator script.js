let currentInput = '';
let previousInput = '';
let operator = null;

const display = document.getElementById('display');

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput = currentInput.toString() + number.toString();
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}

function chooseOperation(selectedOperator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = selectedOperator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

updateDisplay();
