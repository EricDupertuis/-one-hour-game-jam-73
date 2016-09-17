'use strict';

var gt = $('#game-text');
var no = $('#choice-no');
var yes = $('#choice-yes');

var gameState = 1;

function changeState () {
    gameState++;
}

function changeText (txt) {
    gt.html(txt);
    changeState();
}

no.click(function() {
    switch(gameState) {
        case 1:
            changeText('Really ? You don\'t feel isolated in the void of space ? Weirdo... <br/> Are you alone right now ?');
            break;
        case 2:
            changeText('Lucky you (͡° ͜ʖ ͡°)... <br> Doesn\'t this endless void bums you out even a little ?');
            break;
        case 3:
            changeText('Oh, I was worried for a second you were some kind of nutjob <br/> Need any help finding an habitable exoplanet ?');
            break;
        case 4:
            changeText('You want to do this all by yourself ? Ok I get it, How about some music then ?');
            yes.hide();
            no.text('Let\'s roll')
            break;
        case 5:
            no.hide();
            changeText(
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&amp;controls=0;autoplay=1" frameborder="0" allowfullscreen></iframe>'
            );
            break;
        default:
            console.log('no matching states');
    }
});

yes.click(function() {
    switch(gameState) {
        case 1:
            changeText('We are in space, what did you expect ? Are you alone right now ?');
            break;
        case 2:
            changeText('Well, it\'s space so... Doesn\'t this endless void bums you out ?');
            break;
        case 3:
            changeText('Yep, space does that to people <br/> Need any help finding an habitable exoplanet ?');
            break;
        case 4:
            changeText('OK, I don\'t know where to go but I know a few tricks. <br> Do you like music ?');
            yes.hide();
            no.text('Let\'s roll')
            break;
        default:
            console.log('no matching states');
    }
});
