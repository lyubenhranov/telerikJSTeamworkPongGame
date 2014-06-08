var gameSpeed = 5,
    scoreNotDrawed = true,
    playerOneName = 'Player 1',
    playerTwoName = 'Player 2';

function initializeSettings() {
    if (scoreNotDrawed) {
        drawInitialScoreBoard();
    }    
}