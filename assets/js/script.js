const rockButton = document.getElementById ('rock');
const paperButton = document.getElementById ('paper');
const scissorsButton = document.getElementById ('scissors');
const lizardButton = document.getElementById ('lizard');
const spockButton = document.getElementById ('spock');

// Add event listeners to each button
rockButton.addEventListener('click', () => {
  // Rock button click
  playGame('rock');
});

paperButton.addEventListener('click', () => {
  // Paper button click
  playGame('paper');
});

scissorsButton.addEventListener('click', () => {
  // Scissors button click
  playGame('scissors');
});

lizardButton.addEventListener('click', () => {
  // Lizard button click
  playGame('lizard');
});

spockButton.addEventListener('click', () => {
  // Spock button click
  playGame('spock');
});