




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
            text = "You  lose! Paper beats Rock";
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
    
    // Get human and computer selection
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    
    //Output round results to console
    console.log("You:", humanSelection);
    console.log("Computer:", computerSelection);
    console.log(playRound(humanSelection, computerSelection));
    console.log("Your Score:", humanScore, "Computer Score:", computerScore)



// Initiate a new game 4 more times
// Output game winner based on no of wins after 5 rounds
    //Sum results of human and computer
    //if loop that determines the winne

