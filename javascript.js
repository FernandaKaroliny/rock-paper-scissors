const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

let playerSelection;
let computerSelection;
let score = 0;

function playRound() {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            score++;
            return ("You win! Rock beats scissors");
        } else if (computerSelection === "paper") {
            return ("You Lose! Paper beats Rock");
        } else if (computerSelection === "rock") {
            return ("It's a tie! Play again");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return ("You Lose! Rock beats scissors");
        } else if (computerSelection === "paper") {
            score++;
            return ("You win! Scissors beats paper");
        } else if (computerSelection === "scissors") {
            return ("It's a tie! Play again");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            score++;
            return ("You win! Paper beats Rock");
        } else if (computerSelection === "scissors") {
            return ("You Lose! Scissors beats paper");
        } else if (computerSelection === "paper") {          
            return ("It's a tie! Play again");
        }
    }
}

function game() {
    let n = 6;
    let round;
    for (let i = 1; i < n; i++) {
        playerSelection = (prompt("Choose an option: rock, paper or scissors")).toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        round = playRound();
        if(round === "It's a tie! Play again") {
            n++;
        }
        console.log(round);
    }
    console.log(`Final score: ${score}`);

    if (score >= 3){
        console.log("You won the game!");
    }else{
        console.log("You lost the game!");
    }
}

game();