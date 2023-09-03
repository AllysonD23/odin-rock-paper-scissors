// Get random computer choice of either Rock, Paper, or Scissors

// Create computerChoice variable
let computerChoice;
// Create getComputerChoice function
function getComputerChoice() {
    // Create randomNumber variable
    // Get a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomNumber);

    // If random number is 0, assign computerChoice = Rock
    if (randomNumber === 0) {
        computerChoice = "Rock";
    // If random number is 1, assign computerChoice = Paper
    } else if (randomNumber === 1) {
        computerChoice = "Paper"
    // If random number is 2, assign computerChoice = Scissors
    } else if (randomNumber === 2) {
        computerChoice = "Scissors"
    } else {
        console.log("Error!");
    }

    // Print computerChoice to console
    console.log("computer selection is = " + computerChoice);
}

// Call getComputerChoice function
getComputerChoice();

// Get player's choice of either Rock, Paper, or Scissors 

// Create playerSelection variable
let playerSelection;

// Create getPlayerChoice function
function getPlayerChoice() {
// Create playerInput variable and ask player for input for selection
let playerInput = prompt("Please enter your choice of Rock, Paper, or Scissors:", "Rock");
//console.log(playerInput);
// Set playerSelection equal to the player's input with one capital letter and the rest of the letters lowercase
playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
console.log("player selection is = " + playerSelection);
}

// Call getPlayerChoice function
getPlayerChoice();

// Determine winner of round
// Create determineWinner function with two parameters (playerSelection and computerSelection)
function determineWinner(playerSelection, computerSelection) {
// If playerSelection = computerSelection then return "It's a tie!"
if (playerSelection === computerSelection) {
    return "It's a tie!";
// If computerSelection = "Rock" and playerSelection = "Paper" then return "You Win! Paper beats Rock"
} else if (computerSelection === "Rock") {
    if (playerSelection === "Paper") {
        return "You Win! Paper beats Rock";
// If computerSelection = "Rock" and playerSelection = "Scissors" then return "You Lose! Rock beats Scissors"
    } else {
        return "You Lose! Rock beats Scissors"
    }
// If computerSelection = "Paper" and playerSelection = "Scissors" then return "You Win! Scissors beats Paper"
} else if (computerSelection === "Paper") {
    if (playerSelection === "Scissors") {
        return "You Win! Scissors beats Rock";
// If computerSelection = "Paper" and playerSelection = "Rock" then return "You Lose! Paper beats Rock"
    } else {
        return "You Lose! Paper beats Rock"
    }
// If computerSelection = "Scissors" and playerSelection = "Paper" then return "You Lose! Scissors beats Paper"
} else if (computerSelection === "Scissors") {
    if (playerSelection === "Paper") {
        return "You Lose! Scissors beats Paper";
// If computerSelection = "Scissors" and playerSelection = "Rock" then return "You Win! Rock beats Scissors"
    } else {
        return "You Win! Rock beats Scissors"
    }
// Return error if conditions are not met
} else {
    return "ERROR"
}

}
// Call determineWinner function
console.log(determineWinner(playerSelection, computerChoice));