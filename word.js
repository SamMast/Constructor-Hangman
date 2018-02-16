const Letter = require('./letter.js');


function Word(word) {

	this.lettersArray = word.split("");
	this.display = [];
	this.guesses = 10;

	this.wordDisplay = function() {
		
		for (var i = 0; i < this.lettersArray.length; i++) {
			
			var spot = new Letter(this.lettersArray[i])
			this.display.push(spot.replace());
		}
	
		console.log(`\n${this.display.join(" ")}\n`);

	};

	this.guess = function(guessedLetter) {
		
		var count = 0;

		for (var i = 0; i < this.lettersArray.length; i++) {

			var spot = new Letter(this.lettersArray[i])
			
			spot.check(guessedLetter);
			
			if (spot.guessed) {
				this.display.splice(i, 1, spot.character);
				count++;
			} else {
			}

		}

		console.log(`\n${this.display.join(" ")}`);

		if (count > 0) {
			console.log(`\nCORRECT!\n`);

		} else {
			this.guesses--;
			console.log(`\nINCORRECT!\n${this.guesses} guesses left\n`);		
		}

	}
}

module.exports = Word;


