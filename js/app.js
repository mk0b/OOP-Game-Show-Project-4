/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//TODO: Fill out the read me.
//TODO: refactor code.
//TODO: Test!
//TODO: Clean up comments.
//TODO: Go for exceeds!


/*Global Declarations*/
let game;
const startGameButton = document.querySelector('#btn__reset');
const keyboardDiv = document.querySelector('#qwerty');

/*Event Listeners*/

//When start button is clicked start game/reset game
startGameButton.addEventListener('click', () => {
    game = new Game();
    game.resetGame();
    game.startGame();
});

//Dynamic Event Listener that checks what has been clicked.
keyboardDiv.addEventListener('click', (event) => {
    const clicked = event.target;
    //if a letter (only button letters not div) was clicked log the buttom/letter when calling handleInteraction(button)
    //if class === key
    if (clicked.getAttribute('class') === 'key') {
        game.handleInteraction(clicked);
    }
});

//TODO: Event listener has been added for the keydown or keyup event so that pressing a 
//physical keyboard button results in the handleInteraction() method being called for the 
//associated onscreen keyboard button
keyboardDiv.addEventListener('keydown', (event) => {
    const pressed = event.keyCode;
    console.log(pressed);
});


/*
Additional Functions that help me refactor.
*/

//Converts an object into an character array and removes the characters not needed in the phrase.
const convertCurrentPhrase = (phrase) => {
    //Fell into a google whole to figure out how to convert an object to a string.
    const currentPhrase = JSON.stringify(phrase).toLowerCase();
    
    //break up the string and put it into it's own array for each char including spaces.
    const phraseCharArray = currentPhrase.split("");

    //Removing the unwated first 10 indices and the last index.
    for  (let i = 0; i <= 10; i++) {
        phraseCharArray.shift();
    }

    //Removing the last two unwanted chars from the string
    for (let c = 0; c <= 1; c++) {
        phraseCharArray.pop();
    }

    return phraseCharArray;
};

//Multiple places I need to grab elements and use them as an array so condensed the code.
const convertToArray = (querySelectorAllElementString) => {
    //grabbing the collection of elements
    const collection = document.querySelectorAll(querySelectorAllElementString);
    //converting it into an array
    const list = [...collection];
    return list;
};

//Selecting one element from the DOM
const selectElement = (element) => {
    return document.querySelector(element);
};
