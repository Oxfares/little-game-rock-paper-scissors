function getComputerChoice() {
	const choice = Math.random();
	if (choice < 0.33) {
		return "paper";
	} else if (choice < 0.66) {
		return "scissors";
	} else {
		return "rock";
	}
}

function gethumanChoice() {
	let choice = prompt("Rnter your choice (rock, paper, scissors):");
	return choice.toLowerCase();
}

function playround(choice, cchoice) {
	if (hscore === 5 || cscore === 5) return;

	if (choice === cchoice) {
		roundResult.textContent = "Equal";
	} else if (choice === "rock") {
		if (cchoice === "paper") {
			roundResult.textContent = "You lose";
			cscore++;
		} else {
			roundResult.textContent = "You win";
			hscore++;
		}
	} else if (choice === "scissors") {
		if (cchoice === "rock") {
			roundResult.textContent = "You lose";
			cscore++;
		} else {
			roundResult.textContent = "You win";
			hscore++;
		}
	} else if (choice === "paper") {
		if (cchoice === "rock") {
			roundResult.textContent = "You win";
			hscore++;
		} else {
			roundResult.textContent = "You lose";
			cscore++;
		}
	}

	scoreDisplay.textContent = `Player: ${hscore} | Computer: ${cscore}`;

	if (hscore === 5) {
		winnerDisplay.textContent = "🎉 Player wins the game!";
	}

	if (cscore === 5) {
		winnerDisplay.textContent = "💻 Computer wins the game!";
	}
}
function game() {
	let hscore = 0;
	let cscore = 0;
	let cchoice = getComputerChoice();
	let choice = gethumanChoice();
	playround(choice, cchoice);

	if (hscore > cscore) {
		alert("you win the game");
	} else if (hscore < cscore) {
		alert("you lose the game");
	} else {
		alert("the game is a tie");
	}
}

// --------------------
const container = document.querySelector("#container");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

button1.addEventListener("click", () => playround(rock, getComputerChoice()));
button2.addEventListener("click", () => playround(paper, getComputerChoice()));
button3.addEventListener("click", () =>
	playround(scissors, getComputerChoice()),
);

const resultsDiv = document.createElement("div");
resultsDiv.id = "results";

const roundResult = document.createElement("p");
const scoreDisplay = document.createElement("p");
const winnerDisplay = document.createElement("p");

resultsDiv.appendChild(roundResult);
resultsDiv.appendChild(scoreDisplay);
resultsDiv.appendChild(winnerDisplay);
container.appendChild(resultsDiv);

let humanScore = 0;
let computerScore = 0;
