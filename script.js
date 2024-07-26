console.log("Hello World!");



let computerInput = getComputerChoice();
let humanInput = getHumanChoice();

playRound(humanInput, computerInput);

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


function playRound(humanChoice, computerChoice){
    let human = humanChoice.toUpperCase(); //ensure the human choice is case insensitive
    let computer = computerChoice.toUpperCase(); //do the same for computer choice
    switch(human){ //evaluate conditions based on the human input
        case 'ROCK':
            switch(computer){
                case 'ROCK':
                    //tie
                    console.log('Tie!');
                    break;
                case 'PAPER':
                    //computer Wins! Paper beats Rock
                    console.log('Computer Wins! Paper beats Rock.');
                    break;
                case 'SCISSORS':
                    //human wins! Rock beats Scissors
                    console.log('Human Wins! Rock beats Scissors')
                    break;
                default: 
                    //incorrect selection
                    console.log('Incorrect selection');
            }
            break;
        case 'PAPER':
            switch(computer){
                case 'ROCK':
                    //tie
                    console.log('Tie!');
                    break;
                case 'PAPER':
                    //computer Wins! Paper beats Rock
                    console.log('Computer Wins! Paper beats Rock.');
                    break;
                case 'SCISSORS':
                    //human wins! Rock beats Scissors
                    console.log('Human Wins! Rock beats Scissors')
                    break;
                default: 
                    //incorrect selection
                    console.log('Incorrect selection');
            }
            break;
        case 'SCISSORS':
            switch(computer){
                case 'ROCK':
                    //tie
                    console.log('Tie!');
                    break;
                case 'PAPER':
                    //computer Wins! Paper beats Rock
                    console.log('Computer Wins! Paper beats Rock.');
                    break;
                case 'SCISSORS':
                    //human wins! Rock beats Scissors
                    console.log('Human Wins! Rock beats Scissors')
                    break;
                default: 
                    //incorrect selection
                    console.log('Incorrect selection');
            }
            break;
        
    }
}

function tiedRound(humanChoice, computerChoice){
    //code to run if round is tied
}

function humanWinsRound(humanChoice, computerChoice){
    //code to run if human wins
}

function computerWinsRound(humanChoice, computerChoice){
    //code to run if computer wins
}

function incorrectSelection(){
    //code to run if human inputs something else
}
