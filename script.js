// Generate a random number between 0 and 100
let randomNumber = Math.floor((Math.random()) * 100);

console.log(randomNumber);

// Create a function called getComputerChoice that generates rock, paper or scissors
function getComputerChoice() {
    // IF random number is between 0 and 33 inclusive, RETURN computer's choice as rock
    // ELSEIF random number is between 34 and 66 inclusive, RETURN computer's choice as paper
    // ELSE RETURN computer's choice as scissors
    if (randomNumber >= 0 && randomNumber <= 33) {
        return "rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Create a function called getHumanChoice that allows a human to input rock, paper or scissors
function getHumanChoice() {
    // INTIALIZE a variable for the human's selection
    // Ask human for their input
    // Convert input to lowercase
    let humanSelection = (prompt("Select \'rock\', \'paper\' or \'scissors\'.")).toLowerCase();

    if (humanSelection === "rock" || humanSelection === "paper" || humanSelection === "scissors") {
        return humanSelection;
    } else {
        console.log("There was an error. Please select \'rock\', \'paper\' or \'scissors\'.");
    }
}

// Create and INITIALIZE variables for human and computer scores
let humanScore = 0;
let computerScore = 0;

// Create a function to play the game numberofTimes times
function playGame (numberofTimes) {

    for (let i = 0; i < numberofTimes; i++) {

        function playRound(humanChoice, computerChoice) {
            //IF human selection is rock and computer selection is scissors, print you win, add 1 to humanScore
            //ELSE IF human selection is rock and computer selection is paper, print you lose, add 1 to cS
            //ELSE IF human selection is paper and computer selection is scissors, print you lose, add 1 to cS
            //ELSE IF human selection is paper and computer selection is rock, print you win, add 1 to hS
            //ELSE IF hs is scissors and cs is paper, print you win, add 1 to hS
            //ELSE IF hs is scissors and cs is rock, print you lose, add 1 to cS
            //ELSE print it's a tie
            if (humanChoice === "rock" && computerChoice === "scissors") {
                humanScore += 1;
                console.log("You win!"); 
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                computerScore += 1;
                console.log("You lose!");
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                computerScore += 1;
                console.log("You lose!");
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                humanScore += 1;
                console.log("You win!");
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                humanScore += 1;
                console.log("You win!");
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                computerScore += 1;
                console.log("You lose!");
            } else {
                console.log("It's a tie!");
            }
        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);

        console.log(humanSelection, computerSelection);
        console.log(humanScore, computerScore); 
        }

} 

playGame(5);