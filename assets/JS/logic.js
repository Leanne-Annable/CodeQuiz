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

// other variables called multiple times
var index = 0;
var timeLeft = 75;
var score = 0;

// created elements
var listedChoices = document.createElement("ol");
choices.appendChild(listedChoices);
var lineBreak = document.createElement("hr");
choices.appendChild(lineBreak);
var answer = document.createElement("p")
answer.setAttribute("id", "answer");
answer.setAttribute("class", "hide");
choices.appendChild(answer);

// A start button function to activate when clicked
startButton.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button") === true) {
        gameStart();
    }
});

// gamestart function
function gameStart() { //                        ** done **
    // trigger from button - call function when start button clicked
    // start timer
    timerStart();
    // hide start page by changing class
    startScreen.setAttribute("class", "hide");
    // call questions and multiple choice answers
    questions.removeAttribute("class");
    getQuestion();
};

// timer starts function                  
function timerStart() {    //                   ** done **
    // replaces time on screen from 0 to timeLeft
    time.textContent = timeLeft
    // countdown
    countDown = setInterval(function () {
        // reduces the time to enable countdown feature
        timeLeft--;
        // show the new time after each countdown
        time.textContent = timeLeft
        // set instructions for different end of game scenarios
        if (timeLeft >= 0) {
            //tests if win condition is met
            if (index >= questions.length && timeLeft > 0) {
                // stop timer
                clearInterval(countDown);
                gameStop();
            } else if (timeLeft === 0) {
                // if time runs out
                gameStop();
            }
        }    // set interval to be 1 second
    }, 1000);
};

// Q&A function 
function getQuestion() {     //                  ** done **
    // Questions
    if (index < storedQuestions.length && timeLeft > 0) {
        // check to see if the answer was correct
        if (answer.getAttribute("class") === "") {
            setTimeout(function () {
                answer.setAttribute("class", "hide");
            }, 1000);
        };
        //pull up the question title to screen
        questionTitle.textContent = storedQuestions[index].questionText;
        // bring up the choices, looping through to make each one a button
        for (i = 0; i < storedQuestions[index].choices.length; i++) {
            // create a button element for choices
            var choicesButton = document.createElement("button");
            // give the button an id of button to link to the css
            choicesButton.setAttribute("id", "button" + i);
            // set the text to each of the choices available
            choicesButton.textContent = storedQuestions[index].choices[i];
            // append each of the choices buttons to the list
            listedChoices.appendChild(choicesButton);
        }
    }
    else {
        gameStop();
    }
};
// on click - check answers 
// show correct answer or just correct/wrong underneath(for a second?)(.feedback)
// clear
// get new questions
choices.addEventListener("click", function (event) {
    event.preventDefault();
    var answer = document.querySelector("#answer");
    // changing the class from hidden
    answer.setAttribute("class", "");
    // made a variable so that the choice clicked is stored
    var chosenAnswer = event.target.textContent;
    // Getting the correct answer from questions.js
    var correctAnswer = storedQuestions[index].answer;
    // if answer is correct, show correct! message 
    if (correctAnswer === chosenAnswer) {
        answer.textContent = "Correct!";
    } else {
        //if incorrect removing 10 seconds from timeLeft
        timeLeft -= 10;
        answer.textContent = "Wrong!";
    }
    // move the index number on by one to get the next set of questions
    index += 1;
    // check that there are more questions left
    if (index < questionSource.length) {
        // clear the current question and show next question
        clearQuestion();
        getQuestion();
    } else {
        gameStop();
    }
});

// clear the choices available 
function clearQuestion() {
    // go through each of the choices and clear them
    for (i = 0; i < storedQuestions[index].choices.length; i++) {
        // select each of the pre-made choicesButton by their ID elements
        var choicesButton = document.getElementById("button" + i);
        // remove the choices from the list by selecting the parent element and removing the child
        choicesButton.parentNode.removeChild(choicesButton);
    }
}

//Gamestop function
function gameStop() { //                         ** to do **
    // hide the questions and show the end-screen html
    questions.setAttribute("class", "hide");
    endScreen.setAttribute("class", "");
    // stop the timer
    clearInterval(countDown);
    // add time left to the score variable
    score = score + timeLeft;
    //display the final score
    finalScore.textContent = score;
};

// highscore function
function showHighscores() { //                      ** to do **
    // on load, update from local storage
    // rank by score
}

// clear highscore function
function clearHighscores() { //                  ** to do **
    // clears LS
    localStorage.clear()
}
