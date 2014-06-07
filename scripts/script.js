function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function drawEllipse(canvas, centerX, centerY, width, height) {

    canvas.beginPath();

    canvas.moveTo(centerX, centerY - height / 2);

    canvas.bezierCurveTo(
      centerX + width / 2, centerY - height / 2, 
      centerX + width / 2, centerY + height / 2, 
      centerX, centerY + height / 2);

    canvas.bezierCurveTo(
      centerX - width / 2, centerY + height / 2, 
      centerX - width / 2, centerY - height / 2, 
      centerX, centerY - height / 2);

    canvas.closePath();
}

function drawWindow(canvas, x, y) {
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.lineTo(x + 60, y);
    canvas.lineTo(x + 60, y + 40);
    canvas.lineTo(x, y + 40);
    canvas.closePath();
    canvas.fill();

    canvas.beginPath();
    canvas.moveTo(x + 30, y);
    canvas.lineTo(x + 30, y + 40);
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(x, y + 20);
    canvas.lineTo(x + 60, y + 20);
    canvas.closePath();
    canvas.stroke();
}

//Exercise 2
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