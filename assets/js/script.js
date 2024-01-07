/* jshint esversion: 6 */
let playerScore = 0;
let cpuScore = 0;
let rounds = 0;

/* waits for the DOM to load then fetches json data */
document.addEventListener('DOMContentLoaded', function () {
    fetchWinData();
});

/* adds event listener to difficulty buttons and passes the user choice to the playGame function */
const buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.addEventListener('click', function () {
        if (this.getAttribute('gameType') === 'easy') {
            playGame('easy')
        } else if (this.getAttribute('gameType') === 'medium') {
            playGame('medium')
        } else {
            playGame('hard')
        }
    })
}


/* fetches the data form the winData.json file and stores it in the variable winData */
async function fetchWinData() {
    const res = await fetch('https://raw.githubusercontent.com/Mulloo/rock_paper_scissors_lizard_spock/main/assets/js/json/data.json');
    winData = await res.json();
}

/* adds the hide class to an element with classnames */
function addHideClass() {
    document.getElementsByClassName('playerChoiceDiv').classlist.add('hide');
}

function playerChoice() {

}

function playGame() {

}

function determineWinner() {

}