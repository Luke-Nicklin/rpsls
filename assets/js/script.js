// DOM variables
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const lizardButton = document.getElementById("lizard");
const spockButton = document.getElementById("spock");
const userImage = document.getElementById("userImage");
const computerImage = document.getElementById("computerImage");
const resultDisplay = document.getElementById("resultDisplay");
let wins = document.getElementById("wins");
let losses = document.getElementById("losses");
let ties = document.getElementById("ties");

// Array of possible moves
const moves = ["rock", "paper", "scissors", "lizard", "spock"];

// Function to play game
function playGame(userMove) {
  const computerMove = moves[Math.floor(Math.random() * moves.length)]

// Change images based on user move and computer move
userImage.src = `assets/images/${userMove}.png`;
userImage.alt = moves[userMove];

computerImage.src = `assets/images/${computerMove}.png`;
computerImage.alt = moves[computerMove];

// Else if statement to determine result
let result;
if (userMove === computerMove) {
  result = "tie";
} else if (
  (userMove === "rock" && (computerMove === "scissors" || computerMove === "lizard")) ||
  (userMove === "paper" && (computerMove === "rock" || computerMove === "spock")) ||
  (userMove === "scissors" && (computerMove === "paper" || computerMove === "lizard")) ||
  (userMove === "lizard" && (computerMove === "paper" || computerMove === "spock")) ||
  (userMove === "spock" && (computerMove === "rock" || computerMove === "scissors"))
) {
  result = "win";
} else {
  result = "lose";
}

// Add event listeners for buttons
rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
lizardButton.addEventListener("click", () => playGame("lizard"));
spockButton.addEventListener("click", () => playGame("spock"));

// Update scoreboard
let wins = 0;
let losses = 0;
let ties = 0;

if (result === "win") {
  wins++
} else if (result === "lose") {
  losses++
} else if (result === "tie") {
  ties++;
}

document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById("ties").textContent = ties;

// Update result
let resultDisplay;
if (result === "win") {
  resultDisplay = "You win!";
} else if (result === "lose") {
  resultDisplay = "You lose!";
} else {
  resultDisplay = "It's a tie!";
}

const resultDisplayElement = document.getElementById("resultDisplay");
resultDisplayElement.textContent = resultDisplay;

}