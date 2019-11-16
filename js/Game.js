/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Setting up the Game class.

//Phrase list - Got from this website: https://knowyourphrase.com/j
//all bark and no bite
//as busy as a bee
//cold turkey
//calm before the storm
//hold your horses
//jump the shark

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases()
        this.activePhrase = null;
    }

    /*
    I chose to create the phrases in a method. It seems more module and cleaner to me.
    Creates the an array that contains phrase objects and returns it.
    @return {array} an array of phrases that we will use in the game.
    */
    createPhrases() {
        const phraseList = [
            {phrase: 'All Bark and No Bite'},
            {phrase: 'As Busy as a Bee'},
            {phrase: 'Cold Turkey'},
            {phrase: 'Calm Before the Storm'},
            {phrase: 'Hold your Horses'},
            {phrase: 'Jump the Shark'}
        ];  
        return phraseList;      
    }

    startGame() {
        //hiding overlay
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /*
    Creates a random number then uses it to grab a random phrase object.
    @return {Random Phrase Object} This will be used to display for the game.
    */ 
    getRandomPhrase() {
        const randomNumber = Math.floor( Math.random() * this.phrases.length);
        const randomPhrase = new Phrase(this.phrases[randomNumber]);
        //TODO: Add code to prevent the same phrase coming up in a row? Maybe. We might take care of this in a diff way.
        return randomPhrase;
    }

    handleInteraction() {

    }

    checkForWin() {

    }

    removeLife() {

    }

    gameOver() {

    }

}