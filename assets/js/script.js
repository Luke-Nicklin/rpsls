const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const lizardButton = document.getElementById('lizard');
const spockButton = document.getElementById('spock');

console.log(rockButton);

function playGame(userMove) {
  // Get computer's choice randomly
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  const computerMove = choices[Math.floor(Math.random() * choices.length)];

  // Determine winner
}