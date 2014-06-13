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

function drawNotificationOnCanvas(notification) {
    gameFieldCanvas.font = '15px Chewy';
    gameFieldCanvas.fillText(notification, (gameSettings.fieldWidth / 2) - (notification.length / 2) * 5, gameSettings.fieldHeight / 2);
}