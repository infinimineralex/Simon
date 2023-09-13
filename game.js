var gamePattern = [];
var userClickedPattern = [];
var started = false;
const buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
//alert("gets here");
document.addEventListener("keydown", function(){
    //alert("keypress found"); har har har
    
    if(!started){
        $('body').removeClass('game-over');
        started = true;
        nextSequence();
    }
});
$("#red").on("click", handleClickRed);
$("#blue").on("click", handleClickBlue);
$("#green").on("click", handleClickGreen);
$("#yellow").on("click", handleClickYellow);
function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}
function handleClickRed(){
    $("#" + "red").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + "red" + ".mp3");
    audio.play();
    userClickedPattern.push("red");
    //console.log(userClickedPattern);
    checker(userClickedPattern.length-1);
}
function handleClickBlue(){
    $("#" + "blue").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + "blue" + ".mp3");
    audio.play();
    userClickedPattern.push("blue");
    checker(userClickedPattern.length-1);
    
}
function handleClickGreen(){
    $("#" + "green").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + "green" + ".mp3");
    audio.play();
    userClickedPattern.push("green");
    checker(userClickedPattern.length-1);
    
}
function handleClickYellow(){
    $("#" + "yellow").fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + "yellow" + ".mp3");
    audio.play();
    userClickedPattern.push("yellow");
    checker(userClickedPattern.length-1);
    
}
function nextSequence(){
    userClickedPattern = [];
    //alert("got here");
    started = true;
    $("h1").fadeOut(50);
        document.querySelector("h1").innerHTML = ("Level " + level);
        $("h1").fadeIn(400);
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    //alert(("#" + randomChosenColour));
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}
function checker(curr){
    if(gamePattern[curr] === userClickedPattern[curr]){
        console.log(true);
        //return true;
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
        }
    } else{
    console.log(false);
    document.querySelector("h1").innerHTML = ("Game over man, game over! Press any key to restart.");
    $('body').addClass('game-over');
    startOver();



    }
    //return false;
    
}


