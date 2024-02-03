function getComputerChoice() {
	let choices = ['rock', 'paper', 'scissors'];
	let randomNumber = Math.floor(Math.random() * choices.length);
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
// const playerSelection = prompt(
// 	'choose between rock,paper and scissors'
// ).toLocaleLowerCase();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function playGame() {
	const playerSelection = prompt(
		'choose between rock,paper and scissors'
	).toLocaleLowerCase();
	const computerSelection = getComputerChoice();
	console.log(playRound(playerSelection, computerSelection));
	if (computerScore > userScore) {
		console.log(
			`computer score: ${computerScore} vs. user score: ${userScore} `
		);
	} else if (userScore > computerScore) {
		console.log(
			`user score: ${userScore} vs. computer score: ${computerScore} `
		);
	} else if (userScore === computerScore) {
		console.log(
			`user score: ${userScore} vs. computer score: ${computerScore}`
		);
		console.log(typeof userScore, typeof computerScore);
	}
}
// I think the issue is that im comparing a string and not a number
playGame();
