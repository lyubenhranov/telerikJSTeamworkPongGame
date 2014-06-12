var gameTimer,
    startGameButton = document.getElementById('startGameButton'),
    pauseResumeGameButton = document.getElementById('pauseResumeGameButton'),
    canvasElement=document.getElementById('gameFieldCanvas'),
    gameFieldCanvas = canvasElement.getContext('2d');

startGameButton.addEventListener('click', startGame, false);
pauseResumeGameButton.addEventListener('click', pauseResumeGame, false);

var theBall = new Ball(10,10,5);

function startGame() {
    gameTimer = setInterval(playGame, gameSettings.gameSpeed);
    initializeSettings();
    playGame()
}

function playGame() {
    clearGameField()
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
    if (pauseResumeGameButton.innerText === 'Pause') {
        clearInterval(gameTimer);
        pauseResumeGameButton.innerText = 'Resume';
    }
    else {
        startGame();
        pauseResumeGameButton.innerText = 'Pause';
    }
}

//Game Menu
$(document).ready(function () {

    attachSettingsMenuEvents()

});