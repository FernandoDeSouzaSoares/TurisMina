var questionNum = 0;
var nome;
var idade;
var destino;
var mespret;
var motivo;
var questionNum = 0;
var question = '<h1>olá sou a Turismina, qual seu Nome?</h1>';				  // primeira questão

var output = document.getElementById('output');				// printa no id output
output.innerHTML = question;

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);
    if (questionNum == 0) {
    var nome = input;
    output.innerHTML = '<h1>' + nome + ' é um nome legal</h1>';// output response

    document.getElementById("nome").innerHTML = nome;
    document.getElementById("input").value = "";   		// limpa a caixa de texto
    question = '<h1>quantos anos vc tem?</h1>';			    	// carega a proxima questão
    setTimeout(timedQuestion, 2800);							//  delay

  }

    if (questionNum == 1) {
    var idade = input;
    document.getElementById("idade").innerHTML = idade;
    output.innerHTML = '<h1>então vc nasceu em ' + (2019 - idade) + ' rsrsr</h1>';
    document.getElementById("input").value = "";
    question = '<h1>pra onde vc viajaria?</h1>';
    setTimeout(timedQuestion, 2800);
    }

    if (questionNum == 2) {
    var destino = input;
    document.getElementById("destino").innerHTML = destino;
    output.innerHTML = '<h1>'+destino+ ' é lindo a noite</h1>';
    document.getElementById("input").value = "";
    question = '<h1>em que mês vc viajaria?</h1>';
    setTimeout(timedQuestion, 2800);
    }

    if (questionNum == 3) {
    var mespret = input;
    document.getElementById("mespret").innerHTML = mespret;
    output.innerHTML = '<h1>' +mespret+ ' é um otimo mês</h1>';
    document.getElementById("input").value = "";
  	question = '<h1>Mas porque em ' + mespret +'?</h1>';
    setTimeout(timedQuestion, 2800);
    }
    if (questionNum == 4) {
    var motivo = input;
    document.getElementById("motivo").innerHTML = motivo;

    document.getElementById("input").value = "";
  	question = '<h1>eu tenho um presente pra vc</h1>';
    setTimeout(timedQuestion, 2800);
    }

}
function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
