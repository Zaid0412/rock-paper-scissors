
function getHumanChoice() {
    const choice = prompt('Rock, Paper or Scissors?')

    return choice
}

getHumanChoice()


function getComputerChoice() {
    // Generating random number
    randNum = Math.floor(Math.random() * 3) + 1

    if (randNum == 1) return "Rock"
    else if (randNum == 2) return "Paper"
    else return "Scissors"
}


console.log(getComputerChoice())