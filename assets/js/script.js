/* jshint esversion: 8 */
let playerScore = 0;
let cpuScore = 0;
let rounds = 0;
let winData;
let numRandom;


const btnChoice = document.getElementsByClassName('btn-choice');
const playerScoreContainer = document.getElementById('player-score');
const cpuScoreContainer = document.getElementById('cpu-score');
const roundsContainer = document.getElementById('rounds');
const startBtn = document.getElementById('start');
const scoreBoardContainer = document.getElementById('scoreboard');
const gameContainer = document.getElementById('game-container');
const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('cpu-choice');
const outCome = document.getElementById('out-come');
/**
 * waits for the DOM to load then fetches json data
 */
document.addEventListener('DOMContentLoaded', function () {
    fetchWinData();
    startBtn.addEventListener('click', function () {
        showScoreBoardGameContainers();
        updateVariables();
    });
    for (let button of btnChoice) {
        button.addEventListener('click', function (event) {
            mainGameLogic(event);
        });
    }
});

function updateVariables() {
    startBtn.innerText = 'Restart';
    roundsContainer.innerText = '1';
    playerScoreContainer.innerText = '0';
    cpuScoreContainer.innerText = '0';
    outCome.innerText = '';
    playerScore = 0;
    cpuScore = 0;
    rounds = 0;
}

/**
 * 
 */
function mainGameLogic(event) {
    const playerChoiceMade = event.target.getAttribute('data-choice');
    console.log(`Choice Button clicked. Player Choose: ${playerChoiceMade}`);
    numRandom = Math.floor(Math.random() * 5);
    let computerChoiceMade = computerChoice(numRandom);
    determineWinner(playerChoiceMade, computerChoiceMade);

}
/**
 * fetches the data form the winData.json file and stores it in the variable winData
 */
async function fetchWinData() {
    try {
        const res = await fetch('assets/js/json/windata.json');
        winData = await res.json();
    } catch (error) {
        console.error('Error fetching winData', error);
        throw error;
    }
}

function computerChoice(numRandom) {
    const choices = Object.keys(winData);
    // const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoiceMade = choices[numRandom];
    console.log(`Computer choose: ${computerChoiceMade}`);
    console.log(numRandom);
    return computerChoiceMade;
}



/**
 *  Shows the scoreboard and game container after start is clicked
 */
function showScoreBoardGameContainers() {
    scoreBoardContainer.classList.remove('hide');
    gameContainer.classList.remove('hide');

}

function determineWinner(playerChoiceMade, computerChoiceMade) {
    let result;
    rounds++;
    playerDisplay.innerText = playerChoiceMade;
    computerDisplay.innerText = computerChoiceMade;
    if (playerChoiceMade === computerChoiceMade) {
        result = 'it\'s a tie';
        console.log(result);
        outCome.style.color = 'orange';
    } else {
        const wins = winData[playerChoiceMade].wins;
        if (wins.includes(computerChoiceMade)) {
            result = `Player wins! ${playerChoiceMade} beats ${computerChoiceMade}`;
            console.log(result);
            playerScore++;
            outCome.style.color = '#2ecc71';
        } else {
            result = `Computer wins! ${computerChoiceMade} beats ${playerChoiceMade}`;
            console.log(result);
            cpuScore++;
            outCome.style.color = 'red';
        }
    }
    playerScoreContainer.innerHTML = playerScore;
    cpuScoreContainer.innerHTML = cpuScore;
    outCome.innerHTML = result;
    roundsContainer.innerHTML = rounds;
}