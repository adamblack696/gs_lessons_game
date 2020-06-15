'use strict';

const numberGuess = (number) => {

	const isNumber = (a) => {
		return !isNaN(parseInt(a)) && isFinite(a);
	}

	const compareNumber = (number) => {
		const a = prompt('Угадай число от 1 до 100', '');

		if(+a === number) {
			alert('Угадал!');
			return true;
		} else if(!a) {
			alert('game over!')
			return false;
		} else if(a > number) {
			alert('Загаданное число меньше');
			numberGuess(number);
		} else if(a < number) {
			alert('Загаданное число больше');
			numberGuess(number);
		} else if(!isNumber(a)){
			alert('Введи число!');
			numberGuess(number);
		}
	}
	compareNumber(number)
}

numberGuess(6)