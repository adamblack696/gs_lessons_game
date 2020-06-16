'use strict';

let randomFunc = () => {
	return Math.floor(Math.random() * 100 + 1);
}


const numberGuess = () => {
	

	let number = randomFunc();
	console.log(number);
	let iteration = 10;

	const isNumber = (a) => {
		return !isNaN(parseInt(a)) && isFinite(a);
	}

	const restartFunc = (message) => { 
		let restart = confirm(message);
		if(restart) {
			number = randomFunc();
			console.log(number);
			iteration = 10;
			return compaireNumber();
		} else {
			return false;
		}
	}

	const iterationFunc = () => {
		if(iteration === 0) {
			restartFunc('Попытки закончились, хотели бы сыграть еще раз?');
			return false;
		} else if(iteration === 'win') {
			restartFunc('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
			return false;
		} 
	}

	return () => {
		let a = prompt('Угадай число от 1 до 100', '');

		if(+a === number) {
			iteration = 'win';
			iterationFunc();
			return true;
		} else if(!a) {
			alert('game over!');
			return false;
		} else if(a > number) {
			iteration--;
			iterationFunc();
			alert('Загаданное число меньше, осталось попыток ' + iteration);
			compaireNumber();
			return false;
		} else if(a < number) {
			iteration--;
			iterationFunc();
			alert('Загаданное число больше, осталось попыток ' + iteration);
			compaireNumber();
			return false;
		} else if(!isNumber(a)){
			alert('Введи число!');
			compaireNumber();
		}
	}
}

let compaireNumber = numberGuess();
compaireNumber();
console.dir(compaireNumber);