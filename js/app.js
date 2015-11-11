
$(document).ready(function(){

	var userNum; // declare vars first so it is avail inside/outside functions.
	var secretAnswer = Math.floor(Math.random() * 100 +1); // create random number between 1 and 100
	var userCount = 0;


	function processInput(event) {
		event.preventDefault(); // prevents form from refreshing page
		var userInput = $("#userGuess").val();  // raw form value
		console.log("raw user input string is: " + userInput); // display raw form value in console
		var userNum = parseInt(userInput, 10); // convert string to integer
		console.log("user input converted to integer is " + userNum); // display converted string
		$("#userGuess").val(''); // resets form input field
		userCount++; // increments variable which is displayed as 'Guess#_'
		$('#count').empty(); // empties previous guess #
		$('#count').append(userCount); // displays new guess #
		$("#userGuess").val('');
		if ( isNaN( userNum )) {
			// test if user input is NaN
			console.log("user input, " + userNum + " is not valid for the game.");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">Guess again. Please enter a whole number between 1 and 100.</h2>'); 
			} else if (userNum > 100 || userNum < 1) {
			// validate that the user guess is between 1 and 100
			console.log("user input, " + userNum + " is not valid for the game.");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">Guess again. Please enter a whole number between 1 and 100.</h2>');
			} else {
			console.log("user number, " + userNum + " passing over to playGame function.");
			playGame(userNum);
		};
	}

	function playGame(val) {
		var userNum = val;
		console.log("The secret answer was generated and is: " + secretAnswer); // display random number in console
		console.log("received user number from processInput function: " + userNum);  // display user number in console
		$('#guessList').append('<li>You guessed ' + userNum +'</li><br />'); // display user number on screen
		var n = userNum - secretAnswer; // difference between 2 numbers
		console.log("var n equals " + n); // display difference between 2 numbers in console
		var diff = Math.abs(n); // absolute difference between 2 numbers
		console.log("var diff equals " + diff); // display absolute difference between 2 numbers in console
		if (userNum === secretAnswer) {
			console.log("numbers match!");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">Winner Winner Chicken Dinner!</h2>');
		} else if (diff > 50) {
			console.log("guess is greater than 50 away");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">You are super ice cold freezing. Try again pal!</h2>');
		} else if (diff <= 50 && diff > 40) {
			console.log("user guess is 41 to 50 away");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">You are very cold. Try again pal!</h2>');
		} else if (diff <= 40 && diff > 30) {
			console.log("user guess is 31 to 40 away");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">You are cold. Try again pal!</h2>');
		} else if (diff <= 30 && diff > 20) {
			console.log("user guess is 21 to 30 away");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">You are lukewarm. Try again pal!</h2>');
		} else if (diff <= 20 && diff > 10) {
			console.log("user guess is 11 to 20 away");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">You are very warm. Try again pal!</h2>');
		} else if (diff <= 10 && diff > 0) {
			console.log("user guess is 1 to 10 away");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">You are hotter than hell!! So close, try again pal!</h2>');
		}
	}

	function newGame() {
		$("#userGuess").val(''); // reset form field
		userNum = 0;
		secretAnswer = Math.floor(Math.random() * 100 +1); // create random number between 1 and 100
		$('#feedback').remove();
		$('.game').prepend('<h2 id="feedback">Make your guess</h2>');
		$('#count').empty(); // empties previous guesses
		$('#count').append(0); // reset display to 0
		userCount = 0;
		$('#guessList').empty();
	}

	$('form').on('submit', processInput);
	$('.new').on('click', newGame);

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


