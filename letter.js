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
		}
	}
}


module.exports = Letter;

// Tests

var letter1 = new Letter("s");

letter1.check("z");
letter1.replace();
console.log(letter1);

letter1.check("r");
letter1.replace();
console.log(letter1);

letter1.check("s");
letter1.replace();
console.log(letter1);
