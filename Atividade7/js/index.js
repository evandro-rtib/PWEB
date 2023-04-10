function jogar(opcao){
    const resultado = document.getElementById("resultado");
    const op = document.getElementById("opcao")
    
    let j1;
    let j2;
    let opcoes = new Array("Pedra","Papel","Tesoura");
    j1 = opcao
    if (j1 > 0){
        let jogo = Math.random();

        if (jogo < 0.33){
            j2=1;
        }
        else if (jogo < 0.66){
            j2=2;
        }
        else{
            j2 =3
        }

        if (j1===j2){
            resultado.innerHTML="Empate";
        }
        else if (j1===1 && j2===3){
            resultado.innerHTML="Ganhou";
        }
        else if (j1===2 && j2===1){
            resultado.innerHTML="Ganhou";
        }
        else if (j1===3 && j2===2){
            resultado.innerHTML="Ganhou";
        }
        else{
            resultado.innerHTML="Perdeu";
        }
        op.innerHTML=opcoes[j1-1]+ " x " + opcoes[j2-1];
        console.log("Jogador 1: ",opcoes[j1-1],"Jogador 2:", opcoes[j2-1]);
    }
}

function opcao(txt){
    const opcao = document.getElementById("opcao")
    opcao.innerHTML=txt;
}