var $rockButton = $('#rock').text();
var $paperButton = $('#paper').text();
var $scissorsButton = $('#scissor').text();
var $resetButton = $('#reset');
var $resultsText = $('#results-text');
var score = 0;
var computerScore = 0;

// var rpsArray = ['Rock', 'Paper', 'Scissors']

var userChoice;
var computerChoice;


function setComputerChoice(){
    computerChoice = Math.random();

    if(computerChoice < 0.34){
        computerChoice = 'Rock';
    }else if (computerChoice <= 0.67){
        computerChoice = 'Paper';
    }else{
        computerChoice = 'Scissors';
    }
    $('#computer-text').text(computerChoice);
};

var deactivateButton = function(currentButton) {
    var buttonid = "#" + currentButton;
    var buttons = ['#rock','#scissor','#paper'];
    buttons.forEach(function(button) {
        if(button != buttonid) {
            $(button).css({'visibility': 'hidden'});
            $(button).removeClass('selected');
        }else{
        	 $(button).addClass('selected');
        	 $(buttonid).css({'visibility': 'hidden'});
        }
    });
};


function showResult(){
    console.log(userChoice, computerChoice);
    if ( userChoice == computerChoice){
        $('#results-text').text('Tie!! No points...');
    }
    else if (userChoice == 'Rock') {

        if (computerChoice == 'Paper') {
            $('#results-text').text('Paper Wins!!');
             computerScore += 2
            $('#computer-score').text('Computer Score: ' + computerScore);
        } 
        else if(computerChoice == 'Scissors') {
            $('#results-text').text('Rock Wins!!');
            score += 2
            $('#user-score').text('Player Score: ' + score);
        }
    }
    else if(userChoice == 'Scissors'){

        if(computerChoice == 'Rock'){
            $('#results-text').text('Rock Wins!!');
             computerScore += 2
            $('#computer-score').text('Computer Score: ' + computerScore);
        }
        else if(computerChoice == 'Paper'){
            $('#results-text').text('Scissors Wins!!');
             score += 2
            $('#user-score').text('Player Score: ' + score);
        }
    }     
    else if(userChoice == 'Paper'){

        if(computerChoice == 'Rock'){
            $('#results-text').text('Paper Wins!!');
             score += 2
            $('#user-score').text('Player Score: ' + score);
        }
        else if(computerChoice == 'Scissors'){
            $('#results-text').text('Scissors Wins!!');
             computerScore += 2
            $('#computer-score').text('Computer Score: ' + computerScore);
        }
    }  
}//end of function

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return $('#reset').css({'border-color':color});
}

function hideButton(currentButton){
	 var buttonid = "#" + currentButton;
		var buttons = ['#rock','#scissor','#paper'];
		buttons.forEach(function(button){
			$(button).css({'visibility': 'hidden'});
	});
}

function winner(currentButton){
	if(score === 10){
		alert('User Wins!!');
		$('#user-score').text('Player Score: 0');
		$('#computer-score').text('Computer Score: 0');
		score = 0;
		hideButton();
        $('#reset').text('Play Again');
	}else if(computerScore === 10){
		alert('Computer Wins!!' );
		$('#user-score').text('Player Score: 0');
		$('#computer-score').text('Computer Score: 0');
		computerScore = 0;
		hideButton();
        $('#reset').text('Play Again');
	}

}

$(function(){
	$('#rock').on('click', function(){
	    $('#user-text').text('Rock');
	    userChoice = 'Rock';
	    deactivateButton(this.id);
	    setComputerChoice();
	    showResult();
	    winner();

	})

	$('#scissor').on('click', function(){
	    $('#user-text').text('Scissors');
	    userChoice = 'Scissors';
	    deactivateButton(this.id);
	    setComputerChoice();
	    showResult();
	    winner();
	})

	$('#paper').on('click', function(){
	    $('#user-text').text('Paper');
	    userChoice = 'Paper';
	    deactivateButton(this.id);
	    setComputerChoice();
	    showResult();
	    winner();
	})

	$('#reset').on('click', function(currentButton){
	    $('#user-text').text('');
	    $('#computer-text').text('');
	    $('#results-text').text('');
        $('#reset').text('AGAIN');

	    var buttonid = "#" + currentButton;
			var buttons = ['#rock','#scissor','#paper'];
			buttons.forEach(function(button) {
	    if(button != buttonid) {
	        $(button).css({'visibility': 'visible'});
	        $(button).removeClass('selected');
	    }
		});
	})
})