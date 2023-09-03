//Get random computer choice of either Rock, Paper, or Scissors
function getComputerChoice() {
    // Create randomNumber variable
    // Get a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    // Create computerChoice variable
    let computerChoice;
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
    console.log(computerChoice);
}

// Call getComputerChoice function
getComputerChoice();

