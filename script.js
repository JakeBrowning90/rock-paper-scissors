let winner, userPlay, comPlay;
let userScore = 0; 
let comScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        winner = playRound(button.value);
        document.getElementById("banner").textContent = "";
        if (winner == "user") {
            userScore++;
        }
        else if (winner == "com") {
            comScore++;
        }
        document.getElementById("feedScore").textContent = `Your score: ${userScore} / 5 | COM score: ${comScore} / 5`;
        if (userScore > 4) {
            document.getElementById("banner").textContent = "You win!";
            resetGame()
            return;
        }
        else if (comScore > 4) {
            document.getElementById("banner").textContent = "COM wins!";
            resetGame()
            return;
        }
    });
});

function playRound(buttonChoice) {
    userPlay = buttonChoice;
    let winner;
    document.getElementById("feedPlayer").textContent = `You play: ${userPlay}`;
    comPlay = getComputerChoice()
    document.getElementById("feedCom").textContent = `COM plays: ${comPlay}`;
    if (userPlay == comPlay) {
        document.getElementById("feedResult").textContent = "Tied, do-over!";
        winner = "none";
    }
    else if (userPlay == "PAPER" && comPlay == "ROCK" || userPlay == "SCISSORS" && comPlay == "PAPER" || userPlay == "ROCK" && comPlay == "SCISSORS") {
        document.getElementById("feedResult").textContent = `Point to Player: ${userPlay} beats ${comPlay}`;
        winner = "user";
    }
    else {
        document.getElementById("feedResult").textContent = `Point to COM: ${comPlay} beats ${userPlay}`;
        winner = "com";
    }
    return winner;
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3)
    hands = ["PAPER", "SCISSORS", "ROCK"] 
    comPlay = hands[choice]
    return comPlay
}

function resetGame() {
    userScore = 0; 
    comScore = 0;
}