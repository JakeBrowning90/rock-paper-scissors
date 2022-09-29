import random

def main():
    print("\nRock / Paper / Scissors!")
    play_match()
    
def play_match():
    userScore = 0
    comScore = 0
    winCount = 0
    while winCount < 5:
        # get player choice
        userPlay = get_userHand()
        # get computer choice
        comPlay = get_comHand()
        print("COM play:", comPlay)
        # compare choices
        winner = playRound(userPlay, comPlay)
        if winner == "user":
            userScore += 1
        elif winner == "COM":
            comScore += 1
        else:
            # Do not count ties
            continue
        print ("Your score: ", userScore, " COM score: ", comScore)
        winCount += 1
    if userScore > comScore:
        print("A WINNER IS YOU!")
    else:
        print("COM wins!")


def get_comHand():
    choice = random.randint(0, 2)
    hands = ["PAPER", "SCISSORS", "ROCK"] 
    play = hands[choice]
    return play

def get_userHand():
    while True:
        try:
            choice = input("Choose your hand: ")
            userHand = choice.upper()
        except ValueError:
            print("Bad input.")
            continue
        if userHand not in ["ROCK", "PAPER", "SCISSORS"]:
            print("Invalid hand.")
            continue 
        else:
            break
    return userHand

def playRound(userPlay, comPlay):
    if userPlay == comPlay:
        print("Tie")
        winner = "none"
    else:
        if userPlay == "PAPER" and comPlay == "ROCK" or userPlay == "SCISSORS" and comPlay == "PAPER" or userPlay == "ROCK" and comPlay == "SCISSORS":
            print("Your point. " + userPlay + " beats " + comPlay)
            winner = "user"
        else:
            print("COM's point. " + comPlay + " beats " + userPlay)
            winner = "COM"
    return winner        

main()