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