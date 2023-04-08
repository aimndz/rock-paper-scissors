let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let cSelect = 0;

  if (randomNum === 1) {
    cSelect = "rock";
  } else if (randomNum === 2) {
    cSelect = "paper";
  } else {
    cSelect = "scissors";
  }
  return cSelect;
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
const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");
const result = document.getElementById("result");
const yourScore = document.getElementById("yourScore");
const compScore = document.getElementById("compScore");
const gameResult = document.getElementById("gameResult");
const restartDiv = document.getElementById("restart");

rockEl.addEventListener("click", () => buttonClick("rock"));
paperEl.addEventListener("click", () => buttonClick("paper"));
scissorsEl.addEventListener("click", () => buttonClick("scissors"));

function buttonClick(playerSelection) {
  const computerSelection = getComputerChoice();
  const roundResult = playRound(playerSelection, computerSelection);

  displayResult(roundResult);
  displayScore();

  if (computerScore === 5 || playerScore === 5) {
    gameResult.innerText = declareWinner();
    computerScore = 0;
    playerScore = 0;
    rockEl.disabled = true;
    paperEl.disabled = true;
    scissorsEl.disabled = true;
  }
}

function displayResult(roundResult) {
  gameResult.innerText = roundResult;
}

function displayScore() {
  yourScore.innerText = playerScore;
  compScore.innerText = computerScore;
}
