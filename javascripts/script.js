var $rockButton = $('#rock').val();
var $paperButton = $('#paper').val();
var $scissorsButton = $('#scissor').val();
var $resetButton = $('#reset');
var $resultsText = $('#results-text');

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

var deactivateButton = function(currentButton) {
	var buttonid = "#" + currentButton;
	var buttons = ['#rock','#scissor','#paper'];
	buttons.forEach(function(button) {
		if(button != buttonid) {
			$(button).css({'visibility': 'hidden'})
		}
	})
}


function showResult(){
	if(userChoice == computerChoice ){
		$resultsText.text("It's a tie!! ")
	} else if{
		
	}

}  

$(function(){
	$('#rock').on('click', function(){
		$('#user-text').text('Rock');
		setComputerChoice();
		showResult();
		deactivateButton(this.id);
	})

	$('#scissor').on('click', function(){
		$('#user-text').text('Scissors');
		setComputerChoice();
		showResult();
		deactivateButton(this.id);
	})

	$('#paper').on('click', function(){
		$('#user-text').text('Paper');
		setComputerChoice();
		showResult();
		deactivateButton(this.id);
	})

	$('#reset').on('click', function(){
		$('#user-text').text('');
		$('#computer-text').text('');
		$('#results-text').text('');

		$('#rock').css({'visibility': 'visible'});
		$('#paper').css({'visibility': 'visible'});
		$('#scissor').css({'visibility': 'visible'});

	})


})