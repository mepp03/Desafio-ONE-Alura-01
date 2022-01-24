var botaoCopiar = document.querySelector("#btn-copy");
var frase = document.querySelector("#input-texto");

function copiarCripto()
{
    var copiar = document.querySelector("#mensagem").value;
    navigator.clipboard.writeText(copiar);
}

botaoCopiar.addEventListener("click", function(event)
{
    copiarCripto();
});

frase.addEventListener("input", function()
{
    var txt = this.value;
    txt = txt.toLowerCase();
    this.value = txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
});

/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/
