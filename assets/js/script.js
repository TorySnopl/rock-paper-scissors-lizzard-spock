const choices = document.querySelectorAll('.weapon');
const playerScoreElem = document.querySelector('.score-you');
const compScoreElem = document.querySelector('.score-comp');
const resultElem = document.querySelector('.result-is');

const weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScore = 0;
let compScore = 0;

function compPlay() {
    const weaponIndex = Math.floor(Math.random() * weapons.length);
    return weapons(weaponIndex);
}

function updateScore(playerWeapon, computerWeapon) {
    if (playerWeapon === computerWeapon) {
        resultElem.innerHTML = "IT'S A TIE!"
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
        resultElem.innerHTML = "YOU WIN";
        playerScore++;
        playerScoreElem.innerHTML = `${playerScore}`;
    } else {
        resultElem.innerHTML = "THE MACHINE WINS"
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

