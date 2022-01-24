var descripto = "";

var botaoDescripto = document.querySelector("#btn-descripto");

//troca as vogair por códigos
function descriptografar(texto)
{
    var retorna = texto;
    if(retorna.includes("ai"))
    {
        retorna = retorna.replaceAll("ai", "a");
    }
    if (retorna.includes("enter"))
    {
      retorna = retorna.replaceAll("enter", "e")
    }
    if (retorna.includes("imes"))
    {
      retorna = retorna.replaceAll("imes", "i");
    }
    if (retorna.includes("ober"))
    {
      retorna = retorna.replaceAll("ober", "o");
    }
    if (retorna.includes("ufat"))
    {
      retorna = retorna.replaceAll("ufat", "u");
    }
    else
    {
      retorna = retorna;
    }

    return retorna;
};


botaoDescripto.addEventListener("click", function(event)
{
    event.preventDefault();
    descripto = frase.value; //pegando o valor do texto a descriptografar

    var descriptado = descriptografar(descripto);

    msg = document.querySelector("#mensagem");
    msg.value = descriptado;
});
