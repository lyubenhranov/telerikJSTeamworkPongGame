//Game Menu
var isMenuShown = true,
    res,
    fieldWidth = parseInt($('#resolution').val().split('x')[0]),
    fieldHeight = parseInt($('#resolution').val().split('x')[1]),
    fieldColor = '#fff',
    backgroundColor = '#fff',
    radius = parseInt($('#ball-radius').val()),
    ballFillColor = '#000',
    ballStrokeColor = '#000',
    ballSpeed = parseInt($('#ball-speed').val()),
    p1RacketSize = parseInt($('#p1-racket-size').val()),
    p1RacketColor = '#000',
    p1Nickname = 'Player 1',
    p2RacketSize = parseInt($('#p2-racket-size').val()),
    p2RacketColor = '#000',
    p2Nickname = 'Player 2',
    gameSettings = {
        gameSpeed: 5,
        scoreNotDrawed: true,
        playerOneName: 'Player 1',
        playerTwoName: 'Player 2',
        fieldWidth: fieldWidth,
        fieldHeight: fieldHeight,
        fieldColor: fieldColor,
        backgroundColor: backgroundColor,
        ballRadius: radius,
        ballFillColor: ballFillColor,
        ballStrokeColor: ballStrokeColor,
        ballSpeed: ballSpeed,
        p1RacketSize: p1RacketSize,
        p1RacketColor: p1RacketColor,
        p1Nickname: p1Nickname
    };

function initializeSettings() {
    if (gameSettings.scoreNotDrawed) {
        drawInitialScoreBoard();
    }
}

function attachSettingsMenuEvents() {
    handleFieldSettingsEvents();
    handleBallSettingsEvents();
    handlePlayerOneSettingsEvents();
    handlePlayerTwoSettingsEvents();
    updateMenuVisibility();
}

function updateMenuVisibility() {
    $('#settings-btn').click(function () {
        if (isMenuShown === true) {
            $('div#settings').fadeOut(1000);
            $('#settings-btn').val('Show Settings');
            isMenuShown = false;
        }
        else {
            $('div#settings').fadeIn(1000);
            $('#settings-btn').val('Hide Settings');
            isMenuShown = true;
        }
    });
}

function handleFieldSettingsEvents() {
    $('#resolution').change(function () {
        res = $('#resolution').val();
        gameSettings.fieldWidth = parseInt(res.split('x')[0]);
        gameSettings.fieldHeight = parseInt(res.split('x')[1]);
        console.log(gameSettings.fieldWidth);
        $('#field').width(fieldWidth).height(fieldHeight);
    });
    $('#field-color').change(function () {
        gameSettings.fieldColor = $('#field-color').val();
        $('#gameFieldCanvas').css('background', fieldColor);
    });
    $('#background-color').change(function () {
        gameSettings.backgroundColor = $('#background-color').val();
        $('body').css('background', backgroundColor);
    });
}

function handleBallSettingsEvents() {
    $('#ball-radius').click(function () {
        gameSettings.radius = parseInt($('#ball-radius').val());
    });
    $('#ball-fill-color').change(function () {
        gameSettings.ballFillColor = $('#ball-fill-color').val();

    });
    $('#ball-stroke-color').change(function () {
        gameSettings.ballStrokeColor = $('#ball-stroke-color').val();
    });
    $('#ball-speed').change(function () {
        gameSettings.ballSpeed = parseInt($('#ball-speed').val());
    });
}

function handlePlayerOneSettingsEvents() {
    $('#p1-racket-size').change(function () {
        gameSettings.p1RacketSize = parseInt($('#p1-racket-size').val());
    });
    $('p1-racket-color').change(function () {
        gameSettings.p1RacketColor = $('p1-racket-color').val();
    });
    $('p1-nickname').change(function () {
        gameSettings.p1Nickname = $('p1-nickname').val();
    });
}

function handlePlayerTwoSettingsEvents() {
    $('#p2-racket-size').change(function () {
        gameSettings.p2RacketSize = parseInt($('#p2-racket-size').val());
    });
    $('p2-racket-color').change(function () {
        gameSettings.p2RacketColor = $('p2-racket-color').val();
    });
    $('p2-nickname').change(function () {
        gameSettings.p2Nickname = $('p2-nickname').val();
    });
}
