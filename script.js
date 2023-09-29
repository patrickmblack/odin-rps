console.log(getPlayerChoice())
console.log(getComputerChoice())




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

function getPlayerChoice(){
    //let playerInput = prompt("[Rock / Paper / Scissors]\n")
    let validInput = false

    while(!validInput){
        switch(prompt("[Rock / Paper / Scissors]\n").slice(0, 1).toUpperCase()){
            case "R":
                validInput = true
                return "Rock"
            case "P":
                validInput = true
                return "Paper"
            case "S":
                validInput = true
                return "Scissors"
        }
    }
}

function getWinner(computer, player){
    
}
// for (let i = 0; i < 10; i++){
//     console.log(getComputerChoice())
// }