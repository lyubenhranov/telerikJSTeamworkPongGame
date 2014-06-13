function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function getRandomValueInRange(max, min) {
    var random = Math.floor(Math.random() * (max - min + 1));
    return random;
}

function getRandomNumberWithinRange(min, max) {
    return (min + (Math.random() * (max - min)));
}

function getRandomIntWithinRange(min, max) {
    return (min + ((Math.random() * (max - min)) | 0));
}

function drawNotificationOnCanvas(notification, x, y) {
    x = x || (gameFieldCanvas.canvas.width / 2) - (notification.length / 2) * 5;
    y = y || (gameFieldCanvas.canvas.height / 2);
    gameFieldCanvas.font = '15px Chewy';
    gameFieldCanvas.fillText(notification, x, y);
}