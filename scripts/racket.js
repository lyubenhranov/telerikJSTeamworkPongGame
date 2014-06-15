function Racket(x, y, width, height, racketFill, ai) {
    this.x = x;
    this.y = y;
    this.width = width;
	this.height = height;
	this.racketFillColor = racketFill;
    //this.vX = 0; // To be used in case we decide to introduce horizontal movement
    this.vY = 0;
	this.speed = 3;
	this.ai = ai;
    //this.sizeMultiplier = 1; // Could be used to resize the racket depending on the level

	//TODO: implement a way to update p1/p2 settings, following proper OOP practices
    this.update = function(canvas) {
		//AI
		if (this.ai != 'none'){
			this.aiControl();
		}
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
		canvas.fillStyle = this.racketFillColor;
        canvas.beginPath();
        canvas.fillRect(this.x, this.y, this.width, this.height);
        canvas.closePath();
        canvas.fill();
    };
	
	this.aiControl = function () {
		var reaction = false;
		var roll = getRandomIntInRange(0,100);
		if(this.ai == 'easy'){
			if (roll > 90){
				reaction = true;
			}
		} else if (this.ai == 'normal'){
			if (roll > 80){
				reaction = true;
			}
		} else if (this.ai == 'hard') {
			if (roll > 70){
				reaction = true;
			}
		}
		if (reaction){
			if (theBall.y < this.y){
				this.up();
			} else if(theBall.y > this.y){
				this.down();
			} else {
				this.stop();
			}
		}
	}
	
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