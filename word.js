
// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

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


