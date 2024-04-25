
let humanScore = 0
let computerScore = 0

function playGame() {
    function getHumanChoice() {
        const choice = prompt('Rock, Paper or Scissors?')

        return choice
    }


    function getComputerChoice() {
        // Generating random number
        randNum = Math.floor(Math.random() * 3) + 1

        if (randNum == 1) return "Rock"
        else if (randNum == 2) return "Paper"
        else return "Scissors"
    }



    function playRound(humanChoice, compChoice) {
        humanChoice = humanChoice.toLowerCase()
        compChoice = compChoice.toLowerCase()

        if (humanChoice == 'rock') {
            if (compChoice == 'rock') {
                console.log("It's a draw!");
            } else if (compChoice == 'paper') {
                console.log("You lose! Paper beats Rock!");
                computerScore++
            } else if (compChoice == 'scissors') {
                console.log('You win! Rock beats Scissors!')
                humanScore++
            }
        } else if (humanChoice == 'paper') {
            if (compChoice == 'rock') {
                console.log("You win! Paper beats Rock!");
                humanScore++
            } else if (compChoice == 'paper') {
                console.log("It's a draw");
            } else if (compChoice == 'scissors') {
                console.log('You lose! Scissors beats Paper!')
                computerScore++
            }
        } else if (humanChoice == 'scissors') {
            if (compChoice == 'rock') {
                console.log("You lose! Rock beats Scissors!");
                computerScore++
            } else if (compChoice == 'paper') {
                console.log("You win! Scissors beats Paper!");
                humanScore++
            } else if (compChoice == 'scissors') {
                console.log("It's a draw!")
            }
        }
    }


    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);





}



playGame()
playGame()
playGame()
playGame()
playGame()