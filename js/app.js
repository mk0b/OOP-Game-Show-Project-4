/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//TODO: Fill out the read me.
//TODO: refactor code.
//TODO: Test!
//TODO: Clean up comments.
//TODO: Go for exceeds!
//TODO: After they guess it correctly, show the meaning of the phrase/idiom. Or a hint before hand?
//TODO: Document my methods correctly. Look up again how to do that.



//TODO: Remove. Testing phrases array.
//game.phrases.forEach((phrase, index) => {
    //console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//});

//testing the getRandomPhrase()
//console.log(game.getRandomPhrase());


//testing addPhraseToDisplay()
//game.getRandomPhrase().addPhraseToDisplay();

//Testing game.startGame();
//game.startGame();
//console.log('Active Phrase - phrase: ' , game.activePhrase.phrase);

/*
Real code below this line | Bulk Test Code to be removed above.
*/

//Declarations
let game;
const startGameButton = document.querySelector('#btn__reset');
const keyboardDiv = document.querySelector('#qwerty');

//Event Listeners

startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

//create dynamic event listener for clicking any button letter.
keyboardDiv.addEventListener('click', (event) => {
    const clicked = event.target;
    console.log(clicked);
    //if a letter (only button letters not div) was clicked log the buttom/letter when calling handleInteraction(button)

});

/*
Helper Functions
*/

//Converts an object into an character array and removes the characters we don't want.
//I needed this in multiple places so I put it into a separate function.
//TODO: Remove tests.
//TODO: Seems to only like this.phrase if I never have to use a diff one, hard code this to this.phrase instead of param phrase.
const convertCurrentPhrase = (phrase) => {
    //Fell into a google whole to figure out how to convert an object to a string.
    const currentPhrase = JSON.stringify(phrase).toLowerCase();
    console.log(game.activePhrase);
    console.log(typeof phrase);
    console.log(typeof currentPhrase);
    console.log(currentPhrase);
    //break up the string and put it into it's own array for each char including spaces.
    const phraseCharArray = currentPhrase.split("");
    console.log(phraseCharArray);

    //Removing the unwated first 10 indices and the last index.
    for  (let i = 0; i <= 10; i++) {
        phraseCharArray.shift();
    }
    console.log(phraseCharArray);
    //Removing the last two unwanted chars from the string
    for (let c = 0; c <= 1; c++) {
        phraseCharArray.pop();
    }
    console.log(phraseCharArray);
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
