//console.log(getWinner(getPlayerChoice(), getComputerChoice()))

let playerScore = 0
let computerScore = 0
let ties = 0


const score = document.querySelector('.score')
const historyList = document.querySelector('.history')

game()

function game(){
    


    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //console.log(button.id) 
            playRound(button.id);
        })
    })
}

function playRound(choice){

    let resultText = ''

    let playerChoice = choice
    let computerChoice = getComputerChoice()
    let result = getResult(playerChoice, computerChoice)
    console.log(`Player chooses ${playerChoice}\nComputer chooses ${computerChoice}`)

    if (result == "player"){
        console.log("Player wins")
        resultText = "Player wins"
        playerScore += 1
    } else if (result == "computer"){
        console.log("Computer wins")
        resultText = "Computer wins"
        computerScore += 1
    } else {
        console.log("Tie")
        resultText = "Tie"
        ties += 1
    }

    console.log(`${playerScore} - ${ties} - ${computerScore}`)
    score.textContent = `${playerScore} - ${ties} - ${computerScore}`

    const listItem = document.createElement('li')
    const listText = document.createElement('span')

    listItem.appendChild(listText)
    listText.textContent = `${playerChoice} vs ${computerChoice}: ${resultText}`
    historyList.appendChild(listItem)


}

function getComputerChoice(){

    switch (Math.floor(Math.random() * 3)){
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function getResult(player, computer){

    // Return 0 if tie
    // Return 1 if player wins
    // Return 2 if computer wins
    if (player === computer){
        return "tie"
    }

    if (player === "Rock"){
        switch(computer){
            case "Paper":
                return "computer"
            case "Scissors":
                return "player"
        }
    } else if (player === "Paper"){
        switch(computer){
            case "Rock":
                return "player"
            case "Scissors":
                return "computer"
        }
    }else{
        switch(computer){
            case "Rock":
                return "computer"
            case "Paper":
                return "player"
        }
    }
}

