let currentOperand = '0';
let previousOperand = '';
let operation = null;
let resetScreen = false;
const currentOperandElement = document.getElementById('current-operand');
const previousOperandElement = document.getElementById('previous-operand');
function updateDisplay() {
    currentOperandElement.textContent = currentOperand;
    previousOperandElement.textContent = previousOperand;
}
function appendNumber(number) {
    if (resetScreen) {
        currentOperand = '';
        resetScreen = false;
    }
    if (number === '.' && currentOperand.includes('.')) return;
    
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
    updateDisplay();
}
function chooseOperation(op) {
    if (currentOperand === '') return;
    
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = `${currentOperand} ${op}`;
    currentOperand = '';
    updateDisplay();
}
function calculate() {
    if (previousOperand === '' || currentOperand === '' || !operation) return;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    let result;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '−':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            if (current === 0) {
                alert("No se puede dividir por cero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    operation = null;
    previousOperand = '';
    resetScreen = true;
    updateDisplay();
}
function clearAll() {
    currentOperand = '0';
    previousOperand = '';
    operation = null;
    updateDisplay();
}
function deleteLast() {
    if (currentOperand.length === 1) {
        currentOperand = '0';
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }
    updateDisplay();
}
function percentage() {
    if (currentOperand === '') return;
    currentOperand = (parseFloat(currentOperand) / 100).toString();
    updateDisplay();
}
document.querySelectorAll('.btn-number').forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.getAttribute('data-number'));
    });
});

document.querySelectorAll('.btn-operator').forEach(button => {
    if (button.getAttribute('data-operation')) {
        button.addEventListener('click', () => {
            chooseOperation(button.getAttribute('data-operation'));
        });
    }
});
document.querySelector('.btn-equals').addEventListener('click', calculate);
document.querySelector('[data-action="clear"]').addEventListener('click', clearAll);
document.querySelector('[data-action="delete"]').addEventListener('click', deleteLast);
document.querySelector('[data-action="percentage"]').addEventListener('click', percentage);
document.addEventListener('keydown', event => {
    if (event.key >= '0' && event.key <= '9') appendNumber(event.key);
    if (event.key === '.') appendNumber('.');
    if (event.key === '+') chooseOperation('+');
    if (event.key === '-') chooseOperation('−');
    if (event.key === '*') chooseOperation('×');
    if (event.key === '/') chooseOperation('÷');
    if (event.key === 'Enter' || event.key === '=') calculate();
    if (event.key === 'Escape') clearAll();
    if (event.key === 'Backspace') deleteLast();
});
updateDisplay();