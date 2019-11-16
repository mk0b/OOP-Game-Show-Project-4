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

//Event Listeners

startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

//TODO: ended on part 2 step 9