//New Simon says code 

/* variables */
userSeq = [];
momoSeq = [];
const NUM_OF_SCORE = 20;
var score = 0;
var boardSound = [
"/assets/audio/elephantcub.mp3",
"/assets/audio/pig.mp3",
"/assets/audio/rattlesnake.mp3",
"/assets/audio/sealion.mp3",
];

var localStorageName = "MoMoSays";
var localhighScore;

// localhighScore = localStorage.getItem(localStorageName) == null ? 0 :
//                  localStorage.getItem(localStorageName);

if(localStorage.getItem(localStorageName) == null) {
    localHighScore = 0;
} else {
    localHighScore = localStorage.getItem(localStorageName);
}

// const isStorage = "undefined" !== typeof localStorage;

/* start board sequence */
let firstClickAudio = true

$(document).ready(function () {
    $(".animal-panel").click(function() {
        if (firstClickAudio === true) {
            firstClickAudio = false
            momoSequence();
            return
        }
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
        }

        /* check user length */
    if(userSeq.length == momoSeq.length && userSeq.length < NUM_OF_SCORE) {
        score++;
        userSeq = [];
        momoSequence();
    }

    /* checking for winner */
    if(userSeq.length == NUM_OF_SCORE) {
        alert("Congratulations, you win!");
    }
};


/* checking user seq agaings momo's */
function checkUserSeq(i) {
    for(var i = 0; i < userSeq.length; i++) {
        if(userSeq[i] != momoSeq[i]) {
            return false;
        }
    }
    return true
}


function displayWrong() {
    var wrongAudio = document.getElementById("tarzan");
    console.log("Wrong");
    $("#current-highscore").text("Wrong");
    $("#highest-highscore").text(localHighScore);
    console.log(localHighScore)
    userSeq = [];
    momoSeq = [];
    score = 0;
        if (!mute) {
        wrongAudio.play();
        }
        
    // isStorage && localStorage.setItem("current-highscore", elements.scores);
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
function addClassSound(id, color) {
    $("#"+id).addClass("active-panel");
    playSound(id)
    setTimeout(function() {
        $("#"+id).removeClass("active-panel");
    }, 500);
}


// function() {
//     highScore = Math.max(score, highScore);
//     localStorage.setItem(localStorageName, highScore);

	
function setHighScore() {
    localHighScore = Math.max(score, localhighScore);
    localStorage.setItem(localStorageName, localhighScore);
    // document.getElementById("highest-highscore").innerText = localhighScore;
       
    let text = document.getElementById("highest-highscore");
    text.innerText = localhighScore;

        // game.width / 2, game.height / 2, "Game Over\n\nYour score: " + score + "\nBest score: " + highScore + "\n\nTap to restart", style
    
    
    // text.anchor.set(0.5);
    // game.input.onDown.add(this.restartGame, this);
}




// Code from Styled JavaScript https://www.youtube.com/watch?v=NmXEJIBsN-4
// if (isStorage && localStorage.getItem("current-highscore")) {
//     customElements.scores = localStorage.getItem("current-highscore").split(",")
//     push.("highest-highscore");
// }

// function highscore() {
//  if (userSeq > 
// }


// mute button
let mute = false


function muteAudio() {
    document.querySelector('.mute-button').style.display = "None";
    document.querySelector('.enable-audio-button').style.display = "Inline-block";
    mute = true   
}


function enableAudio() {
    document.querySelector('.enable-audio-button').style.display = "None";
    document.querySelector('.mute-button').style.display = "Inline-block";
    mute = false   
}


/* play board sound */ 
function playSound(id) {
    if (!mute) {
        var sound = new Audio(boardSound[id]);
        sound.play();
    }
}


function resetGame() {
    userSeq = [];
    momoSeq = [];
    score = 0;
    document.getElementById('current-highscore').innerText = "0";
            momoSequence();  
};
