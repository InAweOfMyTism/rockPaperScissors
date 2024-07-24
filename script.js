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
    console.log('Rock, Paper Scissors, SHOOT!'); //prompt user to enter a choice
}

function playRound(humanChoice, computerChoice){
    let human = humanChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();
    switch(human)
}

