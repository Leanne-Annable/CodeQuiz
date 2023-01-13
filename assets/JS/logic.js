// ** A start button that when clicked a timer starts and the first question appears.
// - Questions contain buttons for each answer.
// - When answer is clicked, the next question appears
// - If the answer clicked was incorrect then subtract time from the clock **

// ** The quiz should end when all questions are answered or the timer reaches 0.
// - When the game ends, it should display their score and give the user the ability to save their initials and their score **

/* What I have:
a logic page
a questions page - Need to add questions and answers
a scores page - This is linked to the higscores HTML - will pull scores from the localScope
a High scores HTML sheet and a index HTML sheet
*/
var startButton = document.querySelector("#start");
// A start button function to activate when clicked
startButton.addEventListener("click", function(event) {
    gameStart();
})

//gamestart function
function gameStart(){
    // trigger from button - call function when start button clicked
    // start timer
    timerStart();
    // call questions and multiple choice answers
    getQuestions();
    // hide header, start quiz button and instructional text

}  

//  timer starts function
function timerStart(){
    // countdown
    // display
    // get game stop
    // stop at zero
}
    
//Timer (.timer) connected to:
    // Game start f
    // Game stop f
    // timer display
    // Incorrect answer - time deduction
    

// toggle class attribute hide
    //  start-screen
    // questions container 


//Gamestop function
function gameStop(){
    // trigger from
        //  last question or when timer reaches 0 - call gamestop in those functions
    // announces score (#end-screen) - (#final-score)
    // gets initials (#initials)
    // push to local storage 
    // show submit button - ?needs to show higscores page after?
    // show instructions
}


    
// highscore function
function showHighscores(){
    // on load, update from local storage
    // rank by score
}

// clear highscore function
    // clears LS
// Q&A function 
function getQuestions(){
    // get questions from localStorage - from questions JS
    // display the questions as buttons
    // on click
        // show correct answer or just correct/wrong underneath(for a second?)(.feedback)
        // clear
        // get new questions
}
