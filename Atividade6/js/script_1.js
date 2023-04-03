function calc(n1,n2,n3){
    let media = parseFloat(n1) + parseFloat(n2) + parseFloat(n3);
    media= media/3;
    return  Math.round(media);
}

const frm = document.getElementById('form');
frm.addEventListener('submit', event => {
    event.preventDefault();
    let n1 = event.target.nota1.value;
    let n2 = event.target.nota2.value;
    let n3 = event.target.nota3.value;
    document.getElementById("media").innerHTML=calc(n1,n2,n3);
});
