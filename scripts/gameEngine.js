var gameTimer,
    startGameButton = document.getElementById('startGameButton'),
    pauseResumeGameButton = document.getElementById('pauseResumeGameButton'),
    canvasElement = document.getElementById('gameFieldCanvas'),
    isGameStarted = false,
    gameFieldCanvas = canvasElement.getContext('2d');

gameFieldCanvas.canvas.width = gameSettings.fieldWidth;
gameFieldCanvas.canvas.height = gameSettings.fieldHeight;

startGameButton.addEventListener('click', startGame, false);

var theBall = new Ball(gameFieldCanvas.canvas.width / 2, gameFieldCanvas.canvas.height / 2);
var p1Racket = new Racket(15, gameFieldCanvas.canvas.height / 2 - gameSettings.p1RacketSize / 2, gameSettings.racketWidth, gameSettings.p1RacketSize, gameSettings.p1RacketFillColor, gameSettings.p1RacketStrokeColor);
var p2Racket = new Racket(gameFieldCanvas.canvas.width - gameSettings.racketWidth - 15, gameFieldCanvas.canvas.height / 2 - gameSettings.p2RacketSize / 2, gameSettings.racketWidth, gameSettings.p2RacketSize, gameSettings.p2RacketFillColor, gameSettings.p2RacketStrokeColor);

document.addEventListener('keydown', function(event) {
    //If 'p' is pressed
    if (event.keyCode == 80) {
        pauseResumeGame();
    } else if (event.keyCode == 38) {
        //Up arrow key pressed
        if (p1Racket.topLeft_y - 15 >= 0) {
            p1Racket.topLeft_y -= 15;
        };
    } else if (event.keyCode == 40) {
        //Down arrow key pressed
        if (p1Racket.topLeft_y + p1Racket.size_y + 15 <= gameFieldCanvas.canvas.height) {
            p1Racket.topLeft_y += 15;
        };
    } else if (event.keyCode == 87) {
        //W key pressed
        if (p2Racket.topLeft_y - 15 >= 0) {
            p2Racket.topLeft_y -= 15;
        };
    } else if (event.keyCode == 83) {
        //S key pressed
        if (p2Racket.topLeft_y + p2Racket.size_y + 15 <= gameFieldCanvas.canvas.height) {
            p2Racket.topLeft_y += 15;
        };
    };
}, false);

function startGame() {
    if (!isGameStarted) {
        initializeSettings();
        $('#startGameButton').hide();
    };

    isGameStarted = true;
    gameTimer = setInterval(playGame, gameSettings.ballSpeed);
    playGame();
}

function playGame() {
    clearGameField();
    applyRandomBonus();
    p1Racket.draw(gameFieldCanvas);
    p2Racket.draw(gameFieldCanvas);
    theBall.draw(gameFieldCanvas);
    theBall.update(gameFieldCanvas);
    //drawBall();
    //moveBall();
}

function clearGameField() {
    gameFieldCanvas.clearRect(0, 0, gameFieldCanvas.canvas.width, gameFieldCanvas.canvas.height);
}

function pauseResumeGame() {
    if (isGameStarted) {
        if (!gameSettings.isGamePaused) {
            clearInterval(gameTimer);
            gameSettings.isGamePaused = true;
        } else {
            startGame();
            gameSettings.isGamePaused = false;
        }
    };
}

function endGame(winner) {
    drawNotificationOnCanvas(gameSettings[winner + 'Name'] + ' WON!!!');
    isGameStarted = false;
    $('#startGameButton').show();
}

//Game Menu
$(document).ready(function() {
    attachSettingsMenuEvents();
});