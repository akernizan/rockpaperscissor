var $rockButton = $('#rock').text();
var $paperButton = $('#paper').text();
var $scissorsButton = $('#scissor').text();
var $resetButton = $('#reset');
var $resultsText = $('#results-text');

// var rpsArray = ['Rock', 'Paper', 'Scissors']

var userChoice = 'Rock' || 'Paper' || 'Scissors';
var computerChoice = 'Rock' || 'Paper' || 'Scissors';


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
            $(button).css({'visibility': 'hidden'})
        };
    });
};


function showResult(){
    console.log(userChoice, computerChoice);
    if ( userChoice == computerChoice){
        $('#results-text').text('Tie');
    }
    else if (userChoice == 'Rock') {

        if (computerChoice == 'Paper') {
            $('#results-text').text('Paper Wins!!');
        } 
        else if(computerChoice == 'Scissors') {
            $('#results-text').text('Rock Wins!!');
            
        }
    }
    else if(userChoice == 'Scissors'){

        if(computerChoice == 'Rock'){
            $('#results-text').text('Rock Wins!!');
        }
        else if(computerChoice == 'Paper'){
            $('#results-text').text('Scissors Wins!!');
        }
    }     
    else if(userChoice == 'Paper'){

        if(computerChoice == 'Rock'){
            $('#results-text').text('Paper Wins!!');
        }
        else if(computerChoice == 'Scissors'){
            $('#results-text').text('Scissors Wins!!');
        }
    }  
}//end of function
$(function(){
    $('#rock').on('click', function(){
        $('#user-text').text('Rock');
        userChoice = 'Rock';
        deactivateButton(this.id);
        setComputerChoice();
        showResult();
    })

    $('#scissor').on('click', function(){
        $('#user-text').text('Scissors');
        userChoice = 'Scissors';
        deactivateButton(this.id);
        setComputerChoice();
        showResult();
    })

    $('#paper').on('click', function(){
        $('#user-text').text('Paper');
        userChoice = 'Paper';
        deactivateButton(this.id);
        setComputerChoice();
        showResult();
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