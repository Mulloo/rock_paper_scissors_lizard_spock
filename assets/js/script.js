/* jshint esversion: 6 */
let playerScore = 0;
let cpuScore = 0;
let rounds = 0;
let winData;
let levelDifficulty;

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
    try {
        const res = await fetch('assets/js/json/windata.json');
        winData = await res.json();
    } catch (error) {
        console.error('Error fetching winData', error)
        throw error;
    }
}

/**
 * grabs the level difficulty from playGame and uses the string passes to 
 * decide what level of random to use.
 */
function computerDifficulty(levelDifficulty) {
    let numRandom = Math.floor(Math.random() * 5); // initialize numRandom with a random value between 0 and 4
    const numRandomRange = 4;
    if (levelDifficulty === 'easy') {
        numRandom = Math.floor(Math.random() * (numRandomRange / 2));
    } else if (levelDifficulty === 'medium') {
        numRandom = Math.floor(Math.random() * (numRandomRange));
    } else if (levelDifficulty === 'hard') {
        numRandom = Math.floor(Math.random() * numRandomRange + 1);
    } else {
        alert(`Unknown difficulty ${levelDifficulty}`);
    }
    computerChoice(numRandom);
}

function computerChoice(numRandom) {
    const choices = Object.keys(winData);
    // const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoiceMade = choices[numRandom];
    console.log(`Computer choose: ${computerChoiceMade}`);
    return computerChoiceMade;
}

/**
 * sets the buttons for difficulty eventlistener and sends the input to the 
 * playGame function
 */
function setLevelBtn() {
    let computerChoiceMade;
    for (let button of btnDifficulty) {
        button.addEventListener('click', function () {
            const difficulty = this.getAttribute("data-type");
            console.log(`Button clicked. Difficulty: ${this.getAttribute("data-type")}`);
            levelDifficulty = difficulty;
            // playGame(this.getAttribute("data-type"));
            // playerChoice(this.getAttribute("data-choice"));
            computerDifficulty(this.getAttribute("data-type"));
        });
    }
    for (let button of btnChoice) {
        button.addEventListener('click', function () {
            const playerChoiceMade = this.getAttribute('data-choice');
            console.log(`Choice Button clicked. Player Choose: ${playerChoiceMade}`);
            let computerChoiceMade;
            determineWinner(playerChoiceMade, computerChoiceMade);
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

function determineWinner(playerChoiceMade, computerChoiceMade) {
    while (computerChoiceMade = undefined) {
        if (playerChoiceMade === computerChoiceMade) {
            let result = 'it\'s a tie'
        } else {
            const wins = winData[playerChoiceMade].wins;
            if (wins.includes(computerChoiceMade)) {
                result = `Player wins! ${playerChoiceMade} beats ${computerChoiceMade}`;
                console.log(result);
            } else {
                result = `Computer wins! ${computerChoiceMade} beats ${playerChoiceMade}`;
                console.log(result);
            }
        }
        return (result);
        determineWinner(playerChoiceMade, computerChoiceMade);
        break;
    }
}