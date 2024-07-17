let display = document.getElementById('display');
let buttons = document.querySelectorAll('.buttons button');

let calculator = {
    displayValue: '',
    firstOperand: null,
    secondOperand: null,
    operator: null,
    result: null
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'ac':
                calculator.displayValue = '';
                calculator.firstOperand = null;
                calculator.secondOperand = null;
                calculator.operator = null;
                display.value = '';
                break;
            case 'equal':
                calculator.secondOperand = parseFloat(calculator.displayValue);
                calculator.result = operate(calculator.operator, calculator.firstOperand, calculator.secondOperand);
                display.value = calculator.result;
                calculator.displayValue = '';
                break;
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                calculator.firstOperand = parseFloat(calculator.displayValue);
                calculator.operator = button.id;
                calculator.displayValue = '';
                break;
            case 'mod':
                calculator.firstOperand = parseFloat(calculator.displayValue);
                calculator.operator = '%';
                calculator.displayValue = '';
                break;
            case 'square':
                calculator.firstOperand = parseFloat(calculator.displayValue);
                calculator.result = operate('square', calculator.firstOperand);
                display.value = calculator.result;
                calculator.displayValue = '';
                break;
            default:
                calculator.displayValue += button.textContent;
                display.value = calculator.displayValue;
        }
    });
});

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        case 'square':
            return a * a;
    }
}