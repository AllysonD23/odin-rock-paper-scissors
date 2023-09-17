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
    console.log("Computer selection is " + computerChoice);
}


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
console.log("Player selection is " + playerSelection);
}

// Create playerScore variable 
let playerScore = 0;
// Create computerScore variable
let computerScore = 0;

// Create determineWinner function with two parameters (playerSelection and computerSelection) to determine winner of round
function determineWinner(playerSelection, computerSelection) {
// Create a tie variable
let tie = "It's a tie!"
// Create a winner variable
let playerWon = "You Win!"
// Create a loser variable
let playerLost = "You Lose!"
// If playerSelection = computerSelection then return "It's a tie!"
if (playerSelection === computerSelection) {
    return tie;
// If computerSelection = "Rock" and playerSelection = "Paper" then return "You Win! Paper beats Rock"
} else if (computerSelection === "Rock") {
    if (playerSelection === "Paper") {
        ++playerScore;
        return playerWon + " Paper beats Rock";
// If computerSelection = "Rock" and playerSelection = "Scissors" then return "You Lose! Rock beats Scissors"
    } else {
        ++computerScore;
        return playerLost + " Rock beats Scissors"
    }
// If computerSelection = "Paper" and playerSelection = "Scissors" then return "You Win! Scissors beats Paper"
} else if (computerSelection === "Paper") {
    if (playerSelection === "Scissors") {
        ++playerScore;
        return playerWon + " Scissors beats Rock";
// If computerSelection = "Paper" and playerSelection = "Rock" then return "You Lose! Paper beats Rock"
    } else {
        ++computerScore;
        return playerLost + " Paper beats Rock"
    }
// If computerSelection = "Scissors" and playerSelection = "Paper" then return "You Lose! Scissors beats Paper"
} else if (computerSelection === "Scissors") {
    if (playerSelection === "Paper") {
        ++computerScore;
        return playerLost + " Scissors beats Paper";

// If computerSelection = "Scissors" and playerSelection = "Rock" then return "You Win! Rock beats Scissors"
    } else {
        ++playerScore;
        return playerWon + " Rock beats Scissors"
    }
// Return error if conditions are not met
} else {
    return "ERROR"
};

}

//console.log(determineWinner(playerSelection, computerChoice));

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.


// Create function called game
function game() {
// Call the determineWinner function
getComputerChoice();
getPlayerChoice();
console.log(determineWinner(playerSelection, computerChoice));
console.log("The computer score is " + computerScore);
console.log("The player score is " + playerScore);
getComputerChoice();
getPlayerChoice();
console.log(determineWinner(playerSelection, computerChoice));
console.log("The computer score is " + computerScore);
console.log("The player score is " + playerScore);
getComputerChoice();
getPlayerChoice();
console.log(determineWinner(playerSelection, computerChoice));
console.log("The computer score is " + computerScore);
console.log("The player score is " + playerScore);
getComputerChoice();
getPlayerChoice();
console.log(determineWinner(playerSelection, computerChoice));
console.log("The computer score is " + computerScore);
console.log("The player score is " + playerScore);
getComputerChoice();
getPlayerChoice();
console.log(determineWinner(playerSelection, computerChoice));
console.log("The computer score is " + computerScore);
console.log("The player score is " + playerScore);
// Console log the winner of the game

if (computerScore > playerScore) {
    console.log("You lost the game!");
} else if (computerScore < playerScore) {
    console.log("You won the game!");
} else {
    console.log("It's a tie!");
}
}

// Call game function
game();g