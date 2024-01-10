/* jshint esversion: 6 */
let playerScore = 0;
let cpuScore = 0;
let rounds = 0;
let levelDifficulty;
let winData;

// target player choice div
const playerChoiceContainer = document.getElementById("player_choice_div");
// target difficulty buttons easy medium hard
const btnDifficulty = document.getElementsByClassName('btn-difficulty');
// target choice buttons ie. rock paper.etc
const btnChoice = document.getElementsByClassName('btn-choice');

/**
 * waits for the DOM to load then fetches json data
 */
document.addEventListener('DOMContentLoaded', function () {
    fetchWinData();
    setLevelBtn();
    addHideClass();
});

/**
 * fetches the data form the winData.json file and stores it in the variable winData
 */
async function fetchWinData() {
    const res = await fetch('assets/js/json/windata.json');
    winData = await res.json();
    let rockWins = winData.rock.wins; // ["lizard", "scissors"] 
    let paperWins = winData.paper.wins; // ["rock", "spock"]
    let scissorsWins = winData.scissors.wins; // ["lizard", "paper"]
    let lizardWins = winData.lizard.wins; // ["paper", "spock"]
    let spockWins = winData.spock.wins; // ["rock", "scissors"]
}

/**
 * sets the buttons for difficulty eventlistener and sends the input to the 
 * playGame function
 */
function setLevelBtn() {
    for (let button of btnDifficulty) {
        button.addEventListener('click', function () {
            const difficulty = this.getAttribute("data-type");
            console.log(`Button clicked. Difficulty: ${this.getAttribute("data-type")}`);
            levelDifficulty = difficulty;
            playGame(this.getAttribute("data-type"));
            playerChoice(this.getAttribute("data-choice"));
            computerChoice(this.getAttribute("data-type"));
        });
    }
    for (let button of btnChoice) {
        button.addEventListener('click', function () {
            const playerChoice = this.getAttribute('data-choice');
            console.log(`Choice Button clicked. Player Choose: ${playerChoice}`);
        })
    }
}

/**
 *  adds the hide class to an element with classnames 
 */
function addHideClass() {
    playerChoiceContainer.classList.add("hide");
}

function showHiddenClass() {
    playerChoiceContainer.classList.remove("hide");
}

/**
 * !
 */
function playerChoice() {
    const playerChoice = document.getElementsByClassName("player_choice_div");
}

/**
 * grabs the level difficulty from playGame and uses the string passes to 
 * decide what level of random to use.
 */
function computerChoice(levelDifficulty) {
    let numRandom;
    const numRandomRange = 5;

    if (levelDifficulty === 'easy') {
        numRandom = Math.floor(Math.random() * (numRandomRange / 2));
    } else if (levelDifficulty === 'medium') {
        numRandom = Math.floor(Math.random() * (numRandomRange));
    } else if (levelDifficulty === 'hard') {
        numRandom = Math.floor(Math.random() * numRandomRange * 2);
    } else {
        alert(`Unknown difficulty ${levelDifficulty}`);
    }
    const choices = Object.keys(winData);
    const computerChoice = choices[numRandom];
    console.log(`Computer choose: ${computerChoice}`);
    determineWinner(computerChoice);
    showHiddenClass();
}


/**
 * 
 */
function playGame(levelDifficulty) {


}
/**
 * !
 */
function determineWinner(playerChoice, computerChoice) {


}