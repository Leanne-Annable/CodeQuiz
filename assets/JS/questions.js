// Store questions and answers here to keep code tidier

var questions = [
    {
        questionText: "Q1. Commonly used data types DO NOT include: ",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        questionText: "Q2. The condition in an if/else statement is enclosed within: ",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets"   
    },
    {
        questionText: "Q3. Arrays in Javascript can be used to store: ",
        choices: ["numbers and strings", "other strings", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        questionText: "Q4. String Values must be enclosed within _______ when being assigned to variables: ",
        choices: ["commas", "curly brackets", "quotation marks", "parentheses"],
        answer: "quotation marks"
    }
]

for (var i = 0; i < questions.length; i++) {
    // Store each question and answer in local storage
    localStorage.setItem("question" + (i + 1), questions[i].questionText);
    localStorage.setItem("choices" + (i + 1), questions[i].choices);
    localStorage.setItem("answer" + (i + 1), questions[i].answer);
    }
