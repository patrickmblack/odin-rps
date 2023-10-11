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

    // let numOfGames = parseInt(prompt("How many games would you like to play?"))
 
    // for (let i = 0; i < numOfGames; i++){
    //     playRound()
    // }
}

function playRound(choice){


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



// function getPlayerChoice(){
//     //let playerInput = prompt("[Rock / Paper / Scissors]\n")
//     let validInput = false




//     while(!validInput){
//         switch(prompt("[Rock / Paper / Scissors]\n").slice(0, 1).toUpperCase()){
//             case "R":
//                 validInput = true
//                 return "Rock"
//             case "P":
//                 validInput = true
//                 return "Paper"
//             case "S":
//                 validInput = true
//                 return "Scissors"
//         }
//     }
// }

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

