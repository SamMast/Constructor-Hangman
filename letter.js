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
