const computerMove = document.getElementById ('computerrMove');
const userMove = document.getElementById ('userMove');
const resultDisplay = document.getElementById ('result');





function playGame(userMove) {
  // Get computer's choice randomly
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  const computerMove = choices[Math.floor(Math.random() * choices.length)];

  // Determine winner
  let result;
  if (userMove === computerMove) {
    result = "tie";
  } 

  // Update scoreboard
  

  // Display images

  
  // Display result message
}