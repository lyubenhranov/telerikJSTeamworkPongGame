var gameSettings={
	gameSpeed:5,
    scoreNotDrawed:true,
    playerOneName:'Player 1',
    playerTwoName:'Player 2'
} 


function initializeSettings() {
    if (gameSettings.scoreNotDrawed) {
        drawInitialScoreBoard();
    }    
}

//Game Menu
var isMenuShown = true;

function applySettings() {
    getFieldSettings();
    getBallSettings();
    getPlayerOneSettings();
    getPlayerTwoSettings();
}

function updateMenuVisibility() {
    $('#settings-btn').click(function () {
        if (isMenuShown === true) {
            $('div#settings').fadeOut(1000);
            isMenuShown = false;
        }
        else {
            $('div#settings').fadeIn(1000);
            isMenuShown = true;
        }
    });
}

function getFieldSettings() {
    var res,
        fieldWidth = parseInt($('#resolution').val().split('x')[0]),
        fieldHeight = parseInt($('#resolution').val().split('x')[1]),
        fieldColor = '#fff',
        backgroundColor = '#fff';

    $('#resolution').change(function () {
        res = $('#resolution').val();
        fieldWidth = parseInt(res.split('x')[0]);
        fieldHeight = parseInt(res.split('x')[1]);
        $('#field').width(fieldWidth).height(fieldHeight);
    });
    $('#field-color').change(function () {
        fieldColor = $('#field-color').val();
        $('#gameFieldCanvas').css('background', fieldColor);
    });
    $('#background-color').change(function () {
        backgroundColor = $('#background-color').val();
        $('body').css('background', backgroundColor);
    });

    return {
        fieldWidth: fieldWidth,
        fieldHeight: fieldHeight,
        fieldColor: fieldColor,
        backgroundColor: backgroundColor
    };
}

function getBallSettings() {
    var radius = parseInt($('#ball-radius').val()),
        ballFillColor = '#000',
        ballStrokeColor = '#000',
        ballSpeed = parseInt($('#ball-speed').val());

    $('#ball-radius').click(function () {
        radius = parseInt($('#ball-radius').val());
    });
    $('#ball-fill-color').change(function () {
        ballFillColor = $('#ball-fill-color').val();

    });
    $('#ball-stroke-color').change(function () {
        ballStrokeColor = $('#ball-stroke-color').val();
    });
    $('#ball-speed').change(function () {
        ballSpeed = parseInt($('#ball-speed').val());
    });

    return {
        ballRadius: radius,
        ballFillColor: ballFillColor,
        ballStrokeColor: ballStrokeColor,
        ballSpeed: ballSpeed
    }
}

function getPlayerOneSettings() {
    var racketSize = parseInt($('#p1-racket-size').val()),
        racketColor = '#000',
        nickname = 'Player 2';

    $('#p1-racket-size').change(function () {
        racketSize = parseInt($('#p1-racket-size').val());
    });
    $('p1-racket-color').change(function () {
        racketColor = $('p1-racket-color').val();
    });
    $('p1-nickname').change(function () {
        nickname = $('p1-nickname').val();
    });

    return{
        racketSize: racketSize,
        racketColor: racketColor,
        nickname: nickname
    }
}

function getPlayerTwoSettings() {
    var racketSize = parseInt($('#p2-racket-size').val()),
        racketColor = '#000',
        nickname = 'Player 2';

    $('#p2-racket-size').change(function () {
        racketSize = parseInt($('#p2-racket-size').val());
    });
    $('p2-racket-color').change(function () {
        racketColor = $('p2-racket-color').val();
    });
    $('p2-nickname').change(function () {
        nickname = $('p2-nickname').val();
    });

    return{
        racketSize: racketSize,
        racketColor: racketColor,
        nickname: nickname
    }
}
