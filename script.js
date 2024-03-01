let userScore = 0;
let computerScore = 0;
let playerSelection = document.querySelectorAll('.btn');
let content = document.querySelector('.resultsContainer');
let playAgainBtn = document.querySelector('.play-again');
let result = document.createElement('p');
let score = document.createElement('p');
let finalScore = document.createElement('h3');
content.appendChild(result);
content.appendChild(score);
content.appendChild(finalScore);

for (let i = 0; i < playerSelection.length; i++) {
	playerSelection[i].addEventListener('click', function (e) {
		let value = e.target.getAttribute('data-value');
		let computerSelection = getComputerChoice();
		playRound(value, computerSelection);
		playGame();
	});
}
function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	let randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
	while (userScore < 5 && computerScore < 5) {
		if (
			(playerSelection === 'scissors' && computerSelection === 'paper') ||
			(playerSelection === 'rock' && computerSelection === 'scissors') ||
			(playerSelection === 'paper' && computerSelection === 'rock')
		) {
			userScore++;
			return (
				(result.textContent = `You win! ${playerSelection} beats ${computerSelection}`),
				(score.textContent = `Player: ${userScore} - Computer: ${computerScore}`)
			);
		} else if (
			(computerSelection === 'scissors' && playerSelection === 'paper') ||
			(computerSelection === 'rock' && playerSelection === 'scissors') ||
			(computerSelection === 'paper' && playerSelection === 'rock')
		) {
			computerScore++;
			return (
				(result.textContent = `You lose. ${computerSelection} beats ${playerSelection}`),
				(score.textContent = `Player: ${userScore} - Computer: ${computerScore}`)
			);
		} else if (playerSelection === computerSelection) {
			return (
				(result.textContent = `It's a Draw!`),
				(score.textContent = `Player: ${userScore} - Computer : ${computerScore}`)
			);
		}
	}
}

function playGame() {
	if (computerScore === 5 || userScore === 5) {
		result.textContent = '';
		if (computerScore === 5) {
			finalScore.textContent = `Computer wins the game!`;
			finalScore.style.color = 'red';
		} else {
			finalScore.textContent = `Player wins the game!`;
			finalScore.style.color = 'green';
		}
		playAgainBtn.classList.remove('hidden');
	}
}
playAgainBtn.addEventListener('click', () => {
	userScore = 0;
	computerScore = 0;
	result.textContent = '';
	score.textContent = '';
	finalScore.textContent = '';
	playAgainBtn.classList.add('hidden');

	playRound(value, computerSelection);
	playGame();
});
