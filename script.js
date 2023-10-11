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

    if (result === 0){
        ties += 1
    } else if (result === 1){
        playerScore += 1
    } else {
        computerScore += 1
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

    // Return 0 if tie
    // Return 1 if player wins
    // Return 2 if computer wins

    if (player === computer){
        return 0
    }

    if (player === "Rock"){
        switch(computer){
            case "Paper":
                return 2
            case "Scissors":
                return 1
        }
    } else if (player === "Paper"){
        switch(computer){
            case "Rock":
                return 1
            case "Scissors":
                return 2
        }
    }else{
        switch(computer){
            case "Rock":
                return 2
            case "Paper":
                return 1
        }
    }
}

