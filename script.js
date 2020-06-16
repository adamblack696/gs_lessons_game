'use strict';

let randomFunc = () => {
	return Math.floor(Math.random() * 100 + 1);
}

const numberGuess = () => {

	const isNumber = (a) => {
		return !isNaN(parseInt(a)) && isFinite(a);
	}

	let number = randomFunc();
	console.log(number);

	return () => {
		let a = prompt('Угадай число от 1 до 100', '');

		if(+a === number) {
			alert('Поздравляю, вы угадали!');
			return true;
		} else if(!a) {
			alert('game over!')
			return false;
		} else if(a > number) {
			alert('Загаданное число меньше');
			compaireNumber();
		} else if(a < number) {
			alert('Загаданное число больше');
			compaireNumber();
		} else if(!isNumber(a)){
			alert('Введи число!');
			compaireNumber();
		}
	}
}

let compaireNumber = numberGuess();
compaireNumber();
console.dir(compaireNumber);