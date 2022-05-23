var email = document.getElementById('email')
var password = document.getElementById('senha')

/* var email = prompt("Qual é o seu email?"); // resilia@resilia  */

var respostaValidacao = validaEmail(email);
console.log(respostaValidacao);
ExibeResultadoValidacao(respostaValidacao);

function validaEmail(email) {
    var posicao = email.indexOf("@");
    if (posicao > -1) {
        return true;
    } else {
        return false;
    }
}

function ExibeResultadoValidacao(resultado) {
    if (resultado) {
        document.write("email validado");
    } else {
        document.write("email fornecido INVALIDO");
    }
}