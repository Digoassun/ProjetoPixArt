// var email = document.getElementById('email')
// var password = document.getElementById('senha')

// /* var email = prompt("Qual é o seu email?"); // resilia@resilia  */

// var respostaValidacao = validaEmail(email);
// console.log(respostaValidacao);
// ExibeResultadoValidacao(respostaValidacao);

// function validaEmail(email) {
//     var posicao = email.indexOf("@");
//     if (posicao > -1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function ExibeResultadoValidacao(resultado) {
//     if (resultado) {
//         document.write("email validado");
//     } else {
//         document.write("email fornecido INVALIDO");
//     }
// }
class ValidaController {
    validaEmail() {
        view.mostrarValid(modelo.email, modelo.validarEmail(modelo.email.val()))
    }
    validarSenha() {
        view.mostrarValid(modelo.senha, modelo.validarSenha(modelo.senha.val()))
    }
}
const modelo = new ValidaModel
const view = new ValidaView
const controlador = new ValidaController

$(modelo.email).keyup(() => {
    controlador.validaEmail()
})

$(modelo.senha).keyup(() => {
    controlador.validarSenha()
})