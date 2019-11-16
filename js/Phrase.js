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
        //loop through the char array and for every char create a list item with the given html styling
        //append it to where it should go
        const phraseUL = document.querySelector('#phrase ul');
        const isSpace = /^ $/;
        //Using a function I created, it can be found in app.js
        convertCurrentPhrase(this.phrase).forEach(char => {
            //creating an li and appending it
            const li = document.createElement('li');
            phraseUL.appendChild(li);

            //deciding which class/textcontent should go to which li
            if (isSpace.test(char)) {
                //if the char is white space
                li.className = 'space';
            } else {
                //if the char isn't white space
                li.className = `class="hide letter ${char}">`;
                li.textContent = `${char}`;
            }

        });
    }

    /*
    Checks if the chosen letter is in the current phrase.
    @param (string) letter we need to check.
    */
    checkLetter(letter) {
        //Checks to see if the letter selected by the player mathces a letter in the phrase.'
        //I need to get the current phrase
        //activephrase is a 
        //const matchedLetter =  
        //return matchedLetter;
    }

    showMatchedLetter() {

    }

}