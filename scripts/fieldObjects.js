var isBonusPresent = false;
var isBonusInEffect = false;
var timeStart = undefined;
var timeElapsed = 0;
var currentBonus = undefined;
var bonusTypes = [{
	name: 'slow',
	duration: 3,
	coords: {
		x: undefined,
		y: undefined
	},
	applyEffect: function() {
		//ball.ballSpeed += 2;
		theBall.speedMultiplier = 0.5;
	},
	revertEffect: function() {
		//ball.ballSpeed -= 2;
		theBall.speedMultiplier = 1;
	},
	draw: function() {
		var fill = gameFieldCanvas.fillStyle;
		gameFieldCanvas.fillStyle = 'yellowgreen';
		gameFieldCanvas.arc(currentBonus.coords.x, currentBonus.coords.y, 3, degreesToRadians(0), degreesToRadians(360));
		gameFieldCanvas.fill();
		gameFieldCanvas.fillStyle = fill;
	}
}, {
	name: 'fast',
	duration: 3,
	coords: {
		x: undefined,
		y: undefined
	},
	applyEffect: function() {
		theBall.speedMultiplier = 1.5;
	},
	revertEffect: function() {
		theBall.speedMultiplier = 1;
	},
	draw: function() {
		var fill = gameFieldCanvas.fillStyle;
		gameFieldCanvas.fillStyle = 'red';
		gameFieldCanvas.arc(currentBonus.coords.x, currentBonus.coords.y, 3, degreesToRadians(0), degreesToRadians(360));
		gameFieldCanvas.fill();
		gameFieldCanvas.fillStyle = fill;
	}
}, {
	name: 'changePath',
	duration: 3,
	timeOfLastApply: 10,
	coords: {
		x: undefined,
		y: undefined
	},
	applyEffect: function() {
		
			theBall.x += getRandomValueInRange(1, -1);
			theBall.y += getRandomValueInRange(2, -2);
			theBall.speedMultiplier = 0.6;
			timeOfLastApply = (new Date()).getTime() / 1000 - timeStart;


	},
	revertEffect: function() {
		theBall.speedMultiplier = 1;
	},
	draw: function() {
		var fill = gameFieldCanvas.fillStyle;
		gameFieldCanvas.fillStyle = 'white';
		gameFieldCanvas.arc(currentBonus.coords.x, currentBonus.coords.y, 3, degreesToRadians(0), degreesToRadians(360));
		gameFieldCanvas.fill();
		gameFieldCanvas.fillStyle = fill;
	}
}];

function applyRandomBonus() {
	if (!isBonusPresent && !isBonusInEffect) {
		currentBonus = getRandomBonus();

		isBonusPresent = true;
	}
	if (isBonusInEffect) {
		timeElapsed = (new Date()).getTime() / 1000 - timeStart;
		if (timeElapsed >= currentBonus.duration) {
			isBonusInEffect = false;
			isBonusPresent = false;
			currentBonus.revertEffect();
			currentBonus = null;
		}else if (currentBonus.name === 'changePath' && isBonusInEffect) {
			currentBonus.applyEffect();
		}
	}
	if (!isBonusInEffect) {
		drawBonus(currentBonus);
	}


}

function getRandomBonus() {
	var bonusindex = getRandomValueInRange(bonusTypes.length-1, 0);
	var bonus = bonusTypes[bonusindex];
	bonus.coords.x = getRandomValueInRange(canvasElement.width - 15, 10);
	bonus.coords.y = getRandomValueInRange(canvasElement.height - 15, 10);
	return bonus;
}

function drawBonus(bonus) {
	handleCollision(bonus);
	if (!isBonusInEffect && currentBonus !== null) {
		currentBonus.draw();
	}

}

function handleCollision(bonus) {
	if (currentBonus !== null && theBall.x >= currentBonus.coords.x - 15 && theBall.x <= currentBonus.coords.x + 15 && theBall.y >= currentBonus.coords.y - 15 && theBall.y <= currentBonus.coords.y + 15) {
		isBonusPresent = false;
		isBonusInEffect = true;
		currentBonus.applyEffect()
		timeStart = new Date().getTime() / 1000;
	}
}