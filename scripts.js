$("document").ready(function() {

    $("#elephant").click(function(){ // When I click on <p> run this code });
        $("#elephant").fadeTo(500, 0.4).fadeTo(500, 1);
    });    
    $("#pig").click(function(){
        $("#pig").fadeTo(500, 0.4).fadeTo(500, 1);
    });
    $("#rattlesnake").click(function(){
        $("#rattlesnake").fadeTo(500, 0.4).fadeTo(500, 1);
    });
    $("#sealion").click(function(){
        $("#sealion").fadeTo(500, 0.4).fadeTo(500, 1);
    });

});




console.log("Hello");


const elephantButton = document.querySelector('#elephant');
const pigButton = document.querySelector('#pig');
const rattlesnakeButton = document.querySelector('#rattlesnake');
const sealionButton = document.querySelector('#sealion');

const sequences = [
    elephantButton, 
    pigButton, 
    rattlesnakeButton, 
    sealionButton
];

const flash = (panel) => {
    return new Promis((resolve, reject) => {
        button
    })
}

