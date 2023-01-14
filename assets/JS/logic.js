// ** A start button that when clicked a timer starts and the first question appears. 
// - Questions contain buttons for each answer.
// - When answer is clicked, the next question appears
// - If the answer clicked was incorrect then subtract time from the clock **

// ** The quiz should end when all questions are answered or the timer reaches 0.
// - When the game ends, it should display their score and give the user the ability to save their initials and their score **

/* What I have:
a logic page
a questions page
a scores page - This is linked to the higscores HTML - will pull scores from the localScope
a High scores HTML sheet and a index HTML sheet
*/

var startButton = document.querySelector("#start");
// A start button function to activate when clicked
startButton.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
        gameStart();
    }
})



//gamestart function
var isWin = false
function gameStart(){ //                        ** WORKING ON **
    // trigger from button - call function when start button clicked
    // create a variable to be able to select if the game is won or not
    // this will be needed later on if the user picks all correct answers in time
    isWin = false
    // start timer
    timerStart(); // function done did
    // show timer
    //timerDisplay.style.display = "block";
    // hide header, start quiz button and instructional text
    document.querySelector(".start").classList.toggle("hide");
    // call questions and multiple choice answers
    getQuestions(); //                             ** to do !! **
}

//Timer connected to:
    // Game start f - done
    // Game stop f - add questions and link when completed
    // timer display - done
    // Incorrect answer - time deduction

// set the starting time
var timeLeft = 75
// timer starts function                  
function timerStart(){    //                   ** done **
    // countdown
    countDown = setInterval(function(){
        // replaces time on screen from 0 to timeLeft
        document.getElementById("time").textContent = timeLeft
        // reduces the time to enable countdown feature
        timeLeft --;
        // set instructions for different end of game scenarios
        if (timeLeft >= 0){
            //tests if win condition is met
            if (isWin && timeLeft > 0){
                // stop timer
                clearInterval(countDown);
                gameStop();                           
            }
        }
        // if time runs out
        if (timeLeft === 0){
            clearInterval(countDown);
            gameStop();                             
        }
        // set interval to be 1 second
    }, 1000);
}
    

// toggle class attribute 'hide'
    //  start-screen - now hides when start button is clicked
    //               - need to reappear when back on main screen after game end
    // questions container 


//Gamestop function
function gameStop(){ //                         ** to do **
    // hide timer
    timerDisplay.style.display = "none";
    // trigger from
        //  last question or when timer reaches 0 - call gamestop in those functions
    // announces score (#end-screen) - (#final-score)
    // gets initials (#initials)
    // push to local storage 
    // show submit button - ?needs to show higscores page after?
    // show instructions
}
    
// highscore function
function showHighscores(){ //                      ** to do **
    // on load, update from local storage
    // rank by score
}

// clear highscore function
function clearHighscores(){ //                  ** to do **
    // clears LS
}
    
// Q&A function 
function getQuestions(){ //                     ** WORKING ON **
    // get questions from localStorage - from questions JS
    for (var i = 1; i <= questions.length; i++) {
        var currentQuestion = localStorage.getItem("question" + i);
        var currentChoices = localStorage.getItem("choices" + i);
        var currentAnswer = localStorage.getItem("answer" + i);
        // Use the retrieved information to display the questions and answers as multiple choice options
    }
    // display the questions as buttons

    // on click
        // show correct answer or just correct/wrong underneath(for a second?)(.feedback)
        // clear
        // get new questions
}
