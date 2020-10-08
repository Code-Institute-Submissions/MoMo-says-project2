/* Momo says code */ 

/* variables */
userSeq = [];
momoSeq = [];
const NUM_OF_SCORE = 20;
var score = 0;
var localStorageScore = "MoMoSays";
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


let firstClickAudio = true

$(document).ready(function () {
$(".animal-panel").click(function() {
    if (firstClickAudio === true) {
        firstClickAudio = false
        momoSequence();
        return
    };
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
        alert("Congratulations, you win!");
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
    var wrongAudio = document.getElementById("tarzan");
    console.log("Wrong");
    $("#current-highscore").text(score+", wrong");
    localHighScore = Math.max(score, localHighScore);
    localStorage.setItem(localStorageScore, localHighScore);
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