let randomNumber = 0;

function randomRoll() {
    return randomNumber = Math.floor((Math.random()) * 100);
}

function getComputerChoice() {
    randomRoll();

    if (randomNumber >= 0 && randomNumber <= 33) {
        return "rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerSelection = 0;
let humanSelection = 0;

const buttons = document.querySelectorAll("div#choices > button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanSelection = button.id;
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        
        const revealSelection = document.createElement("div");
        body.appendChild(revealSelection);

        revealSelection.textContent = "You played " + humanSelection + ", while the computer played " + computerSelection + ".";

        const revealScore = document.createElement("div");
        body.appendChild(revealScore);

        revealScore.textContent = "Your score is " + `${humanScore}` + " and the computer's score is " + `${computerScore}` + ".";

        checkEnd();
    });
  });

let humanScore = 0;
let computerScore = 0;
let winflag;

function playRound(humanChoice, computerChoice) {        
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        winflag = 1;
        roundWin(); 
    } else if (humanChoice === "rock" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        winflag = 0;
        roundWin();
    } else {
        winflag = 2;
        roundWin();
    }
}

function roundWin() {
    const roundWinner = document.createElement("div");
    body.appendChild(roundWinner);

    if (winflag === 1) {
    roundWinner.textContent = "You win this round!";
    } else if (winflag === 0) {
    roundWinner.textContent = "You lose this round!";
    } else {
    roundWinner.textContent = "It's a tie!";    
    }
}

function checkEnd() {
    if (humanScore == 5 || computerScore == 5) {
        displayWin();
        buttons.forEach((button) => { button.disabled = true });
    } else {
        return;
    }
}

function displayWin() {
    const whoWins = document.createElement("div");
    body.appendChild(whoWins);

    if (humanScore > computerScore) {
        whoWins.textContent = "You are the grand winner!";
    } else {
        whoWins.textContent = "Too bad! The computer is the grand winner!";
    }
}
