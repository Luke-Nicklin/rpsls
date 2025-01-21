const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const lizardButton = document.getElementById('lizard');
const spockButton = document.getElementById('spock');

function playGame(userMove) {
  // Get computer's move randomly
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
  
  // Update scoreboard
 let wins = parseInt(document.getElementById("wins").textContent);
 let losses = parseInt(document.getElementById("losses").textContent);
 let ties = parseInt(document.getElementById("ties").textContent);

 // Update result
 let resultDisplay = parseInt(document.getElementById("resultDisplay").textContent);

 // Add scores to scoreboard
 if (result === "win") {
  wins++
 } else if (result === "loss") {
  losses++
 } else {
  ties++
 }
}