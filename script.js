let humanScore = 0;
let computerScore = 0;
let text;
let humanChoice;
let compChoice;

const btns = document.querySelectorAll("button");
const div = document.querySelector(".result");
const yourScoreHTML = document.querySelector(".your-score");
const compScoreHTML = document.querySelector(".computer-score");
const win_lose_text = document.querySelector(".win_lose-text");
const resetBtn = document.querySelector(".reset-btn");
const rps = document.querySelector(".rps");
const img = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

function getHumanChoice() {
  const choice = prompt("Rock, Paper or Scissors?");

  return choice;
}

function getComputerChoice() {
  // Generating random number
  randNum = Math.floor(Math.random() * 3) + 1;

  if (randNum == 1) return "Rock";
  else if (randNum == 2) return "Paper";
  else return "Scissors";
}

function playRound(humanChoice, compChoice) {
  humanChoice = humanChoice.toLowerCase();
  compChoice = compChoice.toLowerCase();

  if (humanChoice == "rock") {
    if (compChoice == "rock") {
      return "It's a draw!";
    } else if (compChoice == "paper") {
      computerScore++;
      return "You lose! Paper beats Rock!";
    } else if (compChoice == "scissors") {
      humanScore++;
      return "You win! Rock beats Scissors!";
    }
  } else if (humanChoice == "paper") {
    if (compChoice == "rock") {
      humanScore++;
      return "You win! Paper beats Rock!";
    } else if (compChoice == "paper") {
      return "It's a draw";
    } else if (compChoice == "scissors") {
      computerScore++;
      return "You lose! Scissors beats Paper!";
    }
  } else if (humanChoice == "scissors") {
    if (compChoice == "rock") {
      computerScore++;
      return "You lose! Rock beats Scissors!";
    } else if (compChoice == "paper") {
      humanScore++;
      return "You win! Scissors beats Paper!";
    } else if (compChoice == "scissors") {
      return "It's a draw!";
    }
  }
}

const playGame = function () {
  btns.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      let humanSelection = e.target.id;
      let computerSelection = getComputerChoice();

      // Round 1

      text = playRound(humanSelection, computerSelection);
      console.log(`Computer Score: ${computerScore}`);
      console.log(`Human Score: ${humanScore}`);
      createScore();
      displayOption(humanSelection, computerSelection);
      displayWinner();
    })
  );

  // Round 2\
  // humanSelection = getHumanChoice();
  // computerSelection = getComputerChoice();
  // playRound(humanSelection, computerSelection);
  // console.log(`Computer Score: ${computerScore}`);
  // console.log(`Human Score: ${humanScore}`);

  // // Round 3
  // humanSelection = getHumanChoice();
  // computerSelection = getComputerChoice();
  // playRound(humanSelection, computerSelection);
  // console.log(`Computer Score: ${computerScore}`);
  // console.log(`Human Score: ${humanScore}`);

  // // Round 4
  // humanSelection = getHumanChoice();
  // computerSelection = getComputerChoice();
  // playRound(humanSelection, computerSelection);
  // console.log(`Computer Score: ${computerScore}`);
  // console.log(`Human Score: ${humanScore}`);

  // // Round 5
  // humanSelection = getHumanChoice();
  // computerSelection = getComputerChoice();
  // playRound(humanSelection, computerSelection);
  // console.log(`Computer Score: ${computerScore}`);
  // console.log(`Human Score: ${humanScore}`);
};

function displayWinner() {
  if (humanScore == 5) {
    win_lose_text.textContent = "You win!";
  } else if (computerScore == 5) {
    win_lose_text.textContent = "You lose!";
  }
}

function displayOption(humanChoice, compChoice) {
  if (humanChoice.toLowerCase() == "rock") {
    img.src = "./images/rock.png";
  } else if (humanChoice.toLowerCase() == "paper") {
    img.src = "./images/paper.png";
  } else if (humanChoice.toLowerCase() == "scissors") {
    img.src = "./images/scissors.png";
  }

  if (compChoice.toLowerCase() == "rock") {
    img2.src = "./images/rock.png";
  } else if (compChoice.toLowerCase() == "paper") {
    img2.src = "./images/paper.png";
  } else if (compChoice.toLowerCase() == "scissors") {
    img2.src = "./images/scissors.png";
  }
}
function newGame() {}

function createScore() {
  // div.textContent = text;
  yourScoreHTML.textContent = humanScore;
  compScoreHTML.textContent = computerScore;
}

playGame();
