// $("document").ready(function() {

//     $("#elephant").click(function(){ // When I click on <p> run this code });
//         $("#elephant").fadeTo(500, 0.4).fadeTo(500, 1);
//     });    
//     $("#pig").click(function(){
//         $("#pig").fadeTo(500, 0.4).fadeTo(500, 1);
//     });
//     $("#rattlesnake").click(function(){
//         $("#rattlesnake").fadeTo(500, 0.4).fadeTo(500, 1);
//     });
//     $("#sealion").click(function(){
//         $("#sealion").fadeTo(500, 0.4).fadeTo(500, 1);
//     });

// });




// console.log("Hello");


const elephantPanel = document.querySelector('.elephant-panel');
const pigPanel = document.querySelector('.pig-panel');
const rattlesnakePanel = document.querySelector('.rattlesnake-panel');
const sealionPanel = document.querySelector('.sealion-panel');

const getRandomAnimalPanel = () => {
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


const flash = animalPanel => {
    return new Promise((resolve, reject) => {
        animalPanel.className += ' active-panel';
        setTimeout(() => {
            animalPanel.className = animalPanel.className.replace (
                ' active-panel',
                ''
            );
            setTimeout(() => {
                resolve();
            }, 500);
        }, 1000);
    });
};

let canClick = false;

const animalPanelClicked = animalPanelClicked => {
    if (!canClick) return;
    const expectedAnimalPanel = sequenceToGuess.shift();
    if (expectedAnimalPanel === animalPanelClicked) {
        if (sequenceToGuess.length === 0) {
            //start new round
            sequence.push(getRandomAnimalPanel());
            sequenceToGuess = [...sequence];
            startFlashing();
        }
    } else {
        // end game
        alert('game over');
    }
};

const startFlashing = async () => {
    canClick = false;
    for (const animalPanel of sequence) {
        await flash(animalPanel);
    }
    canClick = true;
}

setTimeout(startFlashing, 5000);


