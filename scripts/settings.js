//Game Menu
var isMenuShown = false,
    res,
    fieldWidth = parseInt($('#resolution').val().split('x')[0]),
    fieldHeight = parseInt($('#resolution').val().split('x')[1]),
    fieldColor = '#fff',
    backgroundColor = '#fff',
	textColor = '#fff',
    radius = parseInt($('#ball-radius').val()),
    ballFillColor = '#FFF',
    ballStrokeColor = '#FFF',
    ballSpeed = parseInt($('#ball-speed').val()),
    racketWidth = 5,
    p1RacketSize = 50, //parseInt($('#p1-racket-size').val()),
    p1RacketFillColor = '#F00',
    p1RacketStrokeColor = '#0FF',
    p1Nickname = $('#p1-nickname').val(),
    p2RacketSize = 50, //parseInt($('#p2-racket-size').val()),
    p2RacketFillColor = '#F00',
    p2RacketStrokeColor = '#0FF',
    p2Nickname = $('#p2-nickname').val(),
    gameSettings = {
        gameSpeed: 5,
        scoreNotDrawed: true,
        playerOneName: p1Nickname || 'Player 1',
        playerTwoName: p2Nickname || 'Player 2',
        fieldWidth: fieldWidth,
        fieldHeight: fieldHeight,
        fieldColor: fieldColor,
        backgroundColor: backgroundColor,
		textColor : textColor,
        ballRadius: radius,
        ballFillColor: ballFillColor,
        ballStrokeColor: ballStrokeColor,
        ballSpeed: ballSpeed,
        racketWidth: racketWidth,
        p1RacketSize: p1RacketSize,
        p1RacketFillColor: p1RacketFillColor,
        p1RacketStrokeColor: p1RacketStrokeColor,
        p1Nickname: p1Nickname,
        p2RacketSize: p2RacketSize,
        p2RacketFillColor: p2RacketFillColor,
        p2RacketStrokeColor: p2RacketStrokeColor,
        p2Nickname: p2Nickname,
        goalsToWin: 6,
        isGamePaused: false
    };

function initializeSettings() {
    if (gameSettings.scoreNotDrawed) {
        drawInitialScoreBoard();
    }

    canvasElement.width = gameSettings.fieldWidth;
    canvasElement.height = gameSettings.fieldHeight;

    gameSettings.gameSpeed = 5;
    gameSettings.scoreNotDrawed = true;
    gameSettings.playerOneName = p1Nickname || 'Player 1';
    gameSettings.playerTwoName = p2Nickname || 'Player 2';
    gameSettings.fieldWidth = fieldWidth;
    gameSettings.fieldHeight = fieldHeight;
    gameSettings.fieldColor = fieldColor;
    gameSettings.backgroundColor = backgroundColor;
    gameSettings.ballRadius = radius;
    gameSettings.ballFillColor = ballFillColor;
    gameSettings.ballStrokeColor = ballStrokeColor;
    gameSettings.ballSpeed = ballSpeed;
    gameSettings.p1RacketSize = p1RacketSize;
    gameSettings.p1RacketFillColor = p1RacketFillColor;
    gameSettings.p1Nickname = p1Nickname;
    gameSettings.goalsToWin = 6;

    playerOneScore = 0;
    playerTwoScore = 0;

    isBonusPresent = false;
    isBonusInEffect = false;
    timeStart = undefined;
    timeElapsed = 0;
    currentBonus = undefined;

    gameSettings.isGamePaused = false;
    isGameStarted = false;
}

function attachSettingsMenuEvents() {
    handleFieldSettingsEvents();
    handleBallSettingsEvents();
    handlePlayerOneSettingsEvents();
    handlePlayerTwoSettingsEvents();
    updateMenuVisibility();
}

function updateMenuVisibility() {
    $('#settings-btn').click(function() {
        if (isMenuShown === true) {
            $('div#settings').fadeOut(1000);
            $('#settings-btn').val('Show Settings');
            isMenuShown = false;
        } else {
            $('div#settings').fadeIn(1000);
            $('#settings-btn').val('Hide Settings');
            isMenuShown = true;
        }
    });
}

function handleFieldSettingsEvents() {
    $('#resolution').change(function() {
        res = $('#resolution').val();
        gameSettings.fieldWidth = parseInt(res.split('x')[0]);
        gameSettings.fieldHeight = parseInt(res.split('x')[1]);
        $('#field').width(fieldWidth).height(fieldHeight);
    });
    $('#field-color').change(function() {
        $('#gameFieldCanvas').css("background-color", $("#field-color").val());
    });
    $('#background-color').change(function() {
        $('body').css("background-color", $("#background-color").val());
    });
}

function handleBallSettingsEvents() {
    $('#ball-radius').change(function() {
        gameSettings.ballRadius = parseInt($('#ball-radius').val());
    });
    $('#ball-fill-color').change(function() {
        gameSettings.ballFillColor = $('#ball-fill-color').val();
    });
    $('#ball-stroke-color').change(function() {
        gameSettings.ballStrokeColor = $('#ball-stroke-color').val();
    });
    $('#ball-speed').change(function() {
        gameSettings.ballSpeed = parseInt($('#ball-speed').val());
    });
}

function handlePlayerOneSettingsEvents() {
    $('#p1-racket-size').change(function() {
        gameSettings.p1RacketSize = parseInt($('#p1-racket-size').val());
        p1Racket.height = gameSettings.p1RacketSize;
    });
    $('#p1-racket-color').change(function() {
        gameSettings.p1RacketFillColor = $('#p1-racket-color').val();
		p1Racket.racketFillColor = gameSettings.p1RacketFillColor;
    });
    $('#p1-nickname').change(function() {
        gameSettings.playerOneName = $('#p1-nickname').val();
        playerOneNameHTMLElement.innerText = gameSettings.playerOneName;
    });
	$('#p1-ai').change(function() {
        p1Racket.ai = $('#p1-ai').val();
    });
}

function handlePlayerTwoSettingsEvents() {
    $('#p2-racket-size').change(function() {
        gameSettings.p2RacketSize = parseInt($('#p2-racket-size').val());
        p2Racket.height = gameSettings.p2RacketSize;
    });
    $('#p2-racket-color').change(function() {
        gameSettings.p2RacketFillColor = $('#p2-racket-color').val();
		p2Racket.racketFillColor = gameSettings.p2RacketFillColor;
    });
    $('#p2-nickname').change(function() {
        gameSettings.playerTwoName = $('#p2-nickname').val();
        playerTwoNameHTMLElement.innerText = gameSettings.playerTwoName;
    });
	$('#p2-ai').change(function() {
        p2Racket.ai = $('#p2-ai').val();
    });
}