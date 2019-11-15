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
            {phrase: 'all bark and no bite'},
            {phrase: 'as busy as a bee'},
            {phrase: 'cold turkey'},
            {phrase: 'calm before the storm'},
            {phrase: 'hold your horses'},
            {phrase: 'jump the shark'}
        ];  
        return phraseList;      
    }

    startGame() {

    }

    getRandomPhrase() {
        const randomNumber = Math.floor( Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomNumber];
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