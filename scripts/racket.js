function Racket(x, y, width, height, racketFill) {
    this.x = x;
    this.y = y;
    this.width = width;
	this.height = height;
	this.racketFillColor = racketFill;
	//this.racketStrokeColor = gameSettings;
//    this.vX = 0; // To be used in case we decide to introduce horizontal movement
    this.vY = 0;
	this.speed = 3;
//    this.sizeMultiplier = gameSettings.ballSpeed; // Could be used to resize the racket depending on the level

    this.update = function(canvas) {
        //move
        this.y += this.vY;
		//collide with walls
		if(this.y <= 0){
			this.y = 0;
			if(this.vY < 0){
				this.stop();
			}
		}
		if((this.y + this.height)>= canvas.canvas.height){
			this.y = canvas.canvas.height - this.height;
			if(this.vY > 0){
				this.stop();
			}
		}
		
    };

    this.draw = function(canvas) {
		/*
    	if (this.x === 15){
        	canvas.fillStyle = gameSettings.p1RacketFillColor;
    	}
    	else {
    		canvas.fillStyle = gameSettings.p2RacketFillColor;
    	}*/
        //canvas.strokeStyle = this.racketStrokeColor;
		canvas.fillStyle = this.racketFillColor;
        canvas.beginPath();
        canvas.fillRect(this.x, this.y, this.width, this.height);
        canvas.closePath();
        canvas.fill();
    };
	
	this.up = function() {
		this.vY = -this.speed;
	}
	this.down = function() {
		this.vY = this.speed;
	}
	this.stop = function() {
		this.vY = 0;
	}
}