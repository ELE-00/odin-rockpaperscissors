//Randomly generate rock, paper or scissors for the computer
function getHumanChoice(){
    let humanResult = prompt("User choice", "").toLowerCase();
    return humanResult;
}

// Randomly generate rock, paper or scissors for the User
    //Declare variables for computer choice

    function getComputerChoice(){
        let computerResult;
        if (Math.floor(Math.random() * 3) == 0){
            computerResult = "rock";
        } else if (Math.floor(Math.random() * 3) == 1){
            computerResult = "paper";
        } else {computerResult = "scissors";
        }
        return computerResult;
    }

function playGame(){

// Score variables
let humanScore = 0;
let computerScore = 0;

//Play round
//Rules: Rock beats scissors, scissors beat paper, and paper beats rock.
// Create function for the round taking in human and computer selections.
//Loop through the selections deteriming the winner
//Console output the winner
//Update the score for human or computer   

    function playRound(humanChoice, computerChoice){
        let text;

        // Human Wins
        if (humanChoice == "paper" & computerChoice == "rock"){
            text = "You win! Paper beats Rock";
            humanScore = humanScore + 1;
        }else if (humanChoice == "rock" & computerChoice == "scissors"){
            text = "You win! Rock beats Scissors";
            humanScore = humanScore + 1;
        }else if (humanChoice == "scissors" & computerChoice == "paper"){
            text = "You win! Scissors beats Paper"; 
            humanScore = humanScore + 1;

        // Human Loses
        }else if (humanChoice == "rock" & computerChoice == "paper"){
            text = "You lose! Paper beats Rock";
            computerScore = computerScore + 1;
        }else if (humanChoice == "paper" & computerChoice == "scissors"){
            text = "You lose! Scissors beats Paper";
            computerScore = computerScore + 1;
        }else if (humanChoice == "scissors" & computerChoice == "rock"){
            text = "You lose! Rock beats Scissors";
            computerScore = computerScore + 1;

        //Tie
        }else if (humanChoice == "paper" & computerChoice == "paper"){
            text = "Tie. Play next round!";      
        }else if (humanChoice == "rock" & computerChoice == "rock"){
            text = "Tie. Play next round!";      
        }else if (humanChoice == "scissors" & computerChoice == "scissors"){
            text = "Tie. Play next round!";      
        } else {text = "Someting Sent Wrong";
        }
        return text;
    }
    
// Initiate a new game 4 more times  
    //Round 1:
    console.log("Round 1")
    const R1computerSelection = getComputerChoice();
    const R1humanSelection = getHumanChoice();
    console.log("You:", R1humanSelection);
    console.log("Computer:", R1computerSelection);
    console.log(playRound(R1humanSelection, R1computerSelection));
    console.log("Your Score:", humanScore, "Computer Score:", computerScore)


    //Round 2:
    console.log("Round 2")
    const R2computerSelection = getComputerChoice();
    const R2humanSelection = getHumanChoice();
    console.log("You:", R2humanSelection);
    console.log("Computer:", R2computerSelection);
    console.log(playRound(R2humanSelection, R2computerSelection));
    console.log("Your Score:", humanScore, "Computer Score:", computerScore)

    //Round 3:
    console.log("Round 3")
    const R3computerSelection = getComputerChoice();
    const R3humanSelection = getHumanChoice();
    console.log("You:", R3humanSelection);
    console.log("Computer:", R3computerSelection);
    console.log(playRound(R3humanSelection, R3computerSelection));
    console.log("Your Score:", humanScore, "Computer Score:", computerScore)

    //Round 4:
    console.log("Round 4")
    const R4computerSelection = getComputerChoice();
    const R4humanSelection = getHumanChoice();
    console.log("You:", R4humanSelection);
    console.log("Computer:", R4computerSelection);
    console.log(playRound(R4humanSelection, R4computerSelection));
    console.log("Your Score:", humanScore, "Computer Score:", computerScore)

    //Round 5:
    console.log("Round 5")
    const R5computerSelection = getComputerChoice();
    const R5humanSelection = getHumanChoice();
    console.log("You:", R4humanSelection);
    console.log("Computer:", R5computerSelection);
    console.log(playRound(R5humanSelection, R5computerSelection));
    console.log("Your Score:", humanScore, "Computer Score:", computerScore)

    //End game output:
    let endgametext;
    if (humanScore > computerScore){
        endgametext = "WOOHOO! YOU WON!";
    }else if(humanScore < computerScore){
        endgametext = "OOPSIE! YOU LOST";
    }else {
        endgametext= "IT'S A TIE!"
    }
    return endgametext;
}

console.log(playGame());


