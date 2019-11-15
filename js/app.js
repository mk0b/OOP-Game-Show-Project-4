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

const game = new Game();

//TODO: Remove. Testing phrases array.
game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});

//testing the getRandomPhrase()
console.log(game.getRandomPhrase());