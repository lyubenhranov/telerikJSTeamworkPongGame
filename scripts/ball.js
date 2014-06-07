var ball = {
    isGoingUp: true,
    isGoingRight: true,
    positionX: 10,
    positionY: 10,
    radius: 5
}

function drawBall() {
    gameFieldCanvas.beginPath();
    gameFieldCanvas.arc(ball.positionX, ball.positionY, ball.radius, degreesToRadians(0), degreesToRadians(360));
    gameFieldCanvas.closePath();
    gameFieldCanvas.fill();
}

function moveBall() {
    //Update direction
    if (ball.isGoingUp) {
        ball.positionY--;
    }
    else {
        ball.positionY++;
    }

    if (ball.isGoingRight) {
        ball.positionX++;
    }
    else {
        ball.positionX--;
    }

    //Change course if needed
    if (ball.positionX - ball.radius === 0) {
        ball.isGoingRight = true;
    }

    if (ball.positionX + ball.radius === gameFieldCanvas.canvas.width) {
        ball.isGoingRight = false;
    }

    if (ball.positionY - ball.radius === 0) {
        ball.isGoingUp = false;
    }

    if (ball.positionY + ball.radius === gameFieldCanvas.canvas.height) {
        ball.isGoingUp = true;
    }
}