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

const getRandomPanel = () => {
    const panels = [
        elephantPanel, 
        pigPanel, 
        rattlesnakePanel, 
        sealionPanel
    ]
    return panels[parseInt(Math.random() * panels.length)];
};

const sequence = [
    getRandomPanel(),
    getRandomPanel(),
    getRandomPanel(),
    getRandomPanel(),
];

const flash = animalPanels => {
    return new Promise((resolve, reject) => {
        animalPanels.className += ' active-panel';
        setTimeout(() => {
            animalPanels.className = animalPanels.className.replace (
                ' active-panel',
                ''
            );
            setTimeout(() => {
                resolve();
            }, 500);
        }, 1000);
    });
};


const main = async () => {
    console.log('hello');
    for (const animalPanels of sequence) {
        await flash(animalPanels);
    
    }
};

setTimeout(main, 4000);