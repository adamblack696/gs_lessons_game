'use strict';

const numberGuess = () => {

	let randomFunc = () => {
		return Math.floor(Math.random() * 100 + 1);
	}

	const isNumber = (a) => {
		return !isNaN(parseInt(a)) && isFinite(a);
	}

	return () => {
		let number = randomFunc();
		let a = prompt('Угадай число от 1 до 100', '');

		if(+a === number) {
			alert('Поздравляю, вы угадали!');
			return true;
		} else if(!a) {
			alert('game over!')
			return false;
		} else if(a > number) {
			alert('Загаданное число меньше');
			numberGuess()();
		} else if(a < number) {
			alert('Загаданное число больше');
			numberGuess()();
		} else if(!isNumber(a)){
			alert('Введи число!');
			numberGuess()();
		}
	}
}

let compaireNumber = numberGuess();
compaireNumber();
console.dir(compaireNumber);