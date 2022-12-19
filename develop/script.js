console.log("hello world");
var ansA = document.querySelector(".Choice-A");
var ansB = document.querySelector(".Choice-B");
var ansC = document.querySelector(".Choice-C");
var startScore = document.querySelector("#scoreMessage");

ansA.addEventListener("click", incorrect);
ansB.addEventListener("click", correct);
ansC.addEventListener("click", incorrect);

var score = 0;

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
        return nextQuestion()
     }}
    


function incorrect() {
    if (ansA && ansB) {
        document.getElementById("errorMessage").textContent = "oops! Try again!"
    }}



function scoreBoard(){
    for(score = 0; score <=-5; score-1){
        if(ansA.addEventListener("click", function(){
            startScore.textContent("Your score:" + score);
    
        })){return true}}}
