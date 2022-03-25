// import functions
import { add } from './math-utils.js';
// grab dom with getElementById
const addInput1El = document.getElementById('add-input-1');
const addInput2El = document.getElementById('add-input-2');
const addButtonEl = document.getElementById('add-button');
const addResultsEl = document.getElementById('add-results');

// event listener
addButtonEl.addEventListener('click', () => {
    // cool 
    // - on click, the two numbers get added and are displayed
    // - get the two numbers from their inputs
    const num1 = addInput1El.value;
    const num2 = addInput2El.value;

    // - add them together
    // this is hard to remember!
    // i don't want to have to repeat this recipe every single time--let's write a function!
    const sum = add(num1, num2);

    // - change the textContent to the sum
    addResultsEl.textContent = sum;
});