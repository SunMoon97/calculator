let displayValue = '';
let currentOperator = '';
let resultDisplayed = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    currentOperator = '';
    resultDisplayed = false;
    updateDisplay();
}

function appendToDisplay(char) {
    if (resultDisplayed) {
        clearDisplay();
    }
    displayValue += char;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    resultDisplayed = true;
    updateDisplay();
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Enter') {
        if (key === 'Enter') {
            calculate();
        } else {
            appendToDisplay(key);
        }
    } else if (key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

updateDisplay();
