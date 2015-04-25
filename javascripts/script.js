var $rockButton = $('#rock');
var $paperButton = $('#paper');
var $scissorsButton = $('#scissor');
var $resetButton = $('#reset');

var rpsArray = ['Rock', 'Paper', 'Scissor']

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
 		$('#results-text').text('It\'s a tie!');
 	}else if(userChoice === 'Rock' && computerChoice === 'Scissors'){
 		$('#results-text').text('You Win!!');
 	}else if(userChoice === 'Rock' && computerChoice === 'Paper'){
 		$('#results-text').text('Computer Wins!!');
 	}else if(userChoice === 'Scissors' && computerChoice === 'Paper'){
 		$('#results-text').text('You Win!!');
 	}else if (userChoice === 'Scissors' && computerChoice === 'Rock'){
 		$('#results-text').text('Computer Wins!!');
 	}else if (userChoice === 'Paper' && computerChoice === 'Rock'){
 		$('#results-text').text('You Win!!');
 	}else if(userChoice === 'Paper' && computerChoice === 'Scissors'){
 		$('#results-text').text('Computer Wins!!');
 	}
}  



$(function(){
	$('#rock').on('click', function(){
		$('#user-text').text(rpsArray[0]);
		setComputerChoice();
		keepFighting();
	})

	$('#scissor').on('click', function(){
		$('#user-text').text(rpsArray[2]);
		setComputerChoice();
		keepFighting();
	})

	$('#paper').on('click', function(){
		$('#user-text').text(rpsArray[1]);
		setComputerChoice();
		keepFighting();
	})

	$('#reset').on('click', function(){
		$('#user-text').text('');
		$('#computer-text').text('');
		$('#results-text').text('');
	})


})