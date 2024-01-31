function getComputerChoice() {
	let choices = ['rock', 'paper', 'scissors'];
	let randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection === 'scissors' && computerSelection === 'paper') ||
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock')
	) {
		return `You win! ${playerSelection} beats ${computerSelection}`;
	} else if (
		(computerSelection === 'scissors' && playerSelection === 'paper') ||
		(computerSelection === 'rock' && playerSelection === 'scissors') ||
		(computerSelection === 'paper' && playerSelection === 'rock')
	) {
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	} else if (playerSelection === computerSelection) {
		console.log(
			`It's a tie! You choose ${playerSelection}, and the computer choose ${computerSelection} too`
		);
	} else {
		return 'Invalid input. Please choose rock, paper, or scissors.';
	}
}
const playerSelection = prompt(
	'choose between rock,paper and scissors'
).toLocaleLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// function playGame() {
// 	let userScore = 0;
// 	let computerScore = 0;
// 	for (let i = 1; i <= 5; i++) {
// 		playRound(playerSelection, computerSelection);
// 		if (playerSelection > computerSelection) {
// 			userScore++;
// 			console.log('u got a point '[i]);
// 		} else if (computerSelection > playerSelection) {
// 			computerScore++;
// 			console.log(`computer got a point`);
// 		} else {
// 			console.log(`you got ${userScore} and the computer got ${computerScore}`);
// 		}
// 	}
// }
// playGame();
