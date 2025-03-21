

// Randomly generate rock, paper or scissors for the User
    //Declare variables for computer choice

function getComputerChoice(){
    let computerResult;
    if (Math.floor(Math.random() * 3) == 0){
        computerResult = "Rock";
    } else if (Math.floor(Math.random() * 3) == 1){
        computerResult = "Paper";
    } else {computerResult = "Scissors";
    }
    return computerResult;
}
console.log(getComputerChoice()); 


//Randomly generate rock, paper or scissors for the computer
function getHumanChoice(){
    let humanResult = prompt("User choice", "");
    return humanResult;
}


//Play round
//Rules: Rock beats scissors, scissors beat paper, and paper beats rock.
// Create function for the round taking in human and computer selections.
    //Loop through the selections deteriming the winner
    //Console output the winner
    //Update the score for human or computer

// Initiate a new game 4 more times
// Output game winner based on no of wins after 5 rounds
    //Sum results of human and computer
    //if loop that determines the winne

