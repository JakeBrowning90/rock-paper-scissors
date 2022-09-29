console.log("Let's play Rock-Paper-Scissors!")

game()

function game() {
    let userScore = 0
    let comScore = 0
    for (i = 0; i < 5; i++) {
        console.log("Round " + (i  + 1))
        roundWinner = playRound()
        if (roundWinner = "user") {
            userScore++ 
        }
        else if (roundWinner = "com") {
            comScore++
        }
        else {
            continue
        }
    }
    if (userScore > comScore) {
        console.log("You win!")
    }
    else {
        console.log("COM wins!") 
    }
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3)
    hands = ["PAPER", "SCISSORS", "ROCK"] 
    comPlay = hands[choice]
    return comPlay
}

function getUserChoice() {
    let userPlay = prompt("Choose your hand: ")
    userPlay = userPlay.toUpperCase()
    while (userPlay != "PAPER" && userPlay != "SCISSORS" && userPlay != "ROCK") {
        userPlay = prompt("Try again: ")
        userPlay = userPlay.toUpperCase()
    }
    return userPlay  
}

function playRound(userPlay, comPlay) {
    let winner
    userPlay = getUserChoice()
    console.log("You play: " + userPlay)
    comPlay = getComputerChoice()
    console.log("COM plays: " + comPlay)
    if (userPlay == comPlay) {
        console.log("Tie")
        winner = "none"
    }
    else {
        if (userPlay == "PAPER" && comPlay == "ROCK" || userPlay == "SCISSORS" && comPlay == "PAPER" || userPlay == "ROCK" && comPlay == "SCISSORS") {
            console.log("Point to player: " + userPlay + " beats " + comPlay)
            winner = "user"
        }
        else {
            console.log("Point to COM: " + comPlay + " beats " + userPlay)
            winner = "com"
        }
    }
    return winner
}