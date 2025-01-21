const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const lizardButton = document.getElementById('lizard');
const spockButton = document.getElementById('spock');

function playGame(userMove) {
  // Get computer's choice randomly
  const moves = ["rock", "paper", "scissors", "lizard", "spock"];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

  // Determine winner
  let result;
  if (userMove === computerMove) {
    result = "tie";
  } else if (
      (userMove === "rock" && 
        (computerMove === "scissors" || computerMove === "lizard")) ||
      (userMove === "paper" &&
        (computerMove === "rock" || computerMove === "spock")) ||
      (userMove === "scissors" &&
        (computerMove === "paper" || computerMove === "lizard")) ||
      (userMove === "lizard" &&
        (computerMove === "paper" || computerMove === "spock")) ||
      (userMove === "spock" &&
        (computerMove ==="rock" || computerMove === "scissors"))
    ) {
      result = "win";
    } else {
      result = "loss";
    }

    console.log(computerMove, result);
  }