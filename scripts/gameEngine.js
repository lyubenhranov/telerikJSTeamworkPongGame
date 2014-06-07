var moveCircleTimer;

var isGoingUp = true,
        isGoingRight = true,
        positionX = 50,
        positionY = 25,
        radius = 5;

function startCircleMovement() {
    var canvas = document.getElementById('gameField').getContext('2d');

    moveCircleTimer = setInterval(moveCircle, 10);

    function moveCircle() {
        //Clear the canvas
        canvas.clearRect(0, 0, 300, 200);
        //Draw the circle
        canvas.beginPath();
        canvas.arc(positionX, positionY, radius, degreesToRadians(0), degreesToRadians(360));
        canvas.closePath();
        canvas.fill();
        //Update direction
        if (isGoingUp) {
            positionY--;
        }
        else {
            positionY++;
        }

        if (isGoingRight) {
            positionX++;
        }
        else {
            positionX--;
        }

        //Change course if needed
        if (positionX - radius === 0) {
            isGoingRight = true;
        }

        if (positionX + radius === canvas.canvas.width) {
            isGoingRight = false;
        }

        if (positionY - radius === 0) {
            isGoingUp = false;
        }

        if (positionY + radius === canvas.canvas.height) {
            isGoingUp = true;
        }
    }
}