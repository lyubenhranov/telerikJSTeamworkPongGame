<<<<<<< HEAD
function Ball(x,y,r){
	this.x = x;
	this.y = y;
	this.r = r;
	this.vX = 1;
	this.vY = 1;
	
	this.update = function(canvas){
		//move
		this.x +=this.vX;
		this.y +=this.vY;
		//collide with walls
		if(this.x - this.r <= 0){
			//TODO:player 1 goal
			//TODO:restart
			//temporary code BEGIN
			this.x = 0 + this.r;
			this.vX *= -1;
			//temporary code END
		}
		if(this.x + this.r >= canvas.canvas.width){
			//TODO:player 2 goal
			//TODO:restart
			//temporary code BEGIN
			this.x = canvas.canvas.width - this.r;
			this.vX *= -1;
			//temporary code END
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
	}
	
	this.draw = function(canvas){
		canvas.beginPath();
		canvas.arc(this.x, this.y, this.r, degreesToRadians(0), degreesToRadians(360));
		canvas.closePath();
		canvas.fill();
	}
	
	
=======
function Ball(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.vX = 1;
    this.vY = 1;

    this.update = function(canvas) {
        //move
        this.x += this.vX;
        this.y += this.vY;
        //collide with walls
        if (this.x - this.r <= 0) {
            goalScored('playerOne');
            //TODO:restart
            //temporary code BEGIN
            this.x = 0 + this.r;
            this.vX *= -1;
            //temporary code END
        }
        if (this.x + this.r >= canvas.canvas.width) {
            goalScored('playerTwo');
            //TODO:restart
            //temporary code BEGIN
            this.x = canvas.canvas.width - this.r;
            this.vX *= -1;
            //temporary code END
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
    }

    this.draw = function(canvas) {
        canvas.fillStyle = gameSettings.ballFillColor;
        canvas.strokeStyle = gameSettings.ballStrokeColor;
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.r, degreesToRadians(0), degreesToRadians(360));
        canvas.closePath();
        canvas.fill();
    }


>>>>>>> origin/master
}

/*
var ball = {
    isGoingUp: true,
    isGoingRight: true,
    positionX: 10,
    positionY: 10,
    radius: 5,
    ballSpeed:1
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
        ball.positionY-=ball.ballSpeed;
    }
    else {
        ball.positionY+=ball.ballSpeed;
    }

    if (ball.isGoingRight) {
        ball.positionX+=ball.ballSpeed;
    }
    else {
        ball.positionX-=ball.ballSpeed;
    }

    //Change course if needed
    if (ball.positionX - ball.radius <= 0) {
        ball.isGoingRight = true;
        goalScored('playerTwo');
    }

    if (ball.positionX + ball.radius >= gameFieldCanvas.canvas.width) {
        ball.isGoingRight = false;
        goalScored('playerOne');
    }

    if (ball.positionY - ball.radius <= 0) {
        ball.isGoingUp = false;
    }

    if (ball.positionY + ball.radius >= gameFieldCanvas.canvas.height) {
        ball.isGoingUp = true;
    }
}*/