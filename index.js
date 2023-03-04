let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let cSelect;

  if (randomNum === 1) {
    cSelect = "rock";
  } else if (randomNum === 2) {
    cSelect = "paper";
  } else {
    cSelect = "scissors";
  }
  return cSelect;
}

function getPlayerChoice() {
  let pSelect = prompt("Enter your choice: ").toLowerCase();
  return pSelect;
}

function playerRound(playerSelection, computerSelection) {
  let player = playerSelection;
  let computer = computerSelection;

  if (player === computer) {
    return `It's a tie! You both picked ${player}.`;
  } else if (player === "rock" && computer === "scissors") {
    ++playerScore;
    return "You Win! Rock beats Scissors.";
  } else if (player === "paper" && computer === "rock") {
    ++playerScore;
    return "You Win! Paper beats Rock.";
  } else if (player === "scissors" && computer === "paper") {
    ++playerScore;
    return "You Win! Scissors beats Paper.";
  } else if (player === "paper" && computer === "scissors") {
    ++computerScore;
    return "You Lose! Scissors beats Paper.";
  } else if (player === "scissors" && computer === "rock") {
    ++computerScore;
    return "You Lose! Rock beats Scissors.";
  } else if (player === "rock" && computer === "paper") {
    ++computerScore;
    return "You Lose! Paper beats Rock.";
  }
}

function declareWinner() {
  if (computerScore === playerScore) {
    console.log(
      `It's a tie!\nYou: ${playerScore} \nComputer: ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(`You Lose!\nYou: ${playerScore} \nComputer: ${computerScore}`);
  } else {
    console.log(`You Win!\nYou: ${playerScore} \nComputer: ${computerScore}`);
  }
}

function game() {
  for (let i = 0; i < 5; ++i) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log(playerRound(playerSelection, computerSelection));
  }
  declareWinner();
}
game();
