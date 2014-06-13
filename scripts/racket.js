function Racket(topLeft_x, topLeft_y, size_x, size_y, racketFillColor, racketStrokeColor) {
    this.topLeft_x = topLeft_x;
    this.topLeft_y = topLeft_y;
    this.size_x = size_x;
	this.size_y = size_y;
	this.racketFillColor = racketFillColor;
	this.racketStrokeColor = racketStrokeColor;
//    this.vX = 0; // To be used in case we decide to introduce horizontal movement
    this.vY = 0;
//    this.sizeMultiplier = gameSettings.ballSpeed; // Could be used to resize the racket depending on the level

/*
    this.update = function(canvas) {
        //move
        this.x += this.vX * this.speedMultiplier;
        this.y += this.vY * this.speedMultiplier;
        //collide with walls
        if (this.x - this.r <= 0) {
            goalScored('playerTwo');
            this.x = canvas.canvas.width / 2;
            this.y = canvas.canvas.height / 2;
            this.vX = 1;
            this.vY = getRandomNumberWithinRange(-2, 2);
        }
        if (this.x + this.r >= canvas.canvas.width) {
            goalScored('playerOne');
            this.x = canvas.canvas.width / 2;
            this.y = canvas.canvas.height / 2;
            this.vX = -1;
            this.vY = getRandomNumberWithinRange(-2, 2);
        }
        if (this.y - this.r <= 0) {
            this.y = 0 + this.r;
            this.vY *= -1;
        }
        if (this.y + this.r >= canvas.canvas.height) {
            this.y = canvas.canvas.height - this.r;
            this.vY *= -1;
        }
        //TODO:collide with rackets
    };
	*/

    this.draw = function(canvas) {
        canvas.fillStyle = this.racketFillColor;
        canvas.strokeStyle = this.racketStrokeColor;
        canvas.beginPath();
        canvas.fillRect(this.topLeft_x, this.topLeft_y, this.size_x, this.size_y);
        canvas.closePath();
        canvas.fill();
    };
}