//console.log(getWinner(getPlayerChoice(), getComputerChoice()))

let playerScore = 0
let computerScore = 0
let ties = 0

let roundNumber = 0
let gameActive = true


const score = document.querySelector('.score')
const historyList = document.querySelector('.history')

game()

function game(){
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(gameActive == true){
                playRound(button.id)
            }
        })
    })
}

function playRound(choice){

    roundNumber += 1

    let resultText = ''
    let winnerText = ''

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



    if (playerScore == 5){
        gameActive = false
        winnerText = 'Player wins the game!'
    } else if (computerScore == 5){
        gameActive = false
        winnerText = 'Computer wins the game!'
    } else if (ties == 5){
        gameActive = false
        winnerText = 'Tie! No one wins.'
    }    
    
    listItem.appendChild(listText)
    listText.textContent = `Round ${roundNumber}: ${playerChoice} vs ${computerChoice}: ${resultText}`
    

    if (gameActive == false){
        listText.textContent = `Game over! ${winnerText}`
    } else {
        listText.textContent = `Round ${roundNumber}: ${playerChoice} vs ${computerChoice}: ${resultText}`
    }


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

