
// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

function Letter(character) {
	this.character = character;

	this.guessed = false;

	this.replace = function() {
		if (this.guessed) {
			return (this.character);
		} else if (!this.guessed) {
			return ("_");
		}
	}

	this.check = function(guess) {
		if (guess === this.character) {
			this.guessed = true;
			// console.log("yup");
		} else {
			// console.log("nope");
		}
	}
}


module.exports = Letter;

//Tests
// var letter1 = new Letter("s");

// letter1.check("z");
// letter1.replace();

// letter1.check("r");
// letter1.replace();

// letter1.check("s");
// letter1.replace();
