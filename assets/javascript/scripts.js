/* Momo says code */ 

// The Simon says code for the javascript file was adapted from Root Tech via youtube, links in README.md

/* variables */
userSeq = [];
momoSeq = [];
const NUM_OF_SCORE = 10;
var score = 0;
var localStorageHighScore = "MoMoHighScore";
var localStorageTheme = "MoMoTheme";
var localHighScore;
var localTheme;
var boardSound = [
    "assets/audio/elephantcub.mp3",
    "assets/audio/pig.mp3",
    "assets/audio/rattlesnake.mp3",
    "assets/audio/sealion.mp3",
];

// the code for local storage was adapted from: https://phaserjs.com/saving-high-score
localHighScore = localStorage.getItem(localStorageHighScore) == null ? 0 :
                 localStorage.getItem(localStorageHighScore);
                 $("#highest-highscore").text(localHighScore);


localTheme = localStorage.getItem(localStorageTheme) == null ? 0 :
             localStorage.getItem(localStorageTheme);

function ready() {
    if(localTheme === "summer") {
        switchSummer();
    }
    if(localTheme === "winter") {
        switchWinter();
    }
    if(localTheme === "galaxy") {
        switchGalaxy();
    }
    $(".animal-panel").click(function() {
        id = $(this).attr("id");
        activePanel(id);
    });
}


/* user pad listener */
function activePanel(id) {
    console.log("User: " + id);
    userSeq.push(id);
    addClassSound(id);

    /* check user sequence */
    if(!checkUserSeq()) {
        displayWrong();
        userSeq = [];
        return;
    }

        /* check user length */
    if(userSeq.length == momoSeq.length && userSeq.length < NUM_OF_SCORE) {
        score++;
        userSeq = [];
        momoSequence();
    }

    /* checking for winner */
    if(userSeq.length == NUM_OF_SCORE) {
        gameWinner();
    }
}


/* checking user seq against momo seq */
function checkUserSeq(i) {
    for(var i = 0; i < userSeq.length; i++) {
        if(userSeq[i] != momoSeq[i]) {
            return false;
        }
    }
    return true;
}


/* wrong function */
function displayWrong() {
    document.querySelector('.wrong-restart-button').style.display = "block";
    // code about playing audio onclick was adapted from Arunkumar via stackoverflow https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
    var wrongAudio = document.getElementById("tarzan");
    console.log("Wrong");
    $("#current-highscore").text(score);
    localHighScore = Math.max(score, localHighScore);
    localStorage.setItem(localStorageHighScore, localHighScore);
    console.log(localHighScore);
    $("#highest-highscore").text(localHighScore);
    userSeq = [];
    momoSeq = [];
    score = 0;
    if (!mute) {
        wrongAudio.play();
    }
}


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
        }
    }, 1000);
}


/* generate random number */ 
function getRandomNum() {
    var random = Math.floor(Math.random() * 4); 
    momoSeq.push(random);
}


/* add active panel */
function addClassSound(id) {
    $("#"+id).addClass("active-panel");
    playSound(id);
    setTimeout(function() {
        $("#"+id).removeClass("active-panel");
    }, 500);
}


var mute = false;

/* mute audio button */
function muteAudio() {
    document.querySelector('.mute-button').style.display = "None";
    document.querySelector('.enable-audio-button').style.display = "Inline-block";
    mute = true;   
}


/* enable audio button */
function enableAudio() {
    document.querySelector('.enable-audio-button').style.display = "None";
    document.querySelector('.mute-button').style.display = "Inline-block";
    mute = false;   
}


/* play board sound */
function playSound(id) {
    if (!mute) {
        // code about playing audio onclick was adapted from Arunkumar via stackoverflow https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
        var sound = new Audio(boardSound[id]);
        sound.play();
    }
}


/* reset game */
function resetGame() {
    userSeq = [];
    momoSeq = [];
    score = 0;
    // id;
    localStyle = "0";
    var localStyle = document.getElementById('current-highscore');
    if(localStyle) {
        localStyle.innerText = "0";
        document.getElementById('current-highscore').innerText = "0";
        document.querySelector('.start-button').style.display = "none";
        document.querySelector('.wrong-restart-button').style.display = "none";
        document.querySelector('.winner-restart-button').style.display = "none";
        momoSequence();  
    }
}


