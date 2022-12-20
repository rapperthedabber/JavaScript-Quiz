console.log("hello world");
var ansA = document.querySelector(".Choice-A");
var ansB = document.querySelector(".Choice-B");
var ansC = document.querySelector(".Choice-C");
var startScore = document.querySelector("#scoreMessage");
var lastQuestion = false;

ansA.addEventListener("click", incorrect);
ansB.addEventListener("click", correct);
ansC.addEventListener("click", incorrect);

var score = 0;
var timer = document.querySelector("#timer");
var time = 60;
var interval = setInterval(() => {
    time --
    timer.textContent = time;
    if(time <= 0){
        endQuiz();
    }
}, 1000);

function displayScore(){
    var scores= JSON.parse(window.localStorage.getItem("highScores")) || []
    scores.sort(function(a,b){
        return b.score - a.score
       
    })
    for(i =0; i < scores.length; i++){
            var liEl = document.createElement("li")
            liEl.textContent = i+1+ ". " + scores[i].initials + " - " + scores[i].score
            document.querySelector("#scoreList").appendChild(liEl)

    }
}

function endQuiz(){
    clearInterval(interval);
    document.querySelector("#game").classList.add("hide");
    document.querySelector(".Result").classList.remove("hide");
    document.querySelector("#score").textContent = time;
    var initialsEl = document.querySelector("#initials");
    document.querySelector("#submitBtn").addEventListener("click", function(){
        if(!initialsEl.value){
            alert("You did not give us any initials");
        }else{
            var scores= JSON.parse(window.localStorage.getItem("highScores")) || []
            var newScore = {
                initials: initialsEl.value, score: time
            } 
            scores.push(newScore);
            window.localStorage.setItem("highScores", JSON.stringify(scores))
            document.querySelector(".Result").classList.add("hide")
            document.querySelector(".leaderBoard").classList.remove("hide")
            displayScore();
        }
    })
}
    function nextQuestion() {
        document.getElementById("JavaScript").textContent = "What is a boolean?"
        document.getElementById("color1").textContent = "A. third-party API";
        document.getElementById("color2").textContent = "B. true or false";
        document.getElementById("color3").textContent = "C. a Array";

        if( ansB.addEventListener("click", function(){
            document.getElementById("errorMessage").textContent = "correct";
            return nextQuestion2();
        })){ return true;}
    }
    
    function nextQuestion2() {
        document.getElementById("JavaScript").textContent = "What is JQuery?"
        document.getElementById("color1").textContent = "A built in JavaScript API";
        document.getElementById("color2").textContent = "A third-party API";
        document.getElementById("color3").textContent = "None of the above";

         if(ansB.addEventListener("click", function(){
            document.getElementById("errorMessage").textContent = "correct";
            return nextQuestion3();})){return true;}

         }

    function nextQuestion3(){
        document.getElementById("JavaScript").textContent = "What is console.log()?"
        document.getElementById("color1").textContent = "It is used to return a alert prompt";
        document.getElementById("color2").textContent = "It is used mostly to test if code is working in the Inspect area";
        document.getElementById("color3").textContent = "It is not a JavaScript code";

        if(ansB.addEventListener("click", function(){
            document.getElementById("errorMessage").textContent = "correct";
            return nextQuestion4();
        })){return true;}}

    function nextQuestion4(){
        lastQuestion = true;
        document.getElementById("JavaScript").textContent = "Which one is a third-party API?"
        document.getElementById("color1").textContent = "Bootstrap";
        document.getElementById("color2").textContent = "Both A and C";
        document.getElementById("color3").textContent = "jQuery";

        if(ansB.addEventListener("click", function(){
            document.getElementById("errorMessage").textContent = "correct";
        })){return true;}}



function correct() {
    ansB.addEventListener("click", correct);
    if (document.getElementById("color2").textContent = "B. Gives dynamic to your website") {
        document.getElementById("errorMessage").textContent = "correct";
        if(lastQuestion === false){
            nextQuestion();
        }else{
            endQuiz();
        }
     }}
    


function incorrect() {
    if (ansA || ansC) {
        document.getElementById("errorMessage").textContent = "oops! Try again!"
    }}



function scoreBoard(){
    for(score = 0; score <=-5; score-1){
        if(ansA.addEventListener("click", function(){
            startScore.textContent("Your score:" + score);
    
        })){return true}}}
