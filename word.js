
// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

const letter = require('./letter.js');
var display = [];

function Word(word) {
	this.letters = word.split("");

	this.display = function() {
		
		for (var i = 0; i < this.letters.length; i++) {
			this.letters[i].replace();
			display += this.letters[i];
		}

		console.log(display);
	};

	this.guess = function(guessedLetter) {

		for (var i = 0; i < this.letters.length; i++) {
			this.letters[i].check(guessedLetter);
		}

	}
}

var word1 = new Word("test");
word1.display();
word1.guess("a");
// word1.display();
// console.log(word1.letters);


