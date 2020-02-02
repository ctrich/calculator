const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn-txt');
const clear = document.getElementById('clear');
const btnOp = document.querySelectorAll('.btn-op');
const btnEq = document.getElementById('btn-eq');

let equation = [];
let firstNum = null;
let secondNum = null;
let operator = null;

function add(a, b) {
	return a+b;
}

function sub(a, b) {
	return a-b;
}

function mul(a, b) {
	return a*b;
}

function div(a, b) {
	return  b == 0 ? "Cannot divide by zero" : a/b;
}

function operate(operation, num1, num2) {
	let answer = null;
	if (operation === '+') {
		answer = add(num1, num2);
	}

	if (operation === '-') {
		answer = sub(num1, num2);
	}

	if (operation === '*') {
		answer = mul(num1, num2);
	}

	if (operation === '/') {
		answer = div(num1, num2);
	}
	display.textContent = answer;
	equation = [answer];
}

function setDisplay() {
	equation.push(this.value);
	let displayTxt = equation.join('')
	display.textContent = displayTxt;
	console.log(equation.toString());
}

buttons.forEach(button => button.addEventListener('click', setDisplay));

btnOp.forEach(btn => btn.addEventListener('click', function() {
	firstNum = equation.join('');
	operator = this.value;
	display.textContent = '';
	equation = [];
}));

btnEq.addEventListener('click', function() {
	secondNum = equation.join('');
	operate(operator, Number(firstNum), Number(secondNum));
});

clear.addEventListener('click', () => {
	display.textContent = '';
	equation = [];
});