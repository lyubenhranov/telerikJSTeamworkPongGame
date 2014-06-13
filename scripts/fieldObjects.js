var isBonusPresent = false;
var isBonusInEffect = false;
var timeStart = undefined;
var timeElapsed = 0;
var wasPaused = false;
var currentBonus = undefined;
var bonusTypes = [{
	name: 'Slower Ball',
	duration: 5,
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
	name: 'Faster Ball',
	duration: 5,
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
	name: 'Vibrating Ball',
	duration: 5,
	timeOfLastApply: 10,
	coords: {
		x: undefined,
		y: undefined
	},
	applyEffect: function() {

		if (theBall.vX > 0) {
			theBall.x += getRandomValueInRange(-3, 1);
		} else {
			theBall.x += getRandomValueInRange(3, -1);
		}

		if (theBall.vY > 0) {
			theBall.y += getRandomValueInRange(-3, 1);
		} else {
			theBall.y += getRandomValueInRange(3, -1);
		}
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
}, {
	name: 'Enlarge Ball',
	duration: 5,
	coords: {
		x: undefined,
		y: undefined
	},
	applyEffect: function() {
		//ball.ballSpeed += 2;
		theBall.r += 5;
	},
	revertEffect: function() {
		//ball.ballSpeed -= 2;
		theBall.r -= 5;
	},
	draw: function() {
		var fill = gameFieldCanvas.fillStyle;
		gameFieldCanvas.fillStyle = 'pink';
		gameFieldCanvas.arc(currentBonus.coords.x, currentBonus.coords.y, 3, degreesToRadians(0), degreesToRadians(360));
		gameFieldCanvas.fill();
		gameFieldCanvas.fillStyle = fill;
	}
}];

function applyRandomBonus() {
	if (gameSettings.isGamePaused) {
		wasPaused = true;
	}
	if (!isBonusPresent && !isBonusInEffect) {
		currentBonus = getRandomBonus();

		isBonusPresent = true;
	}
	if (isBonusInEffect) {
		drawNotificationOnCanvas('Bonus in effect: ' + currentBonus.name + '! Time Left: ' + Math.floor(currentBonus.duration - timeElapsed), 15, 15);
		timeElapsed += gameSettings.gameSpeed / 1000;
		if (timeElapsed >= currentBonus.duration) {
			isBonusInEffect = false;
			isBonusPresent = false;
			currentBonus.revertEffect();
			currentBonus = null;
			timeElapsed = 0;
		} else if (currentBonus.name === 'Vibrating Ball' && isBonusInEffect) {
			currentBonus.applyEffect();
		}
	}
	if (!isBonusInEffect) {
		drawBonus(currentBonus);
	}


}

function getRandomBonus() {
	var bonusindex = getRandomValueInRange(bonusTypes.length - 1, 0);
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
		currentBonus.applyEffect();
		timeStart = new Date().getTime() / 1000;
	}
}