const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const lizardButton = document.getElementById("lizard");
const spockButton = document.getElementById("spock");

// Array  possible moves
const moves = ["rock", "paper", "scissors", "lizard", "spock"];

// Function to play game
function playGame(userMove) {
  const computerMove = moves[Math.floor(Math.random() * moves.length)]

// Event listeners for buttons
rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);
lizardButton.addEventListener("click", playGame);
spockButton.addEventListener("click", playGame);

console.log(playGame);
}