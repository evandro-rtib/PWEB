var formFilme = document.getElementById('formFilme');
var pesquisa = []
//var opcoes = ["Péssimo","Ruim","Bom","Ótimo"];
var divMediaIdade = document.getElementById("mediaIdade")
var divMenorIdade = document.getElementById("menorIdade")
var divMaiorIdade = document.getElementById("maiorIdade")
var divQtdHomens = document.getElementById("qtdHomens")
var divQtdMulheres = document.getElementById("qtdMulheres")
var divPessimo = document.getElementById("pessimo")
var divRuim = document.getElementById("ruim")
var divBom = document.getElementById("bom")
var divOtimo = document.getElementById("otimo")

var resultados = {
    mediaIdade: "",
    menorIdade: 0,
    maiorIdade:0,
    homens: 0,
    mulheres: 0,
    porcentoPessimo:0,
    porcentoBom:0,
    porcentoOtimo:0,
    porcentoRuim:0,


}

formFilme.addEventListener("submit", e =>{
    let pessoa = {};
    let nome=e.target.nome;
    let sexo=e.target.sexo;
    let idade=e.target.idade;
    let opniao=e.target.opniao 
    
    e.preventDefault();
    pessoa["nome"]=nome.value;
    pessoa["sexo"]=sexo.value;
    pessoa["idade"]=idade.value;
    pessoa["opniao"]=opniao.value;
    formFilme.reset();

    pesquisa.push(pessoa);
    mediaIdade();
    menorIdade();
    maiorIdade();
    contSexo();
    porcentagemPesquisa();
    atualiza();
    console.log(pessoa)
    console.log(resultados)

});

function atualiza(){
    divMediaIdade.innerHTML="<h2 id=\"mediaIdade\">Média Idade: " + resultados["mediaIdade"] +" </h2>"
    divMenorIdade.innerHTML="<h2 id=\"menorIdade\">Menor Idade: " + resultados["menorIdade"] +" </h2>"
    divMaiorIdade.innerHTML="<h2 id=\"maiorIdade\">Maior Idade: " + resultados["maiorIdade"] +" </h2>"
    divQtdHomens.innerHTML="<h2 id=\"qtdHomens\">Homens: " + resultados["homens"] +" </h2>"
    divQtdMulheres.innerHTML="<h2 id=\"qtdMulheres\">Mulheres: " + resultados["mulheres"] +"</h2>"
    divPessimo.innerHTML="<h2 id=\"pessimo\">Péssimo: " + resultados["porcentoPessimo"] +" % </h2>"
    divRuim.innerHTML="<h2 id=\"ruim\">Péssimo: " + resultados["porcentoRuim"] +" % </h2>"
    divBom.innerHTML="<h2 id=\"bom\">Péssimo: " + resultados["porcentoBom"] +" % </h2>"
    divOtimo.innerHTML="<h2 id=\"otimo\">Péssimo: " + resultados["porcentoOtimo"] +" % </h2>"
}

function mediaIdade(){
    somaIdade=0;
    for (i=0;i<pesquisa.length;i++){
        somaIdade= Number(somaIdade)+Number(pesquisa[i].idade);
    }
        resultados["mediaIdade"]=Number(somaIdade)/Number(pesquisa.length);
}


function menorIdade(){
    mIdade=pesquisa[0]["idade"];

    for (i=0;i<pesquisa.length;i++){
        if (mIdade > pesquisa[i]["idade"])
            mIdade = pesquisa[i]["idade"]
    }
    resultados["menorIdade"]=Number(mIdade);
        
}

function maiorIdade(){
    mIdade=pesquisa[0]["idade"];

    for (i=0;i<pesquisa.length;i++){
        if (mIdade < pesquisa[i]["idade"])
            mIdade = pesquisa[i]["idade"]
    }
    resultados["maiorIdade"]=Number(mIdade);
        
}


function contSexo(){
    let m=0;
    let f=0;
    for (i=0;i<pesquisa.length;i++){
        if (pesquisa[i]["sexo"] === "M")
            m++;
        else
            f++
    }
    resultados["homens"]=Number(m);
    resultados["mulheres"]=Number(f);
    
}

function porcentagemPesquisa(){
    let p=0;
    let r=0;
    let b=0;
    let o=0;

    for (i=0;i<pesquisa.length;i++){
        switch(pesquisa[i]["opniao"]){
            case '0':
                p++;
                break;
            case '1':
                r++;
                break;    
            case '2':
                b++;
                break;
            case '3':
                o++;
                break;
        }
    }
    p=Math.round(p/pesquisa.length*100,1);
    r=Math.round(r/pesquisa.length*100,1);
    b=Math.round(b/pesquisa.length*100,1);
    o=Math.round(o/pesquisa.length*100);
    console.log(p,r,b,o);
    resultados["porcentoPessimo"] = p;
    resultados["porcentoRuim"] = r;
    resultados["porcentoBom"] = b;
    resultados["porcentoOtimo"] = o;
}
