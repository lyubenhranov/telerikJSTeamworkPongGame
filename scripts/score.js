var scoreBoardHTMLElement = document.getElementById('scoreBoardCanvas'),
    scoreBoardCanvas = scoreBoardHTMLElement.getContext('2d'),
    playerOneAvatarSVG = document.getElementById('playerOneAvatar'),
    playerOneNameHTMLElement = document.getElementById('playerOneName'),
    playerTwoAvatarSVG = document.getElementById('playerTwoAvatar'),
    playerTwoNameHTMLElement = document.getElementById('playerTwoName'),
    playerOneScore = 0,
    playerTwoScore = 0;

scoreBoardCanvas.canvas.width = 100;
scoreBoardCanvas.canvas.height = 50;

var scoreBoardKineticStage = new Kinetic.Stage({
    container: 'scoreBoardCanvas',
    width: 100,
    height: 50
});

var scoreBoardKineticLayer = new Kinetic.Layer();

var spriteImage = new Image();
spriteImage.src = 'images/numbersSprite.png';

function goalScored(player) {
    if (player === 'playerOne') {
        playerOneScore++;
    } else {
        playerTwoScore++;
    }

    updateScoreBoard(player);
    pauseResumeGame();

    if (playerOneScore === gameSettings.goalsToWin || playerTwoScore === gameSettings.goalsToWin) {
        endGame(player);
    } else {
        drawNotificationOnCanvas(gameSettings[player + 'Name'] + ' scored!!! Press "P" to resume the game');
    }
}

function updateScoreBoard(player) {
    var score,
        spritePositionX;

    if (player === 'playerOne') {
        score = playerOneScore;
        spritePositionX = 0;

        drawHappyAvatar(player);
        drawSadAvatar('playerTwo');
    } else {
        score = playerTwoScore;
        spritePositionX = 55;

        drawHappyAvatar(player);
        drawSadAvatar('playerOne');
    }

    window.setTimeout(resetAvatarFacesToNormal, 3000);

    scoreBoardCanvas.drawImage(spriteImage, score * 49.5, 0, 49.5, 42, spritePositionX, 7, 49.5, 42);
}

function drawInitialScoreBoard() {
    scoreBoardCanvas.drawImage(spriteImage, 0, 0, 49.5, 42, 0, 7, 49.5, 42);
    scoreBoardCanvas.drawImage(spriteImage, 0, 0, 49.5, 42, 55, 7, 49.5, 42);

    gameSettings.scoreNotDrawed = false;

    resetAvatarFacesToNormal();

    playerOneNameHTMLElement.innerText = gameSettings.playerOneName;
    playerTwoNameHTMLElement.innerText = gameSettings.playerTwoName;
}

function drawSadAvatar(player) {
    var playerElement,
        sadFace = '<circle id="playerOneHead" r="20" cy="25" cx="25" stroke-width="2" stroke="#000000" fill="#ffff00" /><circle id="playerOneRightEye" r="3" cy="20" cx="32" stroke-width="2" stroke="#000000" fill="#000000" /><circle id="playerOneLeftEye" r="3" cy="20" cx="20" stroke-width="2" stroke="#000000" fill="#000000" /><path id="playerOneMouth" d="M15 35 Q25 30 36 35" stroke-width="2" stroke="#000000" />';

    if (player === 'playerOne') {
        playerOneAvatarSVG.innerHTML = sadFace;
    } else {
        playerTwoAvatarSVG.innerHTML = sadFace;
    }
}

function drawHappyAvatar(player) {
    var playerElement,
        happyFace = '<circle id="playerOneHead" r="20" cy="25" cx="25" stroke-width="2" stroke="#000000" fill="#ffff00" /><circle id="playerOneRightEye" r="3" cy="20" cx="32" stroke-width="2" stroke="#000000" fill="#000000" /><circle id="playerOneLeftEye" r="3" cy="20" cx="20" stroke-width="2" stroke="#000000" fill="#000000" /><path id="playerOneMouth" d="M15 35 Q25 40 36 35" stroke-width="2" stroke="#000000" />';

    if (player === 'playerOne') {
        playerOneAvatarSVG.innerHTML = happyFace;
    } else {
        playerTwoAvatarSVG.innerHTML = happyFace;
    }
}

function drawNormalAvatar(player) {
    var playerElement,
        normalFace = '<circle id="playerOneHead" r="20" cy="25" cx="25" stroke-width="2" stroke="#000000" fill="#ffff00" /><circle id="playerOneRightEye" r="3" cy="20" cx="32" stroke-width="2" stroke="#000000" fill="#000000" /><circle id="playerOneLeftEye" r="3" cy="20" cx="20" stroke-width="2" stroke="#000000" fill="#000000" /><path id="playerOneMouth" d="M15 35 L36 35" stroke-width="2" stroke="#000000" />';

    if (player === 'playerOne') {
        playerOneAvatarSVG.innerHTML = normalFace;
    } else {
        playerTwoAvatarSVG.innerHTML = normalFace;
    }
}

function resetAvatarFacesToNormal() {
    drawNormalAvatar('playerOne');
    drawNormalAvatar('playerTwo');
}