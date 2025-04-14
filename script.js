
function escolhaUm(opx){
    let box1 = "op1";
    let box2 = "op2";
    let box3 = "op3";
    let box4 = "op4";

    let arrBoxes=[box1, box2, box3, box4,];

    arrBoxes.forEach(element => {
        if(opx != element){
            document.getElementById(element).checked = false;
        }
    });
}


function escolhaUmDois(opx){
    let boxf = 'f';
    let boxv = 'v';

    let arrBoxes = [boxf, boxv];

    arrBoxes.forEach(element => {
        if(opx != element){
            document.getElementById(element).checked = false;
        }
    });
}

function nextDiv(divAtual){

    if(divAtual == 'homepage'){
        document.getElementById(divAtual).style.visibility = "hidden";
        document.getElementById(divAtual).style.display = "none";
        document.getElementById('homepageHeader').style.visibility = "hidden";
        document.getElementById('homepageHeader').style.display = "none";

        document.getElementById("q1").style.visibility = "visible"
        document.getElementById("q1").style.display = "flex";
        document.getElementById("q1Header").style.visibility = "visible"
        document.getElementById("q1Header").style.display = "flex";
    }else{
        // transforma em array para podermos retirar o 'q', 
        // retirando o 'q' e 
        // transformando em numero kk
        let qx = Number(divAtual.split("").filter(element => element != 'q'));
        let nextq = `q${++qx}`;
        let nextqHeader = `${nextq}Header`;
        let divAtualHeader = `${divAtual}Header`;
        
        // escondendo elementos do main e do header
        document.getElementById(divAtual).style.visibility = 'hidden';
        document.getElementById(divAtual).style.display = 'none';
        document.getElementById(divAtualHeader).style.visibility = 'hidden';
        document.getElementById(divAtualHeader).style.display = 'none';

        // revelando elementos da proxima divMain e do proximo header
        document.getElementById(nextq).style.visibility = 'visible';
        document.getElementById(nextq).style.display = 'flex';
        document.getElementById(nextqHeader).style.visibility = 'visible';
        document.getElementById(nextqHeader).style.display = 'flex';
    }
}