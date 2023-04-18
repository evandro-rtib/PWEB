var formNumeros = document.getElementById('formNumeros');
var tabelaDadosF1 = document.getElementById('tabelaDadosF1');
var tabelaDadosF2 = document.getElementById('tabelaDadosF2');
var cont=0;
var maior;


formNumeros.addEventListener("submit", e =>{
    e.preventDefault();
    let arrayNum = [];
    let n1 = e.target.num1.value;
    let n2 = e.target.num2.value;
    let n3 = e.target.num3.value;

    n1 ? arrayNum.push(n1):arrayNum;
    n2 ? arrayNum.push(n2):arrayNum;
    n3 ? arrayNum.push(n3):arrayNum;

    maior = f1(arrayNum);
    tabelaDadosF1.innerHTML+=`
                            <tr>
                                <td>${++cont}</td>
                                <td>${n1}</td>
                                <td>${n2}</td>
                                <td>${n3}</td>
                                <td>${maior}</td>
                            </tr>
                            `
    tabelaDadosF2.innerHTML+=`
    <tr>
        <td>${cont}</td>
        ${f2(arrayNum)}
    </tr>
    `
    formNumeros.reset();

});

f1 = (array) =>{
    return Math.max(...array);
}

f2 =(array) =>{
    let arrayCre = [...array];
    arrayCre.sort((a,b)=> a-b);
    let arrayDec = [...array];
    arrayDec.sort((a,b)=> b-a);

    let dados="<td>";
    
    for (i=0;i<array.length;i++)
    {
        i===array-1?dados+=array[i]:dados+=array[i]+"; ";
    }
    dados+="</td><td>";
    for (i=0;i<arrayCre.length;i++)
    {
        i===arrayCre-1?dados+=arrayCre[i]:dados+=arrayCre[i]+"; ";
    }
    dados+="</td><td>";
    for (i=0;i<arrayDec.length;i++)
    {
        i===arrayDec-1?dados+=arrayDec[i]:dados+=arrayDec[i]+"; ";
    }
    dados+="</td>"
    return dados;

}