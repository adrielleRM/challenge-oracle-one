var textInput = document.querySelector("#input-texto");
var ountInput = document.querySelector("#output");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function encriptar (){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/,"enter"). replace(/i/, "imes").replace(/a/, "ai").replace(/o/, "ober").replace(/u/,"ufat");
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto" style="resize: none;">' + resultCripto +'</textarea>' + '<button class="btn-copiar" id= "copiar" onClick="copiar()">Copiar</button>'

}

function descriptar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/, "e").replace(/imes/, "i").replace(/ai/, "a").replace(/ober/, "o").replace(/ufat/,"u");
     document.getElementById('output').innerHTML = '<textarea readonly id="input-texto" style="resize: none;">' + resultDescripto +'</textarea>' + '<button class="btn-copiar" id= "copiar" onClick="copiar()">Copiar</button>'
}

function copiar(){
    var textoCopiar = document.getElementById('input-texto');
    textoCopiar.select();
    document.execCommand('copy');
    alert("Texto copiado");
}