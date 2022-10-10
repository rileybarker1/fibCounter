import fib from './fibonacci.js';
let table = document.querySelector('#table');

let dim = 10;
let fib_n = 0;
let currRow_n = 0;

function newRow() {
    let row = document.createElement('tr');
    row.setAttribute('id', currRow_n.toString());
    table.appendChild(row);
    currRow_n++;
}

function nextNum() {
    if (fib_n % 10 === 0) { newRow() }
    let col = fib_n % 10;
    let newSlot = document.createElement('td');
    newSlot.setAttribute('width', '100');
    newSlot.innerHTML = fib(fib_n);
    document.getElementById(`${currRow_n-1}`).appendChild(newSlot);
    fib_n++;
}

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
var intervalID;
start.addEventListener('click',() => {
    intervalID = setInterval(nextNum, 500);
    start.disabled = true;
    stop.disabled = false;
});
stop.addEventListener('click', () => {
    clearInterval(intervalID);
    start.disabled = false;
    stop.disabled = true;
})
