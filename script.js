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

// Create playRound function with two parameters (playerSelection and computerSelection) to determine winner of round
function playRound(playerSelection, computerSelection) {
    // Create a tie variable
    let tie = "It's a tie!"
    // Create a winner variable
    let playerWon = "You Win!"
    // Create a loser variable
    let playerLost = "You Lose!"
    // If playerSelection = computerSelection then return "It's a tie!"
    if (playerSelection === computerSelection) {
        return tie;
    // If playerSelection = "Rock" and computerSelection = "Paper" then return "You Lose! Paper beats Rock"
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            ++computerScore;
            return playerLost + " Paper beats Rock";
    // If playerSelection = "Rock" and computerSelection = "Scissors" then return "You Win! Rock beats Scissors"
        } else {
            ++playerScore;
            return playerWon + " Rock beats Scissors"
        }
    // If playerSelection = "Paper" and computerSelection = "Scissors" then return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            ++computerScore;
            return playerLost + " Scissors beats Rock";
    // If playerSelection = "Paper" and computerSelection = "Rock" then return "You Win! Paper beats Rock"
        } else {
            ++playerScore;
            return playerWon + " Paper beats Rock"
        }
    // If playerSelection = "Scissors" and computerSelection = "Paper" then return "You Win! Scissors beats Paper"
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            ++playerScore;
            return playerWon + " Scissors beats Paper";

    // If playerSelection = "Scissors" and computerSelection = "Rock" then return "You Lose! Rock beats Scissors"
        } else {
            ++computerScore;
            return playerLost + " Rock beats Scissors"
        }
    // Return error if conditions are not met
    } else {
        return "ERROR"
    };
}

// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

// Create function called game
function game(playerSelection) {
    getComputerChoice();

    function empty(element) {
        element.replaceChildren(); 
     }
     
     let parent = document.getElementById("results");
     empty(parent);

    // Add paragraph showing round being played
    const roundPara = document.createElement("p");
    const roundNode = document.createTextNode(playRound(playerSelection, computerChoice));
    roundPara.appendChild(roundNode);
    const element = document.getElementById("results");
    element.appendChild(roundPara);

    // Add paragraph showing computer score
    const computerPara = document.createElement("p");
    const computerNode = document.createTextNode("The computer score is " + computerScore);
    computerPara.appendChild(computerNode);
    element.appendChild(computerPara);

    // Add paragraph showing player score
    const playerPara = document.createElement("p");
    const playerNode = document.createTextNode("The player score is " + playerScore);
    playerPara.appendChild(playerNode);
    element.appendChild(playerPara);

    // Show the winner of the game
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore > playerScore) {
            // Add paragraph showing you lost
            const playerLostPara = document.createElement("p");
            const playerLostNode = document.createTextNode("You lost the game!");
            playerLostPara.appendChild(playerLostNode);
            element.appendChild(playerLostPara);

        } else if (computerScore < playerScore) {
            // Add paragraph showing you won
            const playerWonPara = document.createElement("p");
            const playerWonNode = document.createTextNode("You won the game!");
            playerWonPara.appendChild(playerWonNode);
            element.appendChild(playerWonPara);
        } else {
            // Add paragraph showing it's a tie.
            const tiePara = document.createElement("p");
            const tieNode = document.createTextNode("It's a tie!");
            tiePara.appendChild(tieNode);
            element.appendChild(tiePara);
        }
    }

}

// Create event listeners for each button that call your playRound function with the correct playerSelection every time a button is clicked.
buttonRock.addEventListener('click', game.bind (null, "Rock"));
buttonPaper.addEventListener('click', game.bind (null, "Paper"));
buttonScissors.addEventListener('click', game.bind (null, "Scissors"));

