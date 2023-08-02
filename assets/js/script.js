const choices = document.querySelectorAll('.weapon');
const playerScoreElem = document.querySelector('.score-you');
const compScoreElem = document.querySelector('.score-comp');
const resultElem = document.querySelector('.result-is');
const compChoiceElem = document.querySelector('.compchoice');

const weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let compScore = 0;

function compPlay() {
    const weaponIndex = Math.floor(Math.random() * weapons.length);
    return weapons [weaponIndex];
}

function updateScore(playerWeapon, computerWeapon) {
    if (playerWeapon) {
        compChoiceElem.innerHTML = `THE MACHINE THROWS: ${computerWeapon}`;
    }
    if (playerWeapon === computerWeapon) {
        resultElem.innerHTML = "IT'S A TIE!";
        
    } else if (
        (playerWeapon === 'scissors' && computerWeapon === 'paper') ||
        (playerWeapon === 'scissors' && computerWeapon === 'lizard') ||
        (playerWeapon === 'paper' && computerWeapon === 'rock') ||
        (playerWeapon === 'paper' && computerWeapon === 'spock') ||
        (playerWeapon === 'rock' && computerWeapon === 'lizard') ||
        (playerWeapon === 'rock' && computerWeapon === 'scissors') ||
        (playerWeapon === 'lizard' && computerWeapon === 'spock') ||
        (playerWeapon === 'lizard' && computerWeapon === 'paper') ||
        (playerWeapon === 'spock' && computerWeapon === 'scissors') ||
        (playerWeapon === 'spock' && computerWeapon === 'rock')
    ){
        resultElem.innerHTML = " RESULT: YOU WIN";
        resultElem.style.color = 'green';
        playerScore++;
        playerScoreElem.innerHTML = `${playerScore}`;
    } else {
        resultElem.innerHTML = "RESULT: THE MACHINE WINS"
        resultElem.style.color = 'red';
        compScore++;
        compScoreElem.innerHTML = `${compScore}`;
    }
}

function selectWeapon () {
    const playerWeapon = this.id;
    const computerWeapon = compPlay();
    updateScore (playerWeapon, computerWeapon);
}

choices.forEach((weapon) => weapon.addEventListener('click', selectWeapon) );

