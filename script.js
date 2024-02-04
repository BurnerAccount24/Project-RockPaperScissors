function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}
let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection === 'scissors' && computerSelection === 'paper') ||
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock')
	) {
		return (
			userScore++, `You win! ${playerSelection} beats ${computerSelection}`
		);
	} else if (
		(computerSelection === 'scissors' && playerSelection === 'paper') ||
		(computerSelection === 'rock' && playerSelection === 'scissors') ||
		(computerSelection === 'paper' && playerSelection === 'rock')
	) {
		return (
			computerScore++, `You lose! ${computerSelection} beats ${playerSelection}`
		);
	} else if (playerSelection === computerSelection) {
		return `It's a tie! You choose ${playerSelection}, and the computer choose ${computerSelection} too`;
	} else {
		return 'Invalid input. Please choose rock, paper, or scissors.';
	}
}

function playGame() {
	for (let round = 1; round <= 5; round++) {
		const playerSelection = prompt(
			'choose between rock,paper and scissors'
		).toLocaleLowerCase();
		const computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
		console.log(
			`user score: ${userScore} vs. computer score: ${computerScore} `
		);
		if (round === 5) {
			console.log(
				`the final score is user score: ${userScore} vs. computer score: ${computerScore}`
			);
		}
	}
}
playGame();
