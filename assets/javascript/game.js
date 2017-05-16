
    var wordArray = ['india', 'canada', 'egypt', 'syria', 'kazakhastan'];
    var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    var word = randomWord.split([]);
    var guesses;
    var answersArray = [];
    var wins = 0;
    var guessArray = [];
    
function init() {
    randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    word = randomWord.split([]);
    answersArray = [];
    guessArray = [];
    guesses = 15;
    for (var i = 0; i < word.length; i++) {
        answersArray[i] = "_";
    }
    document.getElementById("userText").innerHTML = answersArray.join(' ');
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("guessed").innerHTML = guessArray;
    };

window.onload = function(){
    init();
};

document.onkeyup = function(input) {

    // var userInput = input.key;
    var userInput = (input.key).toLowerCase();

    //Record Countdown
    if (input.key) {
        guesses--;
        
        // add letters selected to guessArray to be published to screen
        guessArray.push(userInput);

        // Display Letters guessed in HTML
        document.getElementById("guessed").innerHTML = guessArray;
        
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

    var remaining_letters = answersArray.length;
    for (i = 0; i < answersArray.length; i++) {
        if (answersArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }

    if (remaining_letters == 0) {
            document.getElementById("userText").innerHTML = answersArray.join(" ");
            alert("YES! You guessed the word " + randomWord);
            wins++;

            init();
        }
            

    document.getElementById("userText").innerHTML = answersArray.join(' ');
  


    // Display guesses left in HTML
    document.getElementById("guesses").innerHTML = guesses;




}

