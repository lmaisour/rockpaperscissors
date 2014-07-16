var user_choice = null;
var choices = ["rock", "paper", "scissors"];
var computer_choice = null;
var winner = null;


function playGame(theChoice) {
	 setUserChoice(theChoice);
	 setComputerChoice();
	 showWinner();
}

function setUserChoice(theChoice) {
	user_choice = theChoice;
	resultsObject = document.getElementById('user-results');
	resultsObject.innerHTML = user_choice.toUpperCase();


}

function setComputerChoice() {
 	rand_choice = Math.floor((Math.random() * 3));
    computer_choice = choices[rand_choice];
	resultsObject = document.getElementById('computer-results');
	resultsTwo = document.getElementById('computerpicture');
	resultsObject.innerHTML = computer_choice.toUpperCase();
	resultsTwo.innerHTML = computer_choice;
	if (computer_choice === "rock") {
		resultsTwo.innerHTML = "<div class='rock'></div>";
	}
	if (computer_choice === "paper") {
		resultsTwo.innerHTML = "<div class='paper'></div>";
	}	
	if (computer_choice === "scissors") {
		resultsTwo.innerHTML = "<div class='scissors'></div>";
	}	

}

// function showComputerChoice() {
	
// 	}

function showWinner() {
	
	resultsObject = document.getElementById('winner-results');
	winners = ["rockscissors", "paperrock", "scissorspaper"];
	losers = ["scissorsrock", "rockpaper", "paperscissors"];
	gameResults = user_choice + computer_choice;
	resultsObject.innerHTML = gameResults + ";" + winners.indexOf(gameResults).toString();
	if (winners.indexOf(gameResults) >= 0) {
		winner = "HUMAN";
	} else {
		if (losers.indexOf(gameResults) >= 0) {
			winner = "COMPUTER";
		} else {
			winner = "TIE";
		};
	};
	resultsObject.innerHTML = winner;
}




