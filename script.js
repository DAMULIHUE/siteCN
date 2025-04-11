
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
    //jeito cringe
    /*document.getElementById("homepage").style.visibility = "hidden";
    document.getElementById("homepage").style.display = "none";

    document.getElementById("q1").style.visibility = "visible"
    document.getElementById("q1").style.display = "flex";*/

    if(divAtual == 'homepage'){
        document.getElementById(divAtual).style.visibility = "hidden";
        document.getElementById(divAtual).style.display = "none";

        document.getElementById("q1").style.visibility = "visible"
        document.getElementById("q1").style.display = "flex";
    }else{
        // transforma em array para podermos retirar o 'q'
        let qx = divAtual.split("").filter(element => element != 'q');
        let qNumber = Number(qx);
        let nextq = `q${++qNumber}`;
        
        document.getElementById(divAtual).style.visibility = 'hidden';
        document.getElementById(divAtual).style.display = 'none';

        document.getElementById(nextq).style.visibility = 'visible';
        document.getElementById(nextq).style.display = 'flex';
    }
}