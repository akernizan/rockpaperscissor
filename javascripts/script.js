var $rockButton = $('#rock').text();
var $paperButton = $('#paper').text();
var $scissorsButton = $('#scissor').text();
var $resetButton = $('#reset');
var $resultsText = $('#results-text');

// var rpsArray = ['Rock', 'Paper', 'Scissors']

var userChoice, computerChoice;

function setComputerChoice() {
    var rand = Math.random();
    if (rand < 0.34) {
        computerChoice = 'Rock';
    } else {
        if (rand <= 0.67) {
          computerChoice = 'Paper';
        } else {
        computerChoice = 'Scissors';
        }
    }
    $('#computer-text').text(computerChoice);
};

var deactivateButton = function (currentButton) {
    var buttonid = "#" + currentButton;
    var buttons = ['#rock', '#scissor', '#paper'];
    buttons.forEach(function (button) {
        if (button != buttonid) {
            $(button).css({
                'visibility': 'hidden'
            })
        };
    });
};


function showResult(id) {
    console.log(id, computerChoice)
    userChoice = id.toUpperCase();
    if (userChoice == computerChoice) {
        $('#results-text').text('Tie');
    };

    if (new RegExp(id, "i").test("Paper")) {
        if (computerChoice == 'Paper') {
            $('#results-text').text('Paper Wins!!');
        } else {
          if (computerChoice == 'Scissors') {
            $('#results-text').text('Rock Wins!!');
        }
        };
    };

    if (new RegExp(id, "i").test('Scissors')) {
        if (computerChoice == 'Rock') {
            $('#results-text').text('Rock Wins!!');
        } else {
            if (computerChoice == 'Paper') {
                $('#results-text').text('Scissors Wins!!');
            }
        }
    }

} //end of function

$(function () {
    $('#rock').on('click', function () {
        $('#user-text').text('Rock');
        deactivateButton(this.id);
        setComputerChoice();
        showResult(this.id);
    })

    $('#scissor').on('click', function () {
        $('#user-text').text('Scissors');
        deactivateButton(this.id);
        setComputerChoice();
        showResult(this.id);
    })

    $('#paper').on('click', function () {
        $('#user-text').text('Paper');
        deactivateButton(this.id);
        setComputerChoice();
        showResult(this.id);
    })

    $('#reset').on('click', function () {
        $('#user-text').text('');
        $('#computer-text').text('');
        $('#results-text').text('');

        $('#rock').css({
            'visibility': 'visible'
        });
        $('#paper').css({
            'visibility': 'visible'
        });
        $('#scissor').css({
            'visibility': 'visible'
        });

    })
});