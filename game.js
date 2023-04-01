const bCarta= document.querySelector('#carta');
const bSasso= document.querySelector('#sasso');
const bForbice= document.querySelector('#forbice');
const bpunteggioP= document.querySelector('.punteggio-p');
const bpunteggioC= document.querySelector('.punteggio-c');
const bmossaP= document.querySelector('.mossa-p');
const bmossaC= document.querySelector('.mossa-c');
const binfo = document.querySelector('.info');
const brestart= document.querySelector('#restart');


function getComputerChoice () {
    let mossa = ['SASSO', 'CARTA', 'FORBICE'];
    let scelta= mossa[Math.floor(Math.random()*mossa.length)];
    switch (scelta) {
        case 'SASSO' :
            bmossaC.style.background =  'url(./media/sasso.png) center';
            bmossaC.style.backgroundSize=  'auto';
            break;
        case 'CARTA' :
            bmossaC.style.background =  'url(./media/carta1.png) center';
            bmossaC.style.backgroundSize=  'auto'; 
            break;
        case 'FORBICE' :
            bmossaC.style.background =  'url(./media/forbici1.png) center';
            bmossaC.style.backgroundSize=  'auto';
            break;
        default:
    }
    return scelta;
}


function playRound(sceltaPlayer, sceltaComputer) {
    switch (sceltaPlayer) {
        case "CARTA": 
            if(sceltaComputer === 'SASSO') {
                return 1;
            }else if (sceltaComputer === 'FORBICE') {
                return 0;
            }else {
                return "Pareggio!";
            }
        case "SASSO":
            if(sceltaComputer === 'FORBICE') {
                return 1;
            }else if (sceltaComputer === 'CARTA') {
                return 0;
            }else {
                return "Pareggio!";
            }
        case "FORBICE":
            if(sceltaComputer === 'CARTA') {
                return 1;
            }else if (sceltaComputer === 'SASSO') {
                return 0;
            }else {
                return "Pareggio!";
            }

        default:
            return "Input inserito non corretto";
    }

}
  
function game () {
    let plWin =0;
    let punteggioP= document.querySelector('.punteggio-p');
    let pcWin =0;
    let punteggioC= document.querySelector('.punteggio-c');

   while (plWin <= 5 || pcWin <=5) {
        
        let sceltaPlayer = sceltaPl ();
        let sceltaComputer = getComputerChoice();
        let result = playRound(sceltaPlayer.toUpperCase(), sceltaComputer.toUpperCase());

        if (result === 1) {
            console.log(`Hai vinto! ${sceltaPlayer} vince contro ${sceltaComputer}.`);
            plWin+=1;
        } else if (result === 0) {
            console.log(`Hai Perso! ${sceltaPlayer} perde contro ${sceltaComputer}.`);
            pcWin+=1;
        } else {
            console.log("Pareggio.");
        }

    }
    if (plWin > pcWin) {
        return "Hai vinto la partita!";
    } else if (pcWin > plWin) {
        return "Hai perso la partita!";
    } else {
        return "La partita finisce con un pareggio!";
    } 
}


bCarta.addEventListener("click", () => {
    bmossaP.style.background =  'url(./media/carta1.png) center';
    bmossaP.style.backgroundSize=  'auto';
    console.log(playRound('CARTA', getComputerChoice()));
});

bSasso.addEventListener("click", () => {
    bmossaP.style.background =  'url(./media/sasso.png) center';
    bmossaP.style.backgroundSize=  'auto';
    console.log(playRound('SASSO', getComputerChoice()));
});

bForbice.addEventListener("click", () => {
    bmossaP.style.background =  'url(./media/forbici1.png) center';
    bmossaP.style.backgroundSize=  'auto';
    console.log(playRound('FORBICE', getComputerChoice()));
});

//(game());

