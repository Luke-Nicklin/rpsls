const buttons = document.getElementsByClassName("button");

// Game choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

// Game logic
const outcomes = {
    'rock': ['lizard', 'scissors'], // Rock beats lizard and scissors
    'paper': ['rock', 'spock'], // Paper beats rock and spock
    'scissors': ['paper', 'lizard'], // Scissors beats paper and lizard
    'lizard': ['spock', 'paper'], // Lizard beats spock and paper
    'spock': ['scissors', 'rock'], // Spock beats scissors and rock
}

const userImage = document.getElementById("userImage");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");


rock.addEventListener("click", function() {
  userImage.src = "images/Group15.png";
});

paper.addEventListener("click", function() {
    userImage.src = "images/Group16.png";
  });

scissors.addEventListener("click", function() {
    userImage.src = "images/Group17.png";
  });

lizard.addEventListener("click", function() {
    userImage.src = "images/Group19.png";
  });

spock.addEventListener("click", function() {
    userImage.src = "images/Group18.png";
  });


/**
 * Add event listeners for all buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
        let userMove = this.getAttribute("data-choice");
        playGame(userMove);
    });
}


// Score variables
let  wins = 0;
let losses = 0;
let ties = 0;


/** 
 * Function to play the game
 */
function playGame(userMove) {

}


/** 
 * Function to generate random choice for computer 
 */
function computerMove() {
    
}


/**
 * Function to update scoreboard 
 */
function updateScoreboard() {

}