//console.log(getWinner(getPlayerChoice(), getComputerChoice()))
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

    const score = document.querySelector('.score')
    score.textContent = '0'

    let playerChoice = choice
    let computerChoice = getComputerChoice()
    let winner = getWinner(playerChoice, computerChoice)

    console.log(`Player chooses ${playerChoice}\nComputer chooses ${computerChoice}\n${winner}`)


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

function getWinner(player, computer){
    if (player === computer){
        return "Tie!"
    }

    if (player === "Rock"){
        switch(computer){
            case "Paper":
                return "Computer wins!"
            case "Scissors":
                return "Player wins!"
        }
    } else if (player === "Paper"){
        switch(computer){
            case "Rock":
                return "Player wins!"
            case "Scissors":
                return "Computer wins!"
        }
    }else{
        switch(computer){
            case "Rock":
                return "Computer wins!"
            case "Paper":
                return "Player wins!"
        }
    }
}

