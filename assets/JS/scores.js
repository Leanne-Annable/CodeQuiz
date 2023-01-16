// put code linked to scores here - keeps it tidy and easier to handle
var highScoresList = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");

var endScore = localStorage.getItem("highScores")
//console.log(highScores);

showHighscores();

// show the highscores
function showHighscores() { //                      ** to do **
    var highScores = JSON.parse(endScore);
    for (i = 0; i < highScores.length; i++){
        // for each entry create a list element
        var li = document.createElement("li");
        // display the user info
        li.textContent = highScores[i].initials + " - " + highScores[i].userScore;
        // append list element to ordered list
        highScoresList.appendChild(li);
    }
}

clearBtn.addEventListener("click", clearHighscores);

// clear highscore
function clearHighscores() { //                  ** done **
    // clears LS
    localStorage.clear();
    highScoresList.innerHTML = "";
}