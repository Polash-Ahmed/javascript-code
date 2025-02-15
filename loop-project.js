function guessTheNumber(difficulty) {
  let randomNumber;
  let attempts = 0;
  let maxAttempts;
  let range;

  // Set difficulty-based parameters
  switch (difficulty) {
    case "easy":
      range = 10;
      maxAttempts = 5;
      randomNumber = Math.floor(Math.random() * 10) + 1;
      break;
    case "medium":
      range = 100;
      maxAttempts = 7;
      randomNumber = Math.floor(Math.random() * 100) + 1;
      break;
    case "hard":
      range = 1000;
      maxAttempts = 10;
      randomNumber = Math.floor(Math.random() * 1000) + 1;
      break;
    default:
      console.error('Invalid difficulty level. Choose "easy", "medium", or "hard".');
      return; // Exit the function if difficulty is invalid
  }

  console.log(`Random number: ${randomNumber}`); // For debugging

  // Get user input and check guesses
  while (attempts < maxAttempts) {
    let guess = parseInt(
      prompt(
        `Guess a number between 1 and ${range} (inclusive). You have ${
          maxAttempts - attempts
        } attempts left.`
      )
    );

    if (isNaN(guess)) {
      alert("Please enter a valid number.");
      continue; // Skip the rest of the loop and prompt again
    }

    attempts++; // Increment the attempt counter

    if (guess === randomNumber) {
      alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
      return; // Exit the function if the guess is correct
    } else if (guess < randomNumber) {
      alert("Too low! Try again.");
    } else {
      alert("Too high! Try again.");
    }
  }

  // If the user runs out of attempts
  alert(`Sorry, you ran out of attempts. The correct number was ${randomNumber}.`);
}

// Get user input for difficulty
let difficulty = prompt("Choose difficulty (easy, medium, hard)").toLowerCase();
guessTheNumber(difficulty);
