const userEmail = document.getElementById('my-email');
const checkResult = document.getElementById('my-result');
const acceptedEmails = ['mariorossi@gmail.com' , 'elonmusk@tesla.space', 'superman@cripto.met','eisenberg@meth.blue','songoku@kamehame.ha','ciaociao@ciao.ciao','nonnehoidea@nonloso.boh'];
const playButton = document.getElementById('my-play-btn');
const diceFaces = ['one' , 'two' , 'three' , 'four' , 'five', 'six'];
const diceBox = document.getElementById('dices-container');
const diceIcon = document.getElementById('dice-icon');
const gameResult = document.getElementById('dice-result');
let gameMatches = 0;
let chosenDices = [];
let randomNumber;

function keyEnter(e){
    if(e.keyCode == '13'){
        check();
    }
}
function check(){
    checkResult.classList.remove('text-danger','text-primary');

    for(let i = 0; i < acceptedEmails.length+1 ; i++ ){
        if( userEmail.value == acceptedEmails[i]){
            checkResult.innerHTML="BRAVO!";
            i=acceptedEmails-length+1;
            checkResult.classList.add('text-primary');
        }
        else{
            checkResult.innerHTML="NON BRAVO!";
            checkResult.classList.add('text-danger');
        }
    }
}

function startGame(){

    if(gameMatches > 0){
        for(let i=0 ; i<2 ; i++){
            diceBox.removeChild(diceBox.lastChild);
        }
    }

    for(let i =0 ; i<2 ; i++){
        let diceClass = 'fa-dice-';
        diceIcon.classList.add('d-none');
        randomNumber = Math.floor(Math.random()*6);
        const newDice = document.createElement('i');
        diceClass +=diceFaces[randomNumber];
        newDice.classList.add('fas',diceClass,'my-dice-size','m-3');
        if(i==0){
            newDice.classList.add('text-danger');
        }
        else if( i==1){
            newDice.classList.add('text-primary');
        }
        diceBox.append(newDice);
        chosenDices[i] = randomNumber; 
    }

    gameResult.classList.remove('text-danger','text-primary','text-warning');
    if(chosenDices[0] > chosenDices[1]){
        gameResult.innerHTML = 'HAI PERSO!';
        gameResult.classList.add('text-danger');
    }
    else if(chosenDices[0] < chosenDices[1]) {
        gameResult.innerHTML = 'HAI VINTO!';
        gameResult.classList.add('text-primary');
    }
    else if (chosenDices[0] == chosenDices[1]){
        gameResult.innerHTML = 'PAREGGIO!';
        gameResult.classList.add('text-warning');
    }
    gameMatches++;
}
userEmail.addEventListener("keypress", keyEnter);
playButton.addEventListener('click', startGame);
