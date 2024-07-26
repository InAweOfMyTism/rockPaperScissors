console.log("Hello World!");

function getComputerChoice(){
    let choice; //create variable to store computer's choice
    let randNum = Math.floor(Math.random()*3); //generate a random integer between 0-2
    switch(randNum){ //assign a value to the computer's choice based on radnom int
        case 0:
            choice = 'RoCk';
            break;
        case 1:
            choice = 'PapER';
            break;
        case 2:
            choice = 'ScissoRs';
            break;
    }
    return choice; // return the computer choice to the function call
}

function getHumanChoice(){
    //prompt user to enter a choice and save it in a variable
    let choice = prompt('Rock, Paper, Scissors, SHOOT!');
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    while(roundsPlayed <= 5){
        playRound();
    }
    displayWinner();

    //declare play round functions
    function playRound(){
        let human = getHumanChoice().toUpperCase(); //ensure the human choice is case insensitive
        let computer = getComputerChoice().toUpperCase(); //do the same for computer choice
        switch(human){ //evaluate conditions based on the human input
            case 'GUN':
                humanWinsRound(human, computer);
                break;
            case 'ROCK':
                switch(computer){
                    case 'ROCK':
                        //tie. do not increment round
                        tiedRound(human, computer);
                        break;
                    case 'PAPER':
                        //computer Wins! Paper beats Rock
                        computerWinsRound(human, computer);
                        break;
                    case 'SCISSORS':
                        //human wins! Rock beats Scissors
                        humanWinsRound(human, computer);
                        break;
                    default: 
                        //incorrect selection
                        console.log('Incorrect selection');
                        incorrectSelection(human);
                }
                break;
            case 'PAPER':
                switch(computer){
                    // loses to scissors
                    // beats rock
                }
                break;
            case 'SCISSORS':
                switch(computer){
                    // loses to rock
                    //beats paper
                }
                break;
            default:
                incorrectSelection(human);
                break;
            
        }
        //declare typo fixer 
        function incorrectSelection(humanInput){
            //code to run if human inputs something else
                //if human entered r, ask if they meant rock
                //repeat for P and S
                //else prompt to reenter choice
            if(humanInput.at(0) === 'R'){
                human = prompt('Did you mean rock?', 'ROCK');
            } else if(humanInput.at(0) === 'P'){
                human = prompt('Did you mean paper?', 'PAPER');
            } else if(humanInput.at(0) === 'S'){
                human = prompt('Did you mean scissors?', 'SCISSORS');
            } else {
                human = getHumanChoice().toUpperCase();
            }

        }
    }
    //declare helper functions
    function tiedRound(humanChoice, computerChoice){
        //code to run if round is tied
            //display message
            console.log(`Tie between ${humanChoice} and ${computerChoice}`);
            //DO NOT increment rounds played
            //do not add to any scores
    }
    function humanWinsRound(humanChoice, computerChoice){
        //code to run if human wins
        console.log(`Human Wins! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        roundsPlayed++;
    
    }
    function computerWinsRound(humanChoice, computerChoice){
        //code to run if computer wins
            //display message
        console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`);
            //increment rounds played
        roundsPlayed++;
        computerScore++;
            //increment score
    }
    
}

function displayWinner(){

}
