/*function getComputerChoice () {
    let mossa = ['Sasso', 'Carta', 'Forbice'];
    return mossa[Math.floor(Math.random()*mossa.length)];
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
    let pcWin =0;
    for (let i = 0; i < 5; i++) {
        
        let sceltaPlayer = prompt("Scelga tra carta, sasso, forbice", "");
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

alert(game());






