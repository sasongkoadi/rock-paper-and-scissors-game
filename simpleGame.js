var userChoice = prompt("Do you choose rock, paper or scissors?");
console.log("Player: "+ userChoice);

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);



var compare = function (userChoice,computerChoice){
    // rock vs scissors = rock wins
    // rock vs paper = paper wins

    // scissors vs paper = scissors wins
    // scissors vs rock = rock wins

    // paper vs rock = paper wins
    // paper vs scissors = scissors wins


    if (userChoice === computerChoice){

        return "The result is a tie!";

    }else if (userChoice === "rock"){
        if (computerChoice === "scissors"){
            return "rock wins";
        }else{
            return "paper wins";
        }
    }else if (userChoice === "scissors"){
        if (computerChoice === "paper"){
            return "scissors wins";
        }else {
            return "rock win";
        }

    }else if (userChoice === "paper"){
        if (computerChoice === "rock"){
            return "paper wins";
        }else{
            return "scissors win";
        }
    }

};

compare(userChoice,computerChoice);
