var gameTimer,
    startGameButton = document.getElementById('startGameButton'),
    pauseResumeGameButton = document.getElementById('pauseResumeGameButton'),
    gameFieldCanvas = document.getElementById('gameFieldCanvas').getContext('2d');

startGameButton.addEventListener('click', startGame, false);
pauseResumeGameButton.addEventListener('click', pauseResumeGame, false);

function startGame() {
    gameTimer = setInterval(playGame, gameSpeed);
    initializeSettings();
    playGame()
}

function playGame() {
    clearGameField()
    drawBall();
    moveBall();
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