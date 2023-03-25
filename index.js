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

function playRound(playerSelection, computerSelection) {
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
    return `It's a tie!`;
  } else if (computerScore > playerScore) {
    return `You Lose! Isa kang kahihiyan`;
  } else {
    return `You Win! Chamba`;
  }
}

/**********UI**********/
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const yourScore = document.querySelector("#yourScore");
const compScore = document.querySelector("#compScore");
const gameResult = document.querySelector("#gameResult");
const restartDiv = document.querySelector("#restart");

rock.addEventListener("click", () => buttonClick("rock"));
paper.addEventListener("click", () => buttonClick("paper"));
scissors.addEventListener("click", () => buttonClick("scissors"));

function buttonClick(playerSelection) {
  const computerSelection = getComputerChoice();
  const roundResult = playRound(playerSelection, computerSelection);

  displayResult(roundResult);
  displayScore();

  if (computerScore === 5 || playerScore === 5) {
    gameResult.textContent = declareWinner();
  }
}

function displayResult(roundResult) {
  gameResult.textContent = roundResult;
}

function displayScore() {
  yourScore.textContent = playerScore;
  compScore.textContent = computerScore;
}
