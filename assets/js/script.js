/* jshint esversion: 6 */
let playerScore = 0;
let cpuScore = 0;
let rounds = 0;
const playerChoiceContainer = document.getElementsByClassName('player_choice_div');
//! add target elements to id's here 


/* waits for the DOM to load then fetches json data */
document.addEventListener('DOMContentLoaded', function () {
    fetchWinData();
    setLevelBtn();
});

/* adds event listener to difficulty buttons and passes the user choice to the playGame function */
const buttons = document.getElementsByTagName('button');

function setLevelBtn() {
    for (let button of buttons) {
        button.addEventListener('click', function () {
            console.log(this.getAttribute('game_type'));
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

function playerChoice() {

}

function playGame(levelDifficulty) {

    addHideClass();
}

function determineWinner() {

}