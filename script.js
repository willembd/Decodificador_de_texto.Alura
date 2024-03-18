var container_input_text = document.querySelector("#container_input_text");
var container_aparece = document.querySelector("#container_aparece");
//var resultado = document.getElementById("resultado");

function criptografar(){
    var texto = container_input_text.value;

    if(!texto){
        document.getElementById("resultado").innerHTML = "Insira uma palavra para Criptografar";
        return;
    }

    var resultCripto = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi,"ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
    document.getElementById("resultado").innerHTML = " "+ resultCripto;
    document.getElementById("resultado").setAttribute('data-texto', resultCripto);
    
}

function descriptografar(){
    var texto = container_input_text.value;

    if(!texto){
        document.getElementById("resultado").innerHTML = "Insira uma palavra para Descriptografar";
        return;
    }

    var resultDescripto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
 
    document.getElementById("resultado").innerHTML = " "+ resultDescripto;
    document.getElementById("resultado").setAttribute('data-texto', resultDescripto);

}

function copiar(){
    var textoCopiado = document.getElementById("resultado").getAttribute('data-texto');
    if (textoCopiado) {
        navigator.clipboard.writeText(textoCopiado).then(function() {
            alert('Texto copiado com sucesso!');
        }, function(err) {
            console.error('Erro ao copiar texto: ', err);
        });
    } else {
        alert('Nada para copiar.');
    }
}



