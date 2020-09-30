//New Simon says code 

//Variables
userSeq = [];
momoSeq = [];
const NUM_OF_LEVELS = 100;
var id, level = 0;
var boardSound = [
"/assets/audio/elephantcub.mp3",
"/assets/audio/pig.mp3",
"/assets/audio/rattlesnake.mp3",
"/assets/audio/sealion.mp3",
];

let firstClickAudio = true
//1- start board sequence 
$(document).ready(function () {
    $(".animal-panel").click(function() {
        if (firstClickAudio === true) {
            firstClickAudio = false
            momoSequence();
            return
        }
        activePanel();
    })
});


//user pad listener
function activePanel() {
    id = $(this).attr("id");
    userSeq.push(id);
    addClassSound(id);
    //check user sequence
    if(!checkUserSeq()) {
        displayError();
        userSeq = [];
    }
    //checking end of sequence
    if(userSeq.length == momoSeq.length && userSeq.length < NUM_OF_LEVELS) {
        level++;
        userSeq = [];
        error == false;
        console.log("start momo")
        momoSequence();
    }
    // checking for winner
    if(userSeq.length == NUM_OF_LEVELS) {
        document.querySelector('#current-highscore').alert("Win");
    }
};




/* checking user seq agaings momo's */
function checkUserSeq() {
    for(var i = 0; i < userSeq.length; i++) {
        if(userSeq[i] != momoSeq[i]) {
            return false;
        }
    }
}

// if userSeq == false 
//     display error in #current

// display error
function displayError() {
    console.log("Wrong");
    $("#current-highscore").text("Wrong");
}

/*momo sequence*/
function momoSequence() {
    console.log(level);
    $("#current-highscore").text(level);
    getRandomNum();
    var i = 0;
    var myInterval = setInterval(function() {
        id = momoSeq[i];
        console.log(id+" ");
        addClassSound(id);
        i++;
        if (i == momoSeq.length) {
        clearInterval(myInterval);
        }
    }, 1000);
}


//generate random number 

function getRandomNum() {
    var random = Math.floor(Math.random() * 4); 
    momoSeq.push(random);
}

/* add temporary class and sound */
function addClassSound(id, color) {
    $("#"+id).addClass("active-panel");
    playSound(id)
    setTimeout(function() {
        $("#"+id).removeClass("active-panel");
    }, 500);
}

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



/*play board sound */
function playSound(id) {
    if (!mute) {
        var sound = new Audio(boardSound[id]);
        sound.play();
    }
}
