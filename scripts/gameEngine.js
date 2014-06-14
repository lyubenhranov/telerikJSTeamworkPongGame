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
var p1Racket = new Racket(15, gameFieldCanvas.canvas.height / 2 - gameSettings.p1RacketSize / 2, gameSettings.racketWidth, gameSettings.p1RacketSize, gameSettings.p1RacketFillColor, 'none');
var p2Racket = new Racket(gameFieldCanvas.canvas.width - gameSettings.racketWidth - 15, gameFieldCanvas.canvas.height / 2 - gameSettings.p2RacketSize / 2, gameSettings.racketWidth, gameSettings.p2RacketSize, gameSettings.p2RacketFillColor, 'none');

document.addEventListener('keydown', function(event) {
    //If 'space' is pressed
    if (event.keyCode == 80) {
        pauseResumeGame();
    } 
	if (p1Racket.ai == 'none'){
			if (event.keyCode == 87) {
				//W key pressed
				p1Racket.up();
			} else if (event.keyCode == 83) {
				//S key pressed
				p1Racket.down();
			}
		}
		if(p2Racket.ai == 'none'){
			if (event.keyCode == 38) {
				//Up arrow key pressed
				p2Racket.up();
			} else if (event.keyCode == 40) {
				//Down arrow key pressed
				p2Racket.down();
			}
		};
}, false);
	document.addEventListener('keyup', function(event) {
		if (p1Racket.ai == 'none'){
			if (event.keyCode == 87) {
				//W key released
				p1Racket.stop();
			} else if (event.keyCode == 83) {
				//S key released
				p1Racket.stop();
			}
		}
		if(p2Racket.ai == 'none'){
			if (event.keyCode == 38) {
				//Up arrow key released
				p2Racket.stop();
			} else if (event.keyCode == 40) {
				//Down arrow key released
				p2Racket.stop();
			}
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
	p1Racket.update(gameFieldCanvas);
    p1Racket.draw(gameFieldCanvas);
	p2Racket.update(gameFieldCanvas);
    p2Racket.draw(gameFieldCanvas);
	theBall.update(gameFieldCanvas);
    theBall.draw(gameFieldCanvas);
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