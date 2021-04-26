const msg1 = document.getElementById('message1');
const msg2 = document.getElementById('message2');
const msg3 = document.getElementById('message3');
const msg4 = document.getElementById('message4');
const btn = document.getElementById('my_btn');
let interval;
let seconds = 5;

const userGuess = document.getElementById('guess');

let answer = Math.floor(Math.random() * 100) + 1;
let noOfGuesses = 0;
let guessedNums = [];

function play() {
	let userGuessVal = userGuess.value;
	if(userGuessVal < 1 || userGuessVal > 100){
		alert('Please enter a num between 1 and 100');
	} else {
		guessedNums.push(userGuessVal);
		noOfGuesses += 1;
		if(userGuessVal < answer) {
			msg1.textContent = 'Your guess is too low';
			msg2.textContent = 'No. Guesses ' + noOfGuesses;
			msg3.textContent = 'Guessed numbers are: ' + guessedNums.join(', ');
		} else if (userGuessVal > answer) {
			msg1.textContent = 'Your guess is too high';
			msg2.textContent = 'No. Guesses ' + noOfGuesses;
			msg3.textContent = 'Guessed numbers are: ' + guessedNums.join(', ');
		} else if (userGuessVal == answer){
			msg1.textContent = 'Sheeesh yor are right';
			msg2.textContent = 'The number was ' + answer;
			msg3.textContent = 'You guessed it in ' + noOfGuesses + ' guesses';
			btn.disabled = true;
			restartGame();
		}
	}
	if(noOfGuesses == 20) {
		msg1.textContent = 'You lose';
		btn.disabled = true;
		restartGame();
	}
}

const game = () => {
	msg4.textContent = 'The game will restar in ' + seconds + ' seconds';
	if(seconds < 0) {
		clearInterval(interval);
		newGame();
	}
	seconds--;
}

const restartGame = () => {
	interval = setInterval(game, 1000);
}
 
const newGame = () => {
	userGuess.value = '';
	btn.disabled = false;
	seconds = 6;
	answer = Math.floor(Math.random() * 10) + 1;
	noOfGuesses = 0;
	guessedNums = [];
	msg1.textContent = 'No. Of Guesses: 0';
	msg2.textContent = 'Guessed numbers are: None';
	msg3.textContent = '';
	msg4.textContent = '';

}
