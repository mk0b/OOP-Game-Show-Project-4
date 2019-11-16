/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Setting up the Phrase class. Phrases can only be letters and spaces.
class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    /*
    Displays the chosen phrase to the game board.
    */
   //TODO: Remove all of the console.log() from this section.
    addPhraseToDisplay() {
        //Fell into a google whole to figure out how to convert an object into a string.
        const currentPhrase = JSON.stringify(this.phrase).toLowerCase();
        console.log(typeof this.phrase);
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
        //loop through the char array and for every char create a list item with the given html styling
        //append it to where it should go
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }

}