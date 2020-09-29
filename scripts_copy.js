//New Simon says code 

//Variables
userSeq = [];
momoSeq = [];
const NUM_OF_LEVELS = 100
var id, color, level = 0;
var boardSound = [
document.getElementById('audio-elephant'),
document.getElementById('audio-pig'),
document.getElementById('audio-rattlesnake'),
document.getElementById('audio-sealion'),
];

//1- start board sequence 
$(document.ready(function () {
    $(".start").click(function() {
        level++;
        momoSequence();
    });
});

//useer pad listener
$(".pad").click(function() {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    userSeq.push(id);
    console.log(id+" "+color);
    addClassSound(id, color);
    //check user sequence
    if(!chechUserSeq()) {
        displayError();
        userSeq = [];
    }
    //checking end of sequence
    if(userSeq.lengt == momoSeq.lengt && userSeq.length < NUM_OF_LEVELS) {
        level++;
        userSeq = [];
        momoSequence();
    }
    // checking for winner
    if(userSeq.length == NUM_OF_LEVELS) {
        $(".display").text("Win");
    }
    })
});




/* checking user seq agaings momo's */
function checkUserSeq() {
    for(var i = 0; i < userSeq.length; i++) {
        if(userSeq[i] != momoSeq[i]) {
            return false;
        }
    });
});

// display error
function displayError() {
    console.log("error");
    var counter = 0;
    var myError = setInterval(function() {
        $(".display").text("Error");
        counter++;
        if(counter == 3) {
            $(".display").text(level);
            clearInterval(myError);
            userSeq = [];
            counter = 0;
        }
    }, 500);
}

/*momo sequence*/
function momoSequence() {
    console.log(level);
    $(".display").text(level);
    getRandomNum();
    var i = 0;
    var myInterval = setInterval(function() {
        id = momoSeq[1];
        color = $("#"+id).attr("class").split(" ")[l];
        console.log(id+" "+color);
        addClassSound(id, color);
        i++;
        if (i == momoSeq.length) {
        clearInterval(myInterval);
        }
    }, 1000);

});


//generate random number 

function getRandomNum() {
    var random = Math.floor(Math.random) * 4); 
    momoSeq.push(random);
}

/* add temporary class and sound */
function addClassSound(id, color) {
    $("#"+id).addClass(color+'-active');
    playSound(id)
    setTimout)(function() {
        $("#"+id).removeClass(color+"-active");
    }, 500);
}

/*play board sound */
function playSound(id) {
    var sound = new Audio(boardSound(id));
    sound.play();
}

//2- user replicates sequence


