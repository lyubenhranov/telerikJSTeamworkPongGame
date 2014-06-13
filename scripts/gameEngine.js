var gameTimer,
    startGameButton = document.getElementById('startGameButton'),
    pauseResumeGameButton = document.getElementById('pauseResumeGameButton'),
    canvasElement = document.getElementById('gameFieldCanvas'),
    isGameStarted = false,
    gameFieldCanvas = canvasElement.getContext('2d');

gameFieldCanvas.canvas.width = gameSettings.fieldWidth;
gameFieldCanvas.canvas.height = gameSettings.fieldHeight;

startGameButton.addEventListener('click', startGame, false);

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 80) {
        pauseResumeGame();
    }
}, false);

var theBall = new Ball(10, 10, 5);
var p1Racket = new Racket(0, gameFieldCanvas.canvas.height / 2 - gameSettings.p1RacketSize / 2, gameSettings.racketWidth, gameSettings.p1RacketSize, gameSettings.p1RacketFillColor, gameSettings.p1RacketStrokeColor);
var p2Racket = new Racket(gameFieldCanvas.canvas.width - gameSettings.racketWidth, gameFieldCanvas.canvas.height / 2 - gameSettings.p2RacketSize / 2, gameSettings.racketWidth, gameSettings.p2RacketSize, gameSettings.p2RacketFillColor, gameSettings.p2RacketStrokeColor);

function startGame() {
    if (!isGameStarted) {
        initializeSettings();
        $('#startGameButton').hide();
    };

    isGameStarted = true;
    gameTimer = setInterval(playGame, gameSettings.gameSpeed);
    playGame();
}

function playGame() {
    clearGameField();
    applyRandomBonus();
    theBall.draw(gameFieldCanvas);
    theBall.update(gameFieldCanvas);
	p1Racket.draw(gameFieldCanvas);
	p2Racket.draw(gameFieldCanvas);
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