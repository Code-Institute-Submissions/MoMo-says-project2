
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
            }, 500);
        }
    } else {
        // end game
        alert('game over');
    }
};

async function startFlashing() {
    canClick = false;
    for (const animalPanel of sequence) {
        await flash(animalPanel);
    }
    canClick = true;
}

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
    }

    var audio = document.getElementById('audio-elephant');
    var clone = audio.cloneNode(true);
    if (clone.paused) {
        clone.play();

    } else {
        clone.pause();
        clone.currentTime = 0
    }
}


// Theme buttons

// document.getElementById('theme-button-green').onclick = function () { 
//     document.getElementById('theme_css').href = '../red.css';
// };

$(document).ready(function() {
    $(".animal-panel").click(function() {
    setTimeout(startFlashing, 1000);
    });
});

$


// function switchWinter() {
//     $(".theme-button-green").addClass(".theme-button-white");
//     $(".theme-button-green").removeClass(".theme-button-green");
// }


// https://www.w3schools.com/jsref/met_document_queryselectorall.asp
// var x = document.querySelectorAll("p");
// var i;
// for (i = 0; i < x.length; i++) {
//   x[i].style.backgroundColor = "red";
// } 
// querySelectorAll makes an array, to use it we need to make a loop

function switchSummer () {
    document.getElementById('logo').src = '/assets/icons/green-logo.png';
    document.querySelector('.game-section').style.backgroundImage ="url(/assets/background-images/summer.jpg)";
    document.querySelector('body').style.backgroundColor = "#ddfee4";
    var buttonList = document.querySelectorAll(".theme-button");
    for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].className = "theme-button theme-button-green";
    }   
    // document.getElementById("mainBody").style.backgroundColor = "green";
}

function switchWinter () {
    document.getElementById("logo").src = "/assets/icons/white-logo.png";
    document.querySelector('.game-section').style.backgroundImage ="url(/assets/background-images/winter.jpg)";
    document.querySelector('body').style.backgroundColor = "#eeeeee";
    var buttonList = document.querySelectorAll(".theme-button");
    for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].className = "theme-button theme-button-white";
    } 
}

function switchGalaxy () {
    document.getElementById("logo").src = "/assets/icons/dark-logo.png";
    document.querySelector('.game-section').style.backgroundImage ="url(/assets/background-images/galaxy.jpg)";
    document.querySelector('body').style.backgroundColor = "#2a1c21";
    var buttonList = document.querySelectorAll(".theme-button");
    for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].className = "theme-button theme-button-dark";
    } 
}

