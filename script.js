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
let hscore = 0;
let cscore = 0;
function playround(choice, cchoice) {
  if (choice === cchoice) {
    console.log("equal");
  } else if (choice === "rock") {
    if (cchoice === "paper") {
      console.log("you lose");
      cscore++;
    } else {
      console.log("you win");
      hscore++;
    }
  } else if (choice === "scissors") {
    if (cchoice === "rock") {
      console.log("you lose");
      cscore++;
    } else {
      console.log("you win ");
      hscore++;
    }
  } else if (choice === "paper") {
    if (cchoice === "rock") {
      console.log("you win");
      hscore++;
    } else {
      console.log("you lose");
      cscore++;
    }
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    let cchoice = getComputerChoice();
    let choice = gethumanChoice();
    playround(choice, cchoice);
  }
  if (hscore > cscore) {
    alert("you win the game");
  } else if (hscore < cscore) {
    alert("you lose the game");
  } else {
    alert("the game is a tie");
  }
}
game();