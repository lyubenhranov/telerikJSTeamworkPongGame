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
    }
    else {
        playerTwoScore++;
    }

    updateScore(player);
}

function updateScore(player) {
    var score,
        spritePositionX;

    if (player === 'playerOne') {
        score = playerOneScore;
        spritePositionX = 0;
    }
    else {
        score = playerTwoScore;
        spritePositionX = 55;
    }

    scoreBoardCanvas.drawImage(spriteImage, score * 49.5, 0, 49.5, 42, spritePositionX, 0, 49.5, 42);
}

function drawInitialScore() {
    scoreBoardCanvas.drawImage(spriteImage, 0, 0, 49.5, 42, 0, 0, 49.5, 42);
    scoreBoardCanvas.drawImage(spriteImage, 0, 0, 49.5, 42, 55, 0, 49.5, 42);
}

