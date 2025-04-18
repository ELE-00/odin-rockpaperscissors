

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

//Play one round
//Rules: Rock beats scissors, scissors beat paper, and paper beats rock.
// Create function for the round taking in human and computer selections.
//Loop through the selections deteriming the winner
//Update the score for human or computer.  

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
        }else if (humanChoice == computerChoice){
            text = "Tie. Play next round!";      

        } else {text = "Someting Sent Wrong";
        }
        return text;
    }
    

//UI SECTION

//Select the div container    
const resultscontainer = document.querySelector("#container");

// Create div to display result and scores
const resultDisplay = document.createElement("div");
const currentHumanScore = document.createElement("div");
const currentComputerScore = document.createElement("div");
const endgametext = document.createElement("h1");

// Appending result and scores to container
resultscontainer.appendChild(resultDisplay);
resultscontainer.appendChild(currentHumanScore);
resultscontainer.appendChild(currentComputerScore);
resultscontainer.appendChild(endgametext);


//BUTTONS

//Select "Paper" button

const buttons = document.querySelectorAll(".btn");
//Run playRound on button click
    buttons.forEach(button => {
        button.addEventListener("click", () => { 
            const choice = button.dataset.choice; // get "rock", "paper", or "scissors"
            let roundResult = playRound(choice, getComputerChoice())

            if (humanScore == 5){
                endgametext.textContent =  "Computer WIN! Better luck next time!";
                resultDisplay.textContent = " "
                currentHumanScore.textContent = " "
                currentComputerScore.textContent = " "
                humanScore = 0;
                computerScore = 0;
            }else if (computerScore == 5){
                endgametext.textContent = "You WIN!";
                resultDisplay.textContent = " "
                currentHumanScore.textContent = " "
                currentComputerScore.textContent = " "
                humanScore = 0;
                computerScore = 0;
            }else {
                resultDisplay.textContent = "Result: " + roundResult;
                currentHumanScore.textContent = "Human score: " + humanScore;
                currentComputerScore.textContent = "Computer score: " + computerScore;
            };
        });
    });
 

}
console.log(playGame());


