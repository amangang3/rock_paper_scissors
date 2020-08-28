let numberOfGames = 5;
let playerWins = 0;
let computerWins = 0;

function computerPlay(){
    // This function will randomly pick rock/paper/scissors
    let randomNumber = Math.floor(Math.random() * 3) //randomly pick 0, 1 or 2
    let computerChoice = "";

    // Assign a choice to the computer depending on the random value 
    switch(randomNumber){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break; 
        case 2:
            computerChoice = "scissor";
            break; 
    }
    return computerChoice;           
}

function humanPlay(playerChoice){
    //let playerChoice = prompt("Pick Rock, Paper or Scissor");
    // remove case dependency 
    playerChoice = playerChoice.toLowerCase();          
    return playerChoice;      
    //alert(playerChoice);
}

function decideWinner(playerSelection, computerSelection) {
    // comopare playerSelection to computerSelection
    switch(playerSelection){
        case computerSelection:
            alert("Samsies! Draw");
            break;

        case "rock":
            if (computerSelection == "paper"){
                alert("You lost, computer picked: " + computerSelection);
                computerWins++;
                break;
            }

            else {
                alert("You won, computer picked: " + computerSelection);
                playerWins++;            
                break; 
            }

        case "paper":
            if (computerSelection == "scissor"){
                alert("You lost, computer picked: " + computerSelection);
                computerWins++;
                break; 
            }

            else {
                alert("You won, computer picked: " + computerSelection);
                playerWins++;        
                break; 
            }

        case "scissor":
            if (computerSelection == "rock"){
                alert("You lost, computer picked: " + computerSelection);
                computerWins++;
                break;
            }

            else {
                alert("You won, computer picked: " + computerSelection);
                playerWins++;        
                break;
            }
    }
    return computerWins, playerWins;
    
}

function displayResults(playerWins, computerWins) {
    let resultTag = document.getElementById("gameDisplay");
    resultTag.innerHTML = ("You: " + playerWins + " Computer: " + computerWins);
    document.getElementById('gameDisplay').appendChild(resultTag);
}

function gameStart(playerChoice){
    playerChoice = humanPlay(playerChoice);
    computerChoice = computerPlay();
    computerWins, playerWins = decideWinner(playerChoice, computerChoice);
    displayResults(playerWins, computerWins); 
}



// Check which buttons are clicked and start the game 
document.getElementById("rockImg").addEventListener("click", function() {
    gameStart("rock"); 
});

document.getElementById("paperImg").addEventListener("click", function() {
    gameStart("paper"); 
});

document.getElementById("scissorImg").addEventListener("click", function() {
    gameStart("scissor"); 
});

