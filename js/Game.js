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

    /*
    Checks for winning move.
    @return {boolean} true if game has been won, false if game hasn't been won yet.
    */
   //TODO: Remove tests.
    checkForWin() {
        //remove the spaces from the array
        const noSpaceLiList = convertToArray('#phrase li').filter(li => !li.classList.contains('space'));
        console.log(noSpaceLiList);
        //looping through with .every. If all match will pass true if it gets one false will pass false.
        return noSpaceLiList.every(li => li.classList.contains('show'));
    }

    /*
    Increases missed property value.
    Removes a life from the scoreboard.
    Checks if player has remaining lives and ends game if player is out of lives.
    */
    removeLife() {
        //remove a heart life from the screen and replace it with the image for the lost heart life.
        //TODO: How do i get letter here?
        const letterDoesNotMatch = convertCurrentPhrase(this.activePhrase).find(char => char === letter);
        const lifeList = convertToArray('#scoreboard li');
        if (letterDoesNotMatch === false) {
            //replace the image with lostHeart.png.
            //loop through once each time this is matched
            for (let i = 0; i < lifeList.length; i++) {
                if (lifeList[i].getAttribute('src') === 'images/liveHeart.png') {
                    //break afte it is changed once? or only loop once?
                    lifeList[i].setAttribute('src', 'images/lostHeart.png');
                    //breaks after doing this once I think
                    break;
                }
            }
            //increase missed prop value.
            this.missed += 1;
        }
    }

    gameOver() {

    }

}