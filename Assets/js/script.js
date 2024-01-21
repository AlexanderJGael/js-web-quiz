var startButton = document.getElementById("startButton");
var startCard = document.getElementById("startCard");
var cardContainer = document.getElementsByClassName("cardContainer");
var userScore = 0;
var timerElement = document.getElementById("timer");
var countdownInterval
var timeLeft = 60;

var trueButton = document.querySelector(".trueButton");
var falseButton = document.querySelector(".falseButton");
var cardText = document.querySelector("p");
var cardHeader = document.querySelector("#cardHeader");
var buttonOne = document.querySelector("#buttonOne");
var buttonTwo = document.querySelector("#buttonTwo");
var buttonThree = document.querySelector("#buttonThree");
var buttonFour = document.querySelector("#buttonFour");
var alertText = document.querySelector("#alertText");

function updateCountdown() {
    if (timeLeft > 0) {
        timeLeft --;
        timerElement.textContent = "Time remaining: " + timeLeft;
    } else {
        clearInterval(countdownInterval);
        timerElement.textContent = "Time's up!";
    };
};

function handleTrue() {
    userScore += 20;    
    console.log(userScore);
};

function handleFalse() {
    timeLeft -= 10;
    updateCountdown();
};

/* Start the quiz and begin the quiz */
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    countdownInterval = setInterval(updateCountdown, 1000);
    firstQuestion();
});

function firstQuestion() {
    var donaldFact = "As of the release of Final Fantasy XVI, Bahamut reclaimed his crown.";

    startButton.style.display = "none"
    cardText.style.display = "none"; 

    cardHeader.textContent = "Donald Duck is a more powerful mage than Bahamut:";
    buttonOne.textContent = "True";
    buttonTwo.textContent = "False";

    buttonOne.style.display = "block";
    buttonTwo.style.display = "block";


    trueButton.addEventListener("click", function() {
        handleTrue();
        secondQuestion();
        alert("Correct! " + donaldFact);
    }, {once:true});
    falseButton.addEventListener("click", function() {
        handleFalse();
        secondQuestion();
        alert("Incorrect! " + donaldFact);
        alert("-10 seconds");
    }, {once:true});
};

function secondQuestion() {
    var leonFact = "Originally named 'Squall', this Final Fantasy VIII protagonist was renamed 'Leon' in 2003's 'Kingdom Hearts'";
    buttonOne.classList.replace("trueButton", "falseButton");
    buttonThree.classList.replace("falseButton", "trueButton");

    cardHeader.textContent = "What is the name of the character who wields a Gunblade?";
    buttonOne.textContent = "Squall"
    buttonTwo.textContent = "Cloud" 
    buttonThree.textContent = "Leon";
    buttonFour.textContent = "Clive";

    buttonThree.style.display = "block";
    buttonFour.style.display = "block";

    trueButton = document.querySelector(".trueButton");
    falseButton = document.querySelector(".falseButton");

    trueButton.addEventListener("click", function() {
        handleTrue();
        thirdQuestion();
        alert("Correct! " + leonFact);
    }, {once:true});
    falseButton.addEventListener("click", function() {
        handleFalse();
        thirdQuestion();
        alert("Incorrect! " + leonFact);
        alert("-10 seconds");
    }, {once:true});
};

function thirdQuestion() {
    var bbbFact = "";
    buttonThree.classList.replace("trueButton", "falseButton");
    buttonTwo.classList.replace("falseButton", "trueButton");

    cardHeader.textContent = "What is the title of the game immediately proceeding Kingdom Hearts III?";
    buttonOne.textContent = "Kingdom Hearts 3D: Dream Drop Distance"
    buttonTwo.textContent = "Kingdom Hearts 0.2: A Fragmentary Passage" 
    buttonThree.textContent = "Kingdom Hearts Squared: Pages Beyond the End";
    buttonFour.textContent = "Epic Mickey";

    trueButton = document.querySelector(".trueButton");
    falseButton = document.querySelector(".falseButton");

    trueButton.addEventListener("click", function() {
        handleTrue();
        fourthQuestion();
        alert("Correct! " + bbbFact);
    }, {once:true});
    falseButton.addEventListener("click", function() {
        handleFalse();
        fourthQuestion();
        alert("Incorrect! " + bbbFact);
        alert("-10 seconds");
    }, {once:true});
};

function fourthQuestion() {
    buttonTwo.classList.replace("trueButton", "falseButton");
    buttonOne.classList.replace("falseButton", "trueButton");

    cardHeader.textContent = "What game immediately follows Kingdom Hearts III?";
    buttonOne.textContent = "Kingdom Hearts: Melody of Memory"
    buttonTwo.textContent = "Kingdom Hearts: Dark Road" 
    buttonThree.textContent = "Kingdom Hearts 3d: Dream Drop Distance";
    buttonFour.textContent = "Sudoku";

    trueButton = document.querySelector(".trueButton");
    falseButton = document.querySelector(".falseButton");

    trueButton.addEventListener("click", function() {
        handleTrue();
        lastQuestion();
    }, {once:true});
    falseButton.addEventListener("click", function() {

        handleFalse();
        lastQuestion();
    }, {once:true});
};