var isBonusPresent = false;
var isBonusInEffect = false;
var timeStart = undefined;
var timeElapsed = 0;
var currentBonus = undefined;
var bonusTypes = [{
	name: 'slow',
	duration: 4,
	coords: {
		x: undefined,
		y: undefined
	},
	applyEffect: function() {
		//ball.ballSpeed += 2;
		theBall.vX *= 2;
		theBall.vY *= 2;
	},
	revertEffect: function() {
		//ball.ballSpeed -= 2;
		theBall.vX = theBall.vX/2;
		theBall.vY = theBall.vX/2;
	}
}];

function applyRandomBonus() {
	if (!isBonusPresent && !isBonusInEffect) {
		var bonus = getRandomBonus();

		isBonusPresent = true;
		currentBonus = bonus;
	}
	if (isBonusInEffect) {
		timeElapsed = (new Date()).getTime() / 1000 - timeStart;
		if (timeElapsed >= currentBonus.duration) {
			isBonusInEffect = false;
			isBonusPresent = false;
			currentBonus.revertEffect();
		}
	}
	if (!isBonusInEffect) {
		drawBonus(currentBonus);
	}


}

function getRandomBonus() {
	var bonusindex = getRandomValueInRange(0, bonusTypes.length);
	var bonus = bonusTypes[bonusindex];
	bonus.coords.x = getRandomValueInRange(canvasElement.width - 15, 10);
	bonus.coords.y = getRandomValueInRange(canvasElement.height - 15, 10);
	return bonus;
}

function drawBonus(bonus) {
	handleCollision(bonus);
	if (!isBonusInEffect) {
		gameFieldCanvas.fillStyle = 'yellowgreen';
		gameFieldCanvas.arc(bonus.coords.x, bonus.coords.y, 3, degreesToRadians(0), degreesToRadians(360));
		gameFieldCanvas.fill();
		gameFieldCanvas.fillStyle = 'black';
	}

}

function handleCollision(bonus) {
	if (theBall.x >= bonus.coords.x - 15 && theBall.y <= bonus.coords.x + 15 && theBall.y >= bonus.coords.y - 15 && theBall.y <= bonus.coords.y + 15) {
		isBonusPresent = false;
		isBonusInEffect = true;
		bonus.applyEffect();
		timeStart = new Date().getTime() / 1000;
	}
}