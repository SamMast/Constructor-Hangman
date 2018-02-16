// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// 6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

var Word = require("./word.js");
var inquirer = require("inquirer");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordOptions = ["airball", "assist", "rebound", "block", "backboard", "charge", "flop", "screen", "swish", "turnover", "travel", "dunk", "slam", "pass", "cut", "score", "shoot", "crossover", "dribble", "foul", "layup", "jordan",  "nuggets", "bulls", "lakers", "celtics", "timberwolves", "kobe", "lebron", "warriors", "clippers", "alleyoop", "fadeaway", "mvp", "champion", "rings", "nike", "adidas", "hoop" ];

var newWord;
var currentWord = "";
var	currentWordArray = [];
var guessesSoFar = [];

function createWord() {

	currentWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	currentWordArray = currentWord.split("");

	newWord = new Word(currentWord);
	newWord.wordDisplay();

	guessesSoFar = [];
}

function gameStart() {

	if (newWord.guesses > 0) {

		inquirer.prompt([
			  {
			    name: "guess",
			    message: "Guess a Letter!",
			    type: "input",
		        validate: function(value) { //this validates a number between 1 and 10, and asks again if not
		          if (alphabet.indexOf(value) !== -1 && guessesSoFar.indexOf(value) === -1) {
		            return true;
		          }
		          return false;
		        }

			  }
			]).then(function(data) {

				guessesSoFar.push(data.guess);
				newWord.guess(data.guess);
				var currentGuess = (newWord.display).join("");

				if (currentGuess === currentWord) {

					inquirer.prompt([
						  {
						    name: "newGame",
						    message: `You Win! The word was ${currentWord}. Would you like to play again?`,
						    type: "confirm",
						    default: false
						  }
						]).then(function(data) {

							if (data.newGame) {
								createWord();
								gameStart();
							}

						});


				} else {
					gameStart();
				}

			});

	} else {

		inquirer.prompt([
			  {
			    name: "newGame",
			    message: `Game over. The word was ${currentWord}. Would you like to play again?`,
			    type: "confirm",
			    default: false
			  }
			]).then(function(data) {

				if (data.newGame) {
					createWord();
					gameStart();
				}

			});


	}

}

createWord();

gameStart();



