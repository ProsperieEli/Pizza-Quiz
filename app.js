// import functions and grab DOM elements
const button = document.getElementById('quiz');
const display = document.getElementById('results');
import { countsAsaYes } from './utils.js';
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  button.addEventListener('click', () => {
    let correctAnswer = 0;

    const firstName = prompt('Welcome to the quiz! What is your first name?');
    const lastName = prompt('What is your last name?');
    const wantsToContinue = prompt(`Hello ${firstName} ${lastName}! Are you ready to start the quiz?`)
    if (!wantsToContinue) return;
     
    const question1 = prompt('Question 1: Was pizza made before 1833');
    if (question1 === 'y') correctAnswer++;

    const question2 = prompt('Did the worlds first pizzeria open in 1905?');
    if (question2 === 'y') correctAnswer++;
   
    const question3 = prompt('Pizza became largest after WWII when troops took an immediate liking to it?')
    if (question3 === 'y') correctAnswer++;


    alert(`Okay ${firstName} ${lastName}, thank you for taking the quiz!`)
    results.textContent = `${firstName} ${lastName} you got ${correctAnswer} out of 3.`;

  })