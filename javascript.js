const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return ("You win! Rock beats scissors");
        } else if (computerSelection === "paper"){
            return ("You Lose! Paper beats Rock");
        } else if (computerSelection === "rock") {
            return ("It's a tie! Play again");
        }
    }else if(playerSelection === "scissors"){
        if (computerSelection === "rock") {
            return ("You Lose! Rock beats scissors");
        } else if (computerSelection === "paper"){
            return ("You win! Scissors beats paper");
        } else if (computerSelection === "scissors") {
            return ("It's a tie! Play again");
        }
    }else if(playerSelection === "paper"){
        if (computerSelection === "rock") {
            return ("You win! Paper beats Rock");
        }else if (computerSelection === "scissors") {
            return ("You Lose! Scissors beats paper");
        }else if (computerSelection === "paper")  {
            return ("It's a tie! Play again");
        }
    } 
}

function game(playerSelection, computerSelection) {

    for(let i = 1; i < 6; i++) {
        playerSelection = (prompt("Choose an option: rock, paper or scissors")).toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game(playerSelection, computerSelection));