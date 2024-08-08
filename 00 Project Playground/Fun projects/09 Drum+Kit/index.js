
// get number of buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// store sound effects in an object
var soundEffects = {
    "w": new Audio("./sounds/tom-1.mp3"),
    "a": new Audio("./sounds/tom-2.mp3"),
    "s": new Audio("./sounds/tom-3.mp3"),
    "d": new Audio("./sounds/tom-4.mp3"),
    "j": new Audio("./sounds/snare.mp3"),
    "k": new Audio("./sounds/crash.mp3"),
    "l": new Audio("./sounds/kick-bass.mp3")
};

// add event listener to each button using for loop
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("keydown", function() {
        var key = this.innerText.toLowerCase();
        soundEffects[key].play();
        //alert("I clicked on " + key);
        buttonAnimation(event.key);
}); 
};

// add animation to button
var buttonAnimation = function(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// detect key press and play sound
var keydown = document.addEventListener("keydown", function(event) {
    soundEffects[event.key].play();
    buttonAnimation(event.key);
});



