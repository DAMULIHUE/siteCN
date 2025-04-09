
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
