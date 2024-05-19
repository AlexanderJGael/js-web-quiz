const bodyEl = $("body");
var quizEl = $(".quiz");
var quizHeader = $("<h2></h2>").text("Kingdom Hearts Quiz");
var quizText = $("<p></p>").text("Can you find all the correct answers before time runs out?")
var startButton = $("<button></button>").addClass("startButton").text("Start Quiz");
var timer = 60;
var timerEl = $("<h2></h2>").text(timer)
var currentQuestion = 0;
var playerScore = 0;
let timerDisplayed = false;

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
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  quizEl.empty
  const highScoresList = $("<ul></ul>");
  for (let i = 0; i < highScores.length; i++) {
    const highScoreItem = $("<li></li>").text(highScores[i].initials + " - " + highScores[i].score + "/5");
    highScoresList.append(highScoreItem);
  }
  const restartButton = $("<button></button>").text("Restart?");
  highScoresList.append(restartButton);
  restartButton.click(function(event) {
    event.preventDefault();
    location.reload();
  })
  quizEl.append(highScoresList);
};

function endGame() {
  timerDisplayed = false;
  timerEl.hide();
  timerEl.empty();
  quizEl.empty();
  var finalScore = $("<h2></h2>").text("Your final score is: " + playerScore + "/5");
  quizEl.append(finalScore);
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
    const userScore = {
      initials: userInput.val(),
      score: playerScore
    };
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    if (!Array.isArray(highScores)) {
      highScores = [highScores];
    }
    highScores.push(userScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    highScoresList();
  });
};

function startTimer() {
  let timer = 60;
  timerEl.show();
  const timerInterval = setInterval(function() {
    if (!timerDisplayed) {
      const timerInterval = setInterval(function () {
        timer--;
        timerEl.text(timer);
        if (timer <= 0) {
          clearInterval(timerInterval);
          endGame();
        }
      }, 1000);
      timerDisplayed = true;
    }
  })
};

function updateTimer() {
  confirm("Build 'updateTimer' function!");
};

/* Updates player score and display alert */
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

/* Updates timer and display alert */
function handleIncorrect() {
  alert("Incorrect!" + "\n\n" + quizEntries[currentQuestion].alertText);
  playerScore = playerScore;
  console.log(playerScore);
  timer -= 10;
  currentQuestion++;
  if (currentQuestion < quizEntries.length && timer > 0) {
    generateQuiz();
  } else {
    endGame();
  };
};

/* Generates the question elements and text */
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
  bodyEl.append(timerEl);
  bodyEl.append(quizEl);

  timerEl.hide();
  
  startButton.click(function() {
    startTimer();
    $(".startButton").hide();
    generateQuiz();
  });
});