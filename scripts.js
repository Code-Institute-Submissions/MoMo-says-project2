
// This code was adapted from Cody Seibert
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

const startFlashing = async () => {
    canClick = false;
    for (const animalPanel of sequence) {
        await flash(animalPanel);
    }
    canClick = true;
}

setTimeout(startFlashing, 4000);


// This code was adapted from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
function play() {
        var audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play();

        }else{
            audio.pause();
            audio.currentTime = 0

        }
    }

