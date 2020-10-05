
// This code was adapted from Cody Seibert https://www.youtube.com/watch?v=W0MxUHlZo6U

// Game section
const elephantPanel = document.querySelector('.elephant-panel');
const pigPanel = document.querySelector('.pig-panel');
const rattlesnakePanel = document.querySelector('.rattlesnake-panel');
const sealionPanel = document.querySelector('.sealion-panel');

function getRandomAnimalPanel() {
    const animalPanel = [
        elephantPanel, 
        pigPanel, 
        rattlesnakePanel, 
        sealionPanel
    ]
    return animalPanel[parseInt(Math.random() * animalPanel.length)];
};

const sequence = [getRandomAnimalPanel()];
let sequenceToGuess = [...sequence];   


function flash(animalPanel) {
    return new Promise(function(resolve, reject) {
        animalPanel.className += ' active-panel';
        play();
        setTimeout(function() {
            animalPanel.className = animalPanel.className.replace (
                ' active-panel',
                ''
            );
            setTimeout(function() {
                resolve();
            }, 500);
        }, 500);
    });
};

let canClick = false;

function animalPanelClicked(clickedPanel) {
    if (!canClick) return;
    const expectedAnimalPanel = sequenceToGuess.shift();
    if (expectedAnimalPanel === clickedPanel) {
        if (sequenceToGuess.length === 0) {
            //start new round
            setTimeout(() => {
            sequence.push(getRandomAnimalPanel());
            sequenceToGuess = [...sequence];
            startFlashing();
            }, 1500);
        };
    } else {
        // end game
        alert('game over');
    };
};

async function startFlashing() {
    canClick = false;
    for (const animalPanel of sequence) {
        await flash(animalPanel);
    };
    canClick = true;
};

// setTimeout(startFlashing, 3000); from https://stackoverflow.com/questions/54681854/run-js-functions-run-in-sequence-onclick
$(document).ready(function() {
    $(".animal-panel").click(function() {
        setTimeout(startFlashing, 1000);
    });
});


// This code was adapted from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
// This code about cloning was adapted from https://stackoverflow.com/questions/40822531/jquery-audio-how-to-allow-overlapping-sounds

let firstClickAudio = true

function play() {
    // First time we click the button we don't want audio to play to indicate that the game has not begun yet.
    if (firstClickAudio === true) {
        firstClickAudio = false
        return
    };
    var audio1 = document.getElementById('audio-elephant');
        audio1.play();
};


var clone = audio1.cloneNode(true);
    if (clone.paused) {
        clone.play();
    } else {
        clone.pause();
        clone.currentTime = 0
    };

function audioPlay() {
    audio = new Audio(); 
    document.getElementById('audio-elephant');
    audio.loop = true;
    audio.play();
};


$(document).ready(function() {
    $(".animal-panel").click(function() {
    setTimeout(startFlashing, 1000);
    });
});


function switchSummer () {
    document.getElementById('logo').src = '/assets/icons/green-logo.png';
    document.querySelector('.game-section').style.backgroundImage ="url(/assets/background-images/summer.jpg)";
    document.querySelector('body').style.backgroundColor = "#ddfee4";
    document.querySelector('.game-section-text').style.backgroundColor = "#b6fcc5";
    document.querySelector('.game-section-text').style.color = "#188163";
    var gameSectionText = document.querySelectorAll(".game-section-text");
    for (var i = 0; i < gameSectionText.length; i++) {
        gameSectionText[i].style.backgroundColor = "#b6fcc5";
        gameSectionText[i].style.color = "#188163";
    };
    var buttonList = document.querySelectorAll(".theme-button");
    for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].className = "theme-button theme-button-green";
    };   
};

function switchWinter () {
    document.getElementById("logo").src = "/assets/icons/white-logo.png";
    document.querySelector('.game-section').style.backgroundImage ="url(/assets/background-images/winter.jpg)";
    document.querySelector('body').style.backgroundColor = "#eeeeee";
    var gameSectionText = document.querySelectorAll(".game-section-text");
    for (var i = 0; i < gameSectionText.length; i++) {
        gameSectionText[i].style.backgroundColor = "#eeeeee";
        gameSectionText[i].style.color = "#098b90";
    } 
    var buttonList = document.querySelectorAll(".theme-button");
    for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].className = "theme-button theme-button-white";
    };
};

function switchGalaxy () {
    document.getElementById("logo").src = "/assets/icons/dark-logo.png";
    document.querySelector('.game-section').style.backgroundImage ="url(/assets/background-images/galaxy.jpg)";
    document.querySelector('body').style.backgroundColor = "#2a1c21";
    var gameSectionText = document.querySelectorAll(".game-section-text");
    for (var i = 0; i < gameSectionText.length; i++) {
        gameSectionText[i].style.backgroundColor = "#201317";
        gameSectionText[i].style.color = "#655379";
    };
    var buttonList = document.querySelectorAll(".theme-button");
    for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].className = "theme-button theme-button-dark";
    };
};


function incrementScore() {
// Get element with the id of hp
let el = document.getElementById("current-highscore");
// Set currentCount to the text of the element
let currentCount = el.innerText;
if (currentCount == 100) {
        alert("You've won!!");
    } else {
        // Decrement current count and set it as the new text in our element
        el.innerText = ++currentCount;
    };
};

