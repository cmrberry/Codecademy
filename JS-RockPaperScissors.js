//User Chooses

var userChoice = prompt("Do you choose rock, paper or scissors?");

//Computer Chooses

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice); //Print computerChoice

//Decide who wins

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "That was a tie! Let's try again!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins"; 
        } else {
            return "scissors wins";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    } else {
        return "Sorry, you need to choose either 'rock', 'paper', or 'scissors' in order to play!";
    }
};

compare(userChoice, computerChoice);