/* reset game panel */
function resetGamePanel() {
    userSeq = [];
    momoSeq = [];
    score = 0;
    document.getElementById('current-highscore').innerText = "0";
    document.querySelector('.start-button').style.display = "none";
    document.querySelector('.wrong-restart-button').style.display = "none";
    document.querySelector('.winner-restart-button').style.display = "none";
    momoSequence();  
}


/* winner function */
function gameWinner() {
    document.querySelector('.winner-restart-button').style.display = "block";
    var score = "10";
    console.log("Winner!");
    document.getElementById('current-highscore').textContent = score;
    document.getElementById('highest-highscore').textContent = score;
    localHighScore = Math.max(score, localHighScore);
    localStorage.setItem(localStorageHighScore, localHighScore);
    var winAudio = document.getElementById("applause");
    if (!mute) {
        winAudio.play();
    }
}


/* theme butttons */
function switchSummer () {
    localTheme = "summer";
    var logoElement = document.getElementById("logo");
    if (logoElement) {
        logoElement.src = "assets/icons/green-logo.png";
        document.querySelector('.game-section').style.backgroundImage ="url(assets/background-images/summer.jpg)";
        document.querySelector('body').style.backgroundColor = "#ddfee4";
        document.querySelector('.game-section-text').style.backgroundColor = "#b6fcc5";
        document.querySelector('.game-section-text').style.color = "#188163";
        localStorage.setItem(localStorageTheme, "summer");
        var gameSectionText = document.querySelectorAll(".game-section-text");
        for (var i = 0; i < gameSectionText.length; i++) {
            gameSectionText[i].style.backgroundColor = "#b6fcc5";
            gameSectionText[i].style.color = "#188163";
        }
        var buttonList = document.querySelectorAll(".theme-button");
        for (var i = 0; i < buttonList.length; i++) {
            buttonList[i].className = "theme-button theme-button-green";
        }
        var gamePanel = document.querySelectorAll(".center-button");
        for (var i = 0; i < gamePanel.length; i++) {
            gamePanel[i].style.backgroundColor = "#b6fcc5";
            gamePanel[i].style.color = "#188163";
        }
    }
}

function switchWinter () {
    localTheme = "winter";
    var logoElement = document.getElementById("logo");
    if(logoElement) {
        logoElement.src = "assets/icons/white-logo.png";
        document.querySelector('.game-section').style.backgroundImage ="url(assets/background-images/winter.jpg)";
        document.querySelector('body').style.backgroundColor = "#eeeeee";
        localStorage.setItem(localStorageTheme, localTheme);
        var gameSectionText = document.querySelectorAll(".game-section-text");
        for (var i = 0; i < gameSectionText.length; i++) {
            gameSectionText[i].style.backgroundColor = "#eeeeee";
            gameSectionText[i].style.color = "#098b90";
        }
        var buttonList = document.querySelectorAll(".theme-button");
        for (var i = 0; i < buttonList.length; i++) {
            buttonList[i].className = "theme-button theme-button-white";
        }
        var gamePanel = document.querySelectorAll(".center-button");
        for (var i = 0; i < gamePanel.length; i++) {
            gamePanel[i].style.backgroundColor = "#eeeeee";
            gamePanel[i].style.color = "#098b90";
        }
    }
}


function switchGalaxy () {
    localTheme = "galaxy";
    var logoElement = document.getElementById("logo");
    if (logoElement) {
        logoElement.src = "assets/icons/dark-logo.png";
        document.querySelector('.game-section').style.backgroundImage ="url(assets/background-images/galaxy.jpg)";
        document.querySelector('body').style.backgroundColor = "#2a1c21";
        localStorage.setItem(localStorageTheme, "galaxy");
        var gameSectionText = document.querySelectorAll(".game-section-text");
        for (var i = 0; i < gameSectionText.length; i++) {
            gameSectionText[i].style.backgroundColor = "#201317";
            gameSectionText[i].style.color = "#655379";
        }
        var buttonList = document.querySelectorAll(".theme-button");
        for (var i = 0; i < buttonList.length; i++) {
            buttonList[i].className = "theme-button theme-button-dark";
        }
        var gamePanel = document.querySelectorAll(".center-button");
        for (var i = 0; i < gamePanel.length; i++) {
            gamePanel[i].style.backgroundColor = "#201317";
            gamePanel[i].style.color = "#655379";
        }
    }
}