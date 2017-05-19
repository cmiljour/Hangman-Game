    
    // Setup the environment

    var wordArray = ['INDIA', 'CANADA', 'EGYPT', 'SYRIA', 'KAZAKHSTAN', 'MEXICO', 'ZIMBABWE', 'THAILAND'];
    var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    var word = randomWord.split([]);
    var guesses;
    var answersArray = [];
    var wins = 0;
    var guessArray = [];
    var badArray = [];

    

    // Create a function to make it easier to reload game when win or lose
function init() {

    // pick different word when game restarts
    randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    word = randomWord.split([]);
    // reinitialize variables to starting state
    answersArray = [];
    guessArray = [];
    badArray = [];
    guesses = 15;

    // set the user guess line to begin with all "_"
    for (var i = 0; i < word.length; i++) {
        answersArray[i] = "_";
    }
    // display fresh HTML text (because old text will still display if not)
    document.getElementById("userText").innerHTML = answersArray.join(' ');
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("guessed").innerHTML = guessArray;
    };
    // when the page loads animate "press any key" text and initialize game function
window.onload = function(){
    $('#divanimate').animate({ 'left': '+=500px' },2000);
    $('#divanimate').animate({ 'left': '-=300px' },2000);
    init();
};
    // when a key is pressed
document.onkeyup = function(input) {
    // remove the blinking animated test started on the window.onload
    $(".start").remove();
    // on the next key entered, run the block of code
    document.onkeyup = function(input) {
    // capture the user key press (input.key) and assign it to a variable
    var userInput = (input.key).toUpperCase();

    // run through game logic based on key press
    if (input.key) {
        // if user's letter is not in the chosen word array, guesses--
        if (((word.includes(userInput)) == false) & ((badArray.includes(userInput)) == false))  {
            guesses--;
            badArray.push(userInput);

        }
        // add letters guessed to guessArray to be published to screen
        guessArray.push(userInput);

        // Display Letters guessed in HTML
        document.getElementById("guessed").innerHTML = guessArray;
        
        
        // compare user's letter to the word array and if it finds
        // a match, copy the location and letter to the answers array
        for (var i = 0; i < word.length; i++) {
            if (userInput === word[i]) {
                answersArray[i] = word[i];  
             }
        }

        if (guesses === 0) {
        alert("Game Over!")
        init();
        }
    }

    // Setup a variable to go through the answers array and find how many letters are left 
    // to be guessed.
    var remaining_letters = answersArray.length;
    for (i = 0; i < answersArray.length; i++) {
        if (answersArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }

    // If all letters guessed, display the alert
    if (remaining_letters == 0) {
            document.getElementById("userText").innerHTML = answersArray.join(" ");
            alert("YES! You guessed the word " + "\"" + randomWord + "\"");
            wins++;

            init();
        }
            
    // change the HTML text to reflect the newly guessed letter
    document.getElementById("userText").innerHTML = answersArray.join(' ');
    // Display guesses left in HTML after every uns
            document.getElementById("guesses").innerHTML = guesses;



}

}

