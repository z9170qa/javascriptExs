let a = document.getElementById('text1');
let b = document.getElementById('text2');
let output = document.getElementById('out');
let choice = "";

let calcHistory = document.getElementById('add-history')

function add() {
     output.value = Number(a.value)+Number(b.value);
     choice = "+"
}

function subtract() {
    output.value = a.value-b.value;
    choice = "-"
}

function multiply() {
    output.value = a.value*b.value;
    choice = "x"
}

function divide() {
    output.value = a.value/b.value;
    choice = "/"
}

function power() {
    output.value = a.value ** b.value;
    choice = "^"
}

function root() {
    output.value = a.value ** (1/b.value);
    choice = "^ 1 /"
}

function addHis() {
    let newHis = document.createElement('p');
    newHis.innerText = a.value + " " + choice + " " + b.value + " = " + output.value;
    calcHistory.appendChild(newHis);
}