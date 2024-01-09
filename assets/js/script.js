/* jshint esversion: 6 */
let playerScore = 0;
let cpuScore = 0;
let rounds = 0;
let levelDifficulty;
const playerChoiceContainer = document.getElementsByClassName('player_choice_div');
//! add target elements to id's here 

/**
 * waits for the DOM to load then fetches json data
 */
document.addEventListener('DOMContentLoaded', function () {
    fetchWinData();
    setLevelBtn();
    addHideClass();
});

/* adds event listener to difficulty buttons and passes the user choice to the playGame function */
const buttons = document.getElementsByTagName('button');

/**
 * sets the buttons for difficulty eventlistener and sends the input to the 
 * playGame function
 */
function setLevelBtn() {
    for (let button of buttons) {
        button.addEventListener('click', function () {
            playGame(this.getAttribute('game_type'));
        })
    }
}

/**
 * fetches the data form the winData.json file and stores it in the variable winData
 */
async function fetchWinData() {
    const res = await fetch('assets/js/json/windata.json');
    winData = await res.json();
    console.log(winData);
    console.log(winData['rock'].wins);
    let rockWins = winData.rock['wins'].values();
    console.log(typeof (rockWins));
}

/**
 *  adds the hide class to an element with classnames 
 */
function addHideClass() {
    playerChoiceContainer.classlist.add('hide');
}

function showHiddenClass() {
    playerChoiceContainer.classlist.remove('hide');
}

/**
 * !
 */
function playerChoice() {

}

/**
 * grabs the level difficulty from playGame and uses the string passes to 
 * decide what level of random to use.
 */
function computerChoice() {
    if (levelDifficulty === 'easy') {
        let numRandom = Math.floor(Math.random() * 3 + 1);
    } else if (levelDifficulty === 'medium') {
        let numRandom = Math.floor(Math.random() * 3 + 1);
    } else if (levelDifficulty === 'hard') {
        let numRandom = Math.floor(Math.random() * 3 + 1);
    } else {
        alert(`Unknown difficulty ${levelDifficulty}`)
        throw `Unknown difficulty ${levelDifficulty}. Aborting!`;
    }
    determineWinner(numRandom);
    console.log(numRandom);
    console.log(levelDifficulty);
}


/**
 * 
 */
function playGame(levelDifficulty) {
    computerChoice(levelDifficulty);
    showHiddenClass();
}
/**
 * !
 */
function determineWinner() {

}