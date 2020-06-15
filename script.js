'use strict';

const numberGuess = () => {

	let randomFunc = () => {
		const random = Math.floor(Math.random() * 100 + 1);
		console.log(random);
		return random;
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