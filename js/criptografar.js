var cripto = "";
var msg = "";
var botaoCripto = document.querySelector("#btn-cripto");

//troca as vogair por códigos
function criptografar(letra)
{
    if(letra == "a")
    {
        return "ai";
    }
    else if (letra == "e")
    {
      return "enter";
    }
    else if (letra == "i")
    {
      return "imes";
    }
    else if (letra == "o")
    {
      return "ober";
    }
    else if (letra == "u")
    {
      return "ufat";
    }
    else
    {
        return letra;
    }
};

botaoCripto.addEventListener("click", function(event)
{
    event.preventDefault();
    cripto = frase.value; //pegando o valor do texto a criptografar

    //jogando o cripto numa array
    var array = [];
    for (var i = 0; i < cripto.length; i++)
    {
        array.push(cripto[i]);
    };

    //varrendo o array e trocando as vogais
    for (var i = 0; i < array.length; i++)
    {
        array[i] = criptografar(array[i]);
    };

    //jogando o texto criptado
    msg = document.querySelector("#mensagem");
    msg.value = array.join("");
});
