const bCarta= document.querySelector('#carta');
const bSasso= document.querySelector('#sasso');
const bForbice= document.querySelector('#forbice');
const bpunteggioP= document.querySelector('#punt-giocatore');
const bpunteggioC= document.querySelector('#punt-computer');
const bmossaP= document.querySelector('.mossa-p');
const bmossaC= document.querySelector('.mossa-c');
const binfo = document.querySelector('#info-box');
const brestart= document.querySelector('#restart');
const avatarP = document.querySelector(`#avatar-p`);
const avatarC = document.querySelector(`#avatar-c`);

let played = 0;

function getComputerChoice () {
    let mossa = ['SASSO', 'CARTA', 'FORBICE'];
    let scelta= mossa[Math.floor(Math.random()*mossa.length)];
    switch (scelta) {
        case 'SASSO' :
            bmossaC.style.background =  'url(./media/sasso.png) center';
            bmossaC.style.backgroundSize=  'auto';
            bmossaC.classList.add('playing');
            break;
        case 'CARTA' :
            bmossaC.style.background =  'url(./media/carta1.png) center';
            bmossaC.style.backgroundSize=  'auto'; 
            bmossaC.classList.add('playing');
            break;
        case 'FORBICE' :
            bmossaC.style.background =  'url(./media/forbici1.png) center';
            bmossaC.style.backgroundSize=  'auto';
            bmossaC.classList.add('playing');
            break;
        default:
    }
    return scelta;
}


function playRound(sceltaPlayer, sceltaComputer) {
    switch (sceltaPlayer) {
        case "CARTA": 
            if(sceltaComputer === 'SASSO') {
                bpunteggioP.dataset.score = parseInt(bpunteggioP.dataset.score) + 1;
                bpunteggioP.textContent = bpunteggioP.dataset.score;
                binfo.textContent = "Vincitore: Umano!";
                terminaPartita();
                
            }else if (sceltaComputer === 'FORBICE') {
                bpunteggioC.dataset.score = parseInt(bpunteggioC.dataset.score) + 1;
                bpunteggioC.textContent = bpunteggioC.dataset.score;
                binfo.textContent = "Vincitore: Computer!";
                terminaPartita();
            }else {
                binfo.textContent = "Pareggio!";
            }
            break;
        case "SASSO":
            if(sceltaComputer === 'FORBICE') {
                bpunteggioP.dataset.score = parseInt(bpunteggioP.dataset.score) + 1;
                bpunteggioP.textContent = bpunteggioP.dataset.score;
                binfo.textContent = "Vincitore: Umano!";
                terminaPartita();
            }else if (sceltaComputer === 'CARTA') {
                bpunteggioC.dataset.score = parseInt(bpunteggioC.dataset.score) + 1;
                bpunteggioC.textContent = bpunteggioC.dataset.score;
                binfo.textContent = "Vincitore: Computer!";
                terminaPartita();
            }else {
                binfo.textContent = "Pareggio!";
            }
            break;
        case "FORBICE":
            if(sceltaComputer === 'CARTA') {
                bpunteggioP.dataset.score = parseInt(bpunteggioP.dataset.score) + 1;
                bpunteggioP.textContent = bpunteggioP.dataset.score;
                binfo.textContent = "Vincitore: Umano!";
                terminaPartita();
            }else if (sceltaComputer === 'SASSO') {
                bpunteggioC.dataset.score = parseInt(bpunteggioC.dataset.score) + 1;
                bpunteggioC.textContent = bpunteggioC.dataset.score;
                binfo.textContent = "Vincitore: Computer!";
                terminaPartita();
            }else {
                binfo.textContent = "Pareggio!";
            }
            break;
        default:
            return "Input inserito non corretto";
    }

}
  
function terminaPartita () {
    if (bpunteggioC.dataset.score == '5' || bpunteggioP.dataset.score == '5') {
        if (bpunteggioP.dataset.score >  bpunteggioC.dataset.score ) {
            binfo.textContent = "L'Umano vince la partita! Clicca il pulsante Reset per ricominciare"
            transizioni();
        } else {
            binfo.textContent = "Il Computer vince la partita! Clicca il pulsante Reset per ricominciare"
            transizioni();
        }
        return 'finita';
    }
}

function restart () {
    bmossaP.style.background =  'none';
    bmossaC.style.background =  'none';
    binfo.textContent = "New Game!";
    bpunteggioP.dataset.score = '0';
    bpunteggioP.textContent= '0';
    bpunteggioC.dataset.score = '0';
    bpunteggioC.textContent = '0';
    avatarC.src = "media/potato.jpg";
    avatarP.src = "media/1.jpg";
    played=0;
    sound.pause();
    sound.currentTime = 0;
}


function transizioni () {
    if (bpunteggioP.dataset.score == bpunteggioC.dataset.score) {
        return ;
    }
    if (bpunteggioC.dataset.score == '5' && played != 1) {
        const audio= document.querySelector(`#lost`);
        audio.currentTime= 0;
        audio.play();
        avatarP.src = "media/incredible-lose.jpeg";
        avatarC.src = "media/pc-win.jpeg";
        played = 1;

    } else if (bpunteggioP.dataset.score == '5' && played != 1 ) {
        const audio= document.querySelector(`#victory`);
        audio.play();
        audio.currentTime= 0;
        avatarP.src = "media/4.jpg" ;
        avatarC.src = "media/pc-lose.png";
        played = 1;

    } else if (bpunteggioP.dataset.score < bpunteggioC.dataset.score && played != 1) {
        const audio= document.querySelector(`#losing`);
        audio.play();
        audio.currentTime= 0;
    }
}

function removeTransition (e) {
    if(e.propertyName !== 'transform') return; //Salta se non e` trasform
    this.classList.remove('playing');
  }


bCarta.addEventListener("click", () => {

    if (terminaPartita() !=  'finita') {
        bmossaP.style.background =  'url(./media/carta1.png) center';
        bmossaP.style.backgroundSize=  'auto';
        bmossaP.classList.add('playing');
        playRound('CARTA', getComputerChoice());
        transizioni();
    }

});

bSasso.addEventListener("click", () => {

    if (terminaPartita() !=  'finita') {
        bmossaP.style.background =  'url(./media/sasso.png) center';
        bmossaP.style.backgroundSize=  'auto';
        bmossaP.classList.add('playing');
        playRound('SASSO', getComputerChoice());
        transizioni();
    }

});

bForbice.addEventListener("click", () => {

    if (terminaPartita() !=  'finita') {
        bmossaP.style.background =  'url(./media/forbici1.png) center';
        bmossaP.style.backgroundSize=  'auto';
        bmossaP.classList.add('playing');
        playRound('FORBICE', getComputerChoice());
        transizioni();
    }

});

bmossaP.addEventListener('transitionend', removeTransition);
bmossaC.addEventListener('transitionend', removeTransition);

brestart.addEventListener('click', () => {
    restart();
});




