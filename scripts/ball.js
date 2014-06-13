function Ball(x,y,r){
	this.x = x;
	this.y = y;
	this.r = r;
	this.vX = 1;
	this.vY = 1;
	this.speedMultiplier=1;
	
	this.update = function(canvas){
		//move
		this.x +=this.vX*this.speedMultiplier;
		this.y +=this.vY*this.speedMultiplier;
		//collide with walls
		if(this.x - this.r <= 0){
			goalScored('playerTwo');
			this.x = canvas.canvas.width / 2;
			this.y = canvas.canvas.height / 2;
			//TODO: wait for player input
			this.vX = 1;
			this.vY = getRandomNumberWithinRange(-2,2);
		}
		if(this.x + this.r >= canvas.canvas.width){
			goalScored('playerOne');
			this.x = canvas.canvas.width / 2;
			this.y = canvas.canvas.height / 2;
			//TODO: wait for player input
			this.vX = -1;
			this.vY = getRandomNumberWithinRange(-2,2);
		}
		if(this.y - this.r <= 0){
			this.y = 0 + this.r;
			this.vY *= -1;
		}
		if(this.y + this.r >= canvas.canvas.height){
			this.y = canvas.canvas.height - this.r;
			this.vY *= -1;
		}
		//TODO:collide with rackets
	};
	
	this.draw = function(canvas){
		canvas.fillStyle = gameSettings.ballFillColor;
        canvas.strokeStyle = gameSettings.ballStrokeColor;
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.r, degreesToRadians(0), degreesToRadians(360));
        canvas.closePath();
        canvas.fill();
	};
}