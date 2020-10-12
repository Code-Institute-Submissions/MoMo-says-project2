/* Momo says code */ 

/* variables */
userSeq = [];
momoSeq = [];
const NUM_OF_SCORE = 20;
var score = 0;
var localStorageName = "MoMoSays";

var localStorageName = "SavedTheme";

var localHighScore;

var boardSound = [
"/assets/audio/elephantcub.mp3",
"/assets/audio/pig.mp3",
"/assets/audio/rattlesnake.mp3",
"/assets/audio/sealion.mp3",
];


localHighScore = localStorage.getItem(localStorageName) == null ? 0 :
                 localStorage.getItem(localStorageName);
                 $("#highest-highscore").text(localHighScore);


// let firstClickAudio = true

$(document).ready(function () {
$(".animal-panel").click(function() {
    // if (firstClickAudio === true) {
    //     firstClickAudio = false
    //     momoSequence();
    //     return
    // };
    id = $(this).attr("id");
    activePanel(id);
    })
});


/* user pad listener */
function activePanel(id) {
    console.log("User: " + id);
    userSeq.push(id);
    addClassSound(id);

    /* check user sequence */
    if(!checkUserSeq()) {
        displayWrong();
        userSeq = [];
        return
    };

        /* check user length */
    if(userSeq.length == momoSeq.length && userSeq.length < NUM_OF_SCORE) {
        score++;
        userSeq = [];
        momoSequence();
    };

    /* checking for winner */
    if(userSeq.length == NUM_OF_SCORE) {
        gameWinner();
    };
};


/* checking user seq against momo's */
function checkUserSeq(i) {
    for(var i = 0; i < userSeq.length; i++) {
        if(userSeq[i] != momoSeq[i]) {
        return false;
        };
    };
    return true
};


function displayWrong() {
    document.querySelector('.wrong-restart-button').style.display = "block";
    var wrongAudio = document.getElementById("tarzan");
    console.log("Wrong");
    $("#current-highscore").text(score);
    localHighScore = Math.max(score, localHighScore);
    localStorage.setItem(localStorageName, localHighScore);
    console.log(localHighScore)
    $("#highest-highscore").text(localHighScore);
    userSeq = [];
    momoSeq = [];
    score = 0;
    if (!mute) {
        wrongAudio.play();
    };
};


/* momo sequence */
function momoSequence() {
    console.log("Score: "+score);
    $("#current-highscore").text(score);
    getRandomNum();
    var i = 0;
    var myInterval = setInterval(function() {
        id = momoSeq[i];
        console.log("Momo: "+id);
        addClassSound(id);
        i++;
        if (i == momoSeq.length) {
            clearInterval(myInterval);
        };
    }, 1000);
};


/* generate random number */ 
function getRandomNum() {
    var random = Math.floor(Math.random() * 4); 
    momoSeq.push(random);
};

/* add active panel */
function addClassSound(id) {
    $("#"+id).addClass("active-panel");
    playSound(id)
    setTimeout(function() {
        $("#"+id).removeClass("active-panel");
    }, 500);
};


/* mute button */
let mute = false


function muteAudio() {
    document.querySelector('.mute-button').style.display = "None";
    document.querySelector('.enable-audio-button').style.display = "Inline-block";
    mute = true   
};


function enableAudio() {
    document.querySelector('.enable-audio-button').style.display = "None";
    document.querySelector('.mute-button').style.display = "Inline-block";
    mute = false   
};


/* play board sound */ 
function playSound(id) {
    if (!mute) {
        var sound = new Audio(boardSound[id]);
        sound.play();
    };
};


function resetGame() {
    userSeq = [];
    momoSeq = [];
    score = 0;
    document.getElementById('current-highscore').innerText = "0";
    momoSequence();  
};


function resetGamePanel() {
    userSeq = [];
    momoSeq = [];
    score = 0;
    document.getElementById('current-highscore').innerText = "0";
    document.querySelector('.start-button').style.display = "none";
    document.querySelector('.wrong-restart-button').style.display = "none";
    document.querySelector('.winner-restart-button').style.display = "none";
    momoSequence();  
};


function gameWinner() {
    document.querySelector('.winner-restart-button').style.display = "block";
};


/* theme butttons */
function switchSummer () {
    document.getElementById('logo').src = '/assets/icons/green-logo.png';
    document.querySelector('.game-section').style.backgroundImage ="url(/assets/background-images/summer.png)";
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
    var gamePanel = document.querySelectorAll(".center-button");
    for (var i = 0; i < gamePanel.length; i++) {
        gamePanel[i].style.backgroundColor = "#b6fcc5";
        gamePanel[i].style.color = "#188163";
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
    }; 
    var buttonList = document.querySelectorAll(".theme-button");
    for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].className = "theme-button theme-button-white";
    }; 
    var gamePanel = document.querySelectorAll(".center-button");
    for (var i = 0; i < gamePanel.length; i++) {
        gamePanel[i].style.backgroundColor = "#eeeeee";
        gamePanel[i].style.color = "#098b90";
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
    var gamePanel = document.querySelectorAll(".center-button");
    for (var i = 0; i < gamePanel.length; i++) {
        gamePanel[i].style.backgroundColor = "#201317";
        gamePanel[i].style.color = "#655379";
    };
};