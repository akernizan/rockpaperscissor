var $rockButton = 'rock'
var $paperButton = 'paper'
var $scissorsButton = 'scissor'
var $resetButton = $('#reset');

var rpsArray = ['Rock', 'Paper', 'Scissors']

var userChoice;
var computerChoice;


function setComputerChoice(){
	computerChoice = Math.random();

	if(computerChoice < 0.34){
		computerChoice = 'Rock';
	}else if (computerChoice <= 0.67){
		computerChoice = 'Paper';
	}else{
		computerChoice = 'Scissors'
	}
	$('#computer-text').text(computerChoice);
}


function showResult(){
 	if(userChoice === computerChoice){
 		return $('#results-text').text('It\'s a tie!');

 	}else if(userChoice == 'Rock' && computerChoice == 'Scissors'){
 		return $('#results-text').text('You Win!!');

 	}else if(userChoice == 'Rock' && computerChoice == 'Paper'){
 		return $('#results-text').text('Computer Wins!!');

 	}else if(userChoice == 'Scissors' && computerChoice == 'Paper'){
 		return $('#results-text').text('You Win!!');

 	}else if (userChoice == 'Scissors' && computerChoice == 'Rock'){
 		return $('#results-text').text('Computer Wins!!');

 	}else if (userChoice == 'Paper' && computerChoice == 'Rock'){
 		return $('#results-text').text('You Win!!');

 	}else if(userChoice == 'Paper' && computerChoice == 'Scissors'){
 		return $('#results-text').text('Computer Wins!!');

 	}else{
 		return $('#results-text').text('ERROR');
 	}

}  

$(function(){
	$('#rock').on('click', function(){
		$('#user-text').text('Rock');
		setComputerChoice();
		showResult();
	})

	$('#scissor').on('click', function(){
		$('#user-text').text('Scissors');
		setComputerChoice();
		showResult();
	})

	$('#paper').on('click', function(){
		$('#user-text').text('Paper');
		setComputerChoice();
		showResult();
	})

	$('#reset').on('click', function(){
		$('#user-text').text('');
		$('#computer-text').text('');
		$('#results-text').text('');
	})


})