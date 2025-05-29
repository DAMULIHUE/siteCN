let respostas = [];
let opAtual;
let apagaInputAtual;

var elements = document.getElementsByTagName("INPUT");
for (var inp of elements) {
    if (inp.type === "checkbox" || inp.type === "text"){
        inp.checked = false;
        inp.value = "";
    }
}

function escolhaUm(opx){
    /*let box1 = "op1";
    let box2 = "op2";
    let box3 = "op3";
    let box4 = "op4";

    let arrBoxes=[box1, box2, box3, box4,];

    arrBoxes.forEach(element => {
        if(opx != element){
            document.getElementById(element).checked = false;
        }
    });*/

    for (var inp of elements) {
        if (inp.type === "checkbox" || inp.type === "text"){
            inp.checked = false;
            inp.value = "";
        }
    }
    document.getElementById(opx).checked = true;

    opAtual = opx;
}

function getInputText(id) {
    //pegar com base no id passado como parametro
    opAtual = document.getElementById(id).value;
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

        respostas.push(opAtual);
        console.log(opAtual);
    }
}

function mostrarResultados() {
  const resultadosDiv = document.querySelector('.q6');
  //resultadosDiv.innerHTML = ''; // limpa antes de mostrar

  // Q1
  const corretaQ1 = "op2";
  const selecionadaQ1 = document.querySelector('input[name="q1"]:checked') || document.querySelector('input#' + corretaQ1)?.closest('form')?.querySelector('input:checked');
  const marcadoQ1 = selecionadaQ1 ? selecionadaQ1.id : null;

  resultadosDiv.innerHTML += `<h3>Pergunta 1:</h3>`;
  if (marcadoQ1 === corretaQ1) {
    resultadosDiv.innerHTML += `<p style="color: green;">✔️ Resposta correta: b) São substâncias que matam ou inibem o crescimento de bactérias.</p>`;
  } else {
    resultadosDiv.innerHTML += `<p style="color: red;">❌ Resposta incorreta.</p>`;
    if (marcadoQ1)
      resultadosDiv.innerHTML += `<p>Você respondeu: ${document.querySelector('label[for="' + marcadoQ1 + '"]').innerText}</p>`;
    resultadosDiv.innerHTML += `<p>Resposta correta: b) São substâncias que matam ou inibem o crescimento de bactérias.</p>`;
  }

  // Q2
  const corretaQ2 = "f";
  const marcadaQ2 = document.querySelector('#v').checked ? 'v' :
                    document.querySelector('#f').checked ? 'f' : null;

  resultadosDiv.innerHTML += `<h3>Pergunta 2:</h3>`;
  if (marcadaQ2 === corretaQ2) {
    resultadosDiv.innerHTML += `<p style="color: green;">✔️ Resposta correta: Falso.</p>`;
  } else {
    resultadosDiv.innerHTML += `<p style="color: red;">❌ Resposta incorreta.</p>`;
    if (marcadaQ2)
      resultadosDiv.innerHTML += `<p>Você respondeu: ${document.querySelector('label[for="' + marcadaQ2 + '"]').innerText}</p>`;
    resultadosDiv.innerHTML += `<p>Resposta correta: Falso.</p>`;
  }

  // Q3
  const corretaQ3 = "op9"; // Você pode mudar essa resposta depois
  const marcadaQ3 = ["op9", "op10", "op11", "op12"].find(id => document.getElementById(id).checked);

  resultadosDiv.innerHTML += `<h3>Pergunta 3:</h3>`;
  if (marcadaQ3 === corretaQ3) {
    resultadosDiv.innerHTML += `<p style="color: green;">✔️ Resposta correta: ${document.querySelector('label[for="' + corretaQ3 + '"]').innerText}</p>`;
  } else {
    resultadosDiv.innerHTML += `<p style="color: red;">❌ Resposta incorreta.</p>`;
    if (marcadaQ3)
      resultadosDiv.innerHTML += `<p>Você respondeu: ${document.querySelector('label[for="' + marcadaQ3 + '"]').innerText}</p>`;
    resultadosDiv.innerHTML += `<p>Resposta correta: ${document.querySelector('label[for="' + corretaQ3 + '"]').innerText}</p>`;
  }


  // Q4
  const corretaQ4 = "op7";
  const marcadaQ4 = ["op5", "op6", "op7", "op8"].find(id => document.getElementById(id).checked);

  resultadosDiv.innerHTML += `<h3>Pergunta 4:</h3>`;
  if (marcadaQ4 === corretaQ4) {
    resultadosDiv.innerHTML += `<p style="color: green;">✔️ Resposta correta: c) Uso de antibióticos sem necessidade ou por tempo inadequado.</p>`;
  } else {
    resultadosDiv.innerHTML += `<p style="color: red;">❌ Resposta incorreta.</p>`;
    if (marcadaQ4)
      resultadosDiv.innerHTML += `<p>Você respondeu: ${document.querySelector('label[for="' + marcadaQ4 + '"]').innerText}</p>`;
    resultadosDiv.innerHTML += `<p>Resposta correta: c) Uso de antibióticos sem necessidade ou por tempo inadequado.</p>`;
  }

  // Q5 
  const corretaQ5 = "op15"; // Você pode mudar essa resposta depois
  const marcadaQ5 = ["op13", "op14", "op15", "op16"].find(id => document.getElementById(id).checked);

  resultadosDiv.innerHTML += `<h3>Pergunta 5:</h3>`;
  if (marcadaQ3 === corretaQ3) {
    resultadosDiv.innerHTML += `<p style="color: green;">✔️ Resposta correta: ${document.querySelector('label[for="' + corretaQ5 + '"]').innerText}</p>`;
  } else {
    resultadosDiv.innerHTML += `<p style="color: red;">❌ Resposta incorreta.</p>`;
    if (marcadaQ3)
      resultadosDiv.innerHTML += `<p>Você respondeu: ${document.querySelector('label[for="' + marcadaQ3 + '"]').innerText}</p>`;
    resultadosDiv.innerHTML += `<p>Resposta correta: ${document.querySelector('label[for="' + corretaQ3 + '"]').innerText}</p>`;
  }
}

function reiniciarQuiz() {
    window.location.reload();
}

