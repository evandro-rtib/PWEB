var numPartidas
const resJogo = document.getElementById("resJogo");

function nPartidas(){
    const select_numPartidas = document.getElementById("numPartidas");
    numPartidas = select_numPartidas.value;
    resJogo.innerHTML=""
}

function jogar(j1){
    const resultado = document.getElementById("resultado");
    let ganhador;
    let j2;
    let opcoes = new Array("Pedra","Papel","Tesoura");
    if (j1 > 0){
        j2 = Math.floor(Math.random() * 3) + 1;

        if (j1===j2){
            resultado.innerHTML="Empate";
            ganhador="-";
        }
        else if (j1===1 && j2===3){
            resultado.innerHTML="Ganhou";
            ganhador="J1";
        }
        else if (j1===2 && j2===1){
            resultado.innerHTML="Ganhou";
            ganhador="J1";
        }
        else if (j1===3 && j2===2){
            resultado.innerHTML="Ganhou";
            ganhador="J1";
        }
        else{
            resultado.innerHTML="Perdeu";
            ganhador="J2";
        }
        if (numPartidas >= 2){
            --numPartidas;
            resJogo.innerHTML+=`<tr>
                                    <td>${opcoes[j1-1]}</td>
                                    <td>${opcoes[j2-1]}</td>
                                    <td>${ganhador}</td>
                                </tr>
                                `
        }
        else {
            nPartidas();
            resJogo.innerHTML=`<tr>
                                    <td>${opcoes[j1-1]}</td>
                                    <td>${opcoes[j2-1]}</td>
                                    <td>${ganhador}</td>
                                </tr>
                                `
        }
    }
}