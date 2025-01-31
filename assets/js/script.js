// DOM variables
const rockButton = document.getElementById("rock").addEventListener("click", () => playGame("rock"));
const paperButton = document.getElementById("paper").addEventListener("click", () => playGame("paper"));
const scissorsButton = document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
const lizardButton = document.getElementById("lizard").addEventListener("click", () => playGame("lizard"));
const spockButton = document.getElementById("spock").addEventListener("click", () => playGame("spock"));
const userImage = document.getElementById("userImage");
const computerImage = document.getElementById("computerImage");
const resultDisplayElement = document.getElementById("resultDisplay");
const scoreboard = document.getElementById("scoreboard")


// Array of possible moves
const moves = ["rock", "paper", "scissors", "lizard", "spock"];

// Update scoreboard
let win = 0;
let loss = 0;
let tie = 0;

// Function to play game
function playGame(userMove) {
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

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

// Update result
let resultDisplay;
if (result === "win") {
  resultDisplay = "You win!";
} else if (result === "lose") {
  resultDisplay = "You lose!";
} else {
  resultDisplay = "It's a tie!";
}

resultDisplayElement.textContent = resultDisplay;
updateScore(result)
}

function updateScore(result) {
  if (result === "win") {
    win++;
  } else if (result === "lose") {
    loss++;
  } else if (result === "tie") {
    tie++;
  }

document.getElementById("wins").textContent = win;
document.getElementById("losses").textContent = loss;
document.getElementById("ties").textContent = tie;
}