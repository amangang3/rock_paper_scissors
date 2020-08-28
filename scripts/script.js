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

function game(playerChoice){
    playerChoice = humanPlay(playerChoice);
    computerChoice = computerPlay();
    computerWins, playerWins = decideWinner(playerChoice, computerChoice);
    alert(("You: " + playerWins + " Computer: " + computerWins));
}

document.getElementById("rock").addEventListener("click", function() {
    game("rock"); 
});

document.getElementById("paper").addEventListener("click", function() {
    game("paper"); 
});

document.getElementById("scissor").addEventListener("click", function() {
    game("scissor"); 
});
