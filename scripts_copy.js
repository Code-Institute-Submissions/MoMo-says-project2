//New Simon says code 

//Variables
UderSeq = [];
momoSeq = [];
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
        startSequence();
    });
});

//useer pad listener
$(".pad").click(function() {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    addClassSound(id, color);
});

/*momo sequence*/
function startSequence() {
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
    // playSound(id)
    setTimout)(function() {
        $("#"+id).removeClass(color+"-active");
    }, 500);
}

/*play board sound */
function playSound(id) {

}

//2- user replicates sequence