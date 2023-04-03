const frm = document.getElementById('form');
frm.addEventListener('submit', event => {
    event.preventDefault();
    const display = document.getElementById("display");
    let num1 = parseFloat(event.target.num1.value);
    let num2 = parseFloat(event.target.num2.value);

    function somar(n1,n2)
    {
        return  n1 + n2;
    }
    function subtrair(n1,n2)
    {
        return  n1 - n2;
    }
    function multiplicar(n1,n2)
    {
        return  n1 * n2;
    }
    function dividir(n1,n2)
    {
        return  n1 / n2;
    }
    function dividirMod(n1,n2)
    {
        return  n1 % n2;
    }
    display.innerHTML="Soma: "+somar(num1,num2);
    display.innerHTML+="<br />"
    display.innerHTML+="Substração: "+subtrair(num1,num2);
    display.innerHTML+="<br />"
    display.innerHTML+="Multiplicação: "+multiplicar(num1,num2);
    display.innerHTML+="<br />"
    display.innerHTML+="Divisão: "+dividir(num1,num2);
    display.innerHTML+="<br />"
    display.innerHTML+="Modulo Divisão: "+dividirMod(num1,num2);

});
