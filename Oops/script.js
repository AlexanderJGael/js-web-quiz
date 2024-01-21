var quizEl = $(".quiz");
var quizHeader = $("<h2></h2>").text("Kingdom Hearts Quiz");
var quizText = $("<p></p>").text("Can you find all the correct answers before time runs out?")
var startButton = $("<button></button>").addClass("startButton").text("Start Quiz");
var timer = 60;
var timerEl = $("<h2></h2>").text(timer)
var currentQuestion = 0;
var playerScore = 0;

/* Hold the values for each question */
var quizEntries = [
  {
    question: "Who is the most powerful mage in Kingdom Hearts?",
    choices: ["Aqua", "Yen Sid", "Donald Duck", "Merlin"],
    correctAnswer: "Donald Duck",
    alertText: "In Kingdom Hearts III, Donald Duck performs the spell 'Zetaflare', making him more powerful than even the Dragon god, Bahamut, at the time of release!"
  },
  {
    question: "Which character was NOT 'Norted'?",
    choices: ["Larxene", "Riku", "Aqua", "Xigbar"],
    correctAnswer: "Aqua",
    alertText: "Though she temporarily lost herself to the darkness, Aqua was never one of Xehanort's vessels."
  },
  {
    question: "Which character does Sora first encounter in Traverse Town?",
    choices: ["Leon", "Cloud", "Squall", "Axel"],
    correctAnswer: "Leon",
    alertText: "Originally called 'Squall' in Final Fantasy VIII, Leon was renamed in Kingdom Hearts."
  },
  {
    question: "What is the identity Master of Masters?",
    choices: ["Sora", "Demyx", "Luxord", "None of the Above"],
    correctAnswer: "None of the Above",
    alertText: "Though there are many theories on the identity of the Master of Masters, it has not yet been revealed."
  },
  {
    question: "How many Kingdom Hearts games have been released as of January 2024?",
    choices: ["13", "24", "5", "3"],
    correctAnswer: "13",
    alertText: "According to Wikipedia, there have been 13 Kingdom Hearts titles released to date."
  },
];

function highScoresList() {
  quizEl.empty()
  confirm("Build 'highScoreList' function");
}

function endGame() {
  timerEl.empty();
  quizEl.empty();
  var highScores = $("<h2></h2>").text("Highscores");
  quizEl.append(highScores);
  userInput = $("<input></input>")
    .attr("placeholder", "Player Initials")
    .attr("input", "text")
    .val("");
  userInput = userInput;
  quizEl.append(userInput);
  var submitScore = $("<button></button>").text("Submit");
  quizEl.append(submitScore);

  submitScore.click(function() {
    console.log(userInput.val() + " - " + playerScore + "/5");
    highScoresList();
  });
};

function startTimer() {
  confirm("Build 'startTimer' function")
};

function updateTimer() {
  confirm("Build 'updateTimer' function!");
};

/* Update player score and display alert */
function handleCorrect() {
  alert("Correct!" + "\n\n" + quizEntries[currentQuestion].alertText);
  playerScore++;
  console.log(playerScore);
  currentQuestion++;
  if (currentQuestion < quizEntries.length && timer > 0) {
    generateQuiz();
  } else {
    endGame();
  };
};

/* Update timer and display alert */
function handleIncorrect() {
  alert("Incorrect!" + "\n\n" + quizEntries[currentQuestion].alertText);
  playerScore = playerScore;
  console.log(playerScore);
/*   timer -= 10;
  console.log(timer); */
  currentQuestion++;
  if (currentQuestion < quizEntries.length && timer > 0) {
    generateQuiz();
  } else {
    endGame();
  };
};

/* Generate ethe question elements and text */
function generateQuiz() {
  quizEl.empty();

  quizHeader.text(quizEntries[currentQuestion].question);
  quizEl.append(quizHeader);
  var correctAnswer = quizEntries[currentQuestion].correctAnswer;
    
  quizEntries[currentQuestion].choices.forEach(function(choice) {
    var quizChoices = $("<button></button>")
      .text(choice)
      .click(function() {
        if (quizChoices.text() == correctAnswer) {
          handleCorrect();
          } else {
          handleIncorrect();
        };
      });
      quizEl.append(quizChoices);
  });
};

/* Create elements and begin the quiz */
$(function() {
  quizEl.append(quizHeader);
  quizEl.append(quizText);
  quizEl.append(startButton);

  startButton.click(function() {
    startTimer();
    $(".startButton").hide();
    generateQuiz();
  });
});