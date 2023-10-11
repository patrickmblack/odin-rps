//console.log(getWinner(getPlayerChoice(), getComputerChoice()))

let playerScore = 0
let computerScore = 0
let ties = 0


const score = document.querySelector('.score')

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

    let playerChoice = choice
    let computerChoice = getComputerChoice()
    let result = getResult(playerChoice, computerChoice)

    if (result == "player"){
        playerScore += 1
    } else if (result == "computer"){
        computerScore += 1
    } else {
        ties += 1
    }

    console.log(`Player chooses ${playerChoice}\nComputer chooses ${computerChoice}`)
    console.log(`${playerScore} - ${ties} - ${computerScore}`)
    
    score.textContent = `${playerScore} - ${ties} - ${computerScore}`

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

