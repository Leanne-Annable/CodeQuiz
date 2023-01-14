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

//Query selectors - enable easier selecting later on
var timer = document.querySelector(".timer");
var time = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");



// A start button function to activate when clicked
startButton.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
        gameStart();
    }
})

// gamestart function
// var isWin = false - might not need
function gameStart(){ //                        ** WORKING ON **
    // trigger from button - call function when start button clicked
    // might not need --- create a variable to be able to select if the game is won or not
    // this might be needed later on if the user picks all correct answers in time
    // isWin = false --- might not need
    // start timer
    timerStart(); // function done did
    // hide start page by changing class
    startScreen.setAttribute("class", "hide");    
    // call questions and multiple choice answers
    questions.removeAttribute("class")
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
        time.textContent = timeLeft
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

// Q&A function 
function getQuestions(){ //                     ** WORKING ON **
    // get questions from localStorage - from questions JS
    // Questions
    index = 0
    if (index < storedQuestions.length || timeLeft > 0) {
        questionTitle.textContent = storedQuestions[i].questionText;
        // for (i = 0, i < storedQuestions.length||timeLeft > 0; i++;) {
        //     questionText.textContent = storedQuestions[i].question
        // }

        // Use the retrieved information to display the questions and answers as multiple choice options
    }
    // display the questions as buttons

    // on click
        // show correct answer or just correct/wrong underneath(for a second?)(.feedback)
        // clear
        // get new questions
}

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
    localStorage.clear()
}
    