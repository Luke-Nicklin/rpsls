const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const lizardButton = document.getElementById("lizard");
const spockButton = document.getElementById("spock");

function playGame(userMove) {
  // Get computer's move randomly
  const moves = ["rock", "paper", "scissors", "lizard", "spock"];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

document.getElementById("rock").addEventListener("click", playGame);
document.getElementById("paper").addEventListener("click", playGame);
document.getElementById("scissors").addEventListener("click", playGame);
document.getElementById("lizard").addEventListener("click", playGame);
document.getElementById("spock").addEventListener("click", playGame);

}