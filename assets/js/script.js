/* jshint esversion: 6 */
let playerScore = 0;
let cpuScore = 0;
let rounds = 0;

document.addEventListener('DOMContentLoaded', function () {
    fetchWinData();
});

async function fetchWinData() {
    const res = await fetch('https://raw.githubusercontent.com/Mulloo/rock_paper_scissors_lizard_spock/main/assets/js/json/data.json');
    winData = await res.json();
    console.log(winData);

    console.log(winData.rock.wins);
}

function addHideClass() {
    document.getElementsByClassName('playerChoiceDiv').classlist.add('hide');
}

function playerChoice() {

}