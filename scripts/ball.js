function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.vX = 1;
    this.vY = 1;
	this.r = gameSettings.ballRadius;
    this.speedMultiplier = gameSettings.ballSpeed;
	this.fillColor = gameSettings.ballFillColor;
	this.strokeColor = gameSettings.ballStrokeColor;

    this.update = function(canvas) {
		//update fields
		if(this.r != gameSettings.ballRadius){
			this.r = gameSettings.ballRadius;
		}
		if (this.fillColor != gameSettings.ballFillColor){
			this.fillColor = gameSettings.ballFillColor;
		}
		if (this.strokeColor != gameSettings.ballStrokeColor){
			this.strokeColor = gameSettings.ballStrokeColor;
		}
        //move
        this.x += this.vX * this.speedMultiplier;
        this.y += this.vY * this.speedMultiplier;
        //collide with walls
        if (this.x - this.r <= 0) {
            goalScored('playerTwo');
            this.x = canvas.canvas.width / 2;
            this.y = canvas.canvas.height / 2;
            this.vX = 1;
            this.vY = getRandomIntInRange(-2, 2);
        }
        if (this.x + this.r >= canvas.canvas.width) {
            goalScored('playerOne');
            this.x = canvas.canvas.width / 2;
            this.y = canvas.canvas.height / 2;
            this.vX = -1;
            this.vY = getRandomIntInRange(-2, 2);
        }
        if (this.y - this.r <= 0) {
            this.y = 0 + this.r;
            this.vY *= -1;
        }
        if (this.y + this.r >= canvas.canvas.height) {
            this.y = canvas.canvas.height - this.r;
            this.vY *= -1;
        }
        //collide with rackets
		if ((this.x - this.r <= (p1Racket.x + p1Racket.width)) &&
            (this.y + this.r >= p1Racket.y && this.y - this.r <= p1Racket.y + p1Racket.height)) {
			this.collideWithRacket(p1Racket);
		} else if ((this.x + this.r >= p2Racket.x) &&
            (this.y + this.r >= p2Racket.y && this.y - this.r <= p2Racket.y + p2Racket.height)) {
			this.collideWithRacket(p2Racket);
		}
        
    };
	
	this.collideWithRacket = function(racket){
            this.vX *= -1;
			//vY change depending on section of racket hit
			if(this.y < racket.y + racket.height / 4){//top quarter of racket
				this.vY = -2;
			} else if (this.y < racket.y + racket.height / 2){//2nd quarter of racket from top
				this.vY = -1;
			} else if (this.y < racket.y + racket.height * 3 / 4){//3rd quarter of racket from top
				this.vY = 1;
			} else{
				this.vY = 2;
			}
	}

    this.checkForRacketCollision=function(){
        //RacketOneCollision
        if ((this.x - this.r <= (p1Racket.x + p1Racket.width)) &&
            (this.y + this.r >= p1Racket.y && this.y - this.r <= p1Racket.y + p1Racket.height)) {
        return 1;
        };
        //RacketTwoCollision
        if ((this.x + this.r >= p2Racket.x) &&
            (this.y + this.r >= p2Racket.y && this.y - this.r <= p2Racket.y + p2Racket.height)) {
        return -1;
        };

        return 0;
    }

    this.draw = function(canvas) {
        canvas.fillStyle = this.fillColor;
        canvas.strokeStyle = this.strokeColor;
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.r, degreesToRadians(0), degreesToRadians(360));
        canvas.closePath();
        canvas.fill();
    };
}