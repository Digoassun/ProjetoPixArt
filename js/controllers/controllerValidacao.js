class ValidaController {
    validaEmail() {
        view.mostrarValid(modelo.email, modelo.validarEmail(modelo.email.val()))
    }

    validaNomeSobrenome(input) {
        view.mostrarValid(input, modelo.validarNome(input.val()))
    }

    validarRG() {
        view.mostrarValid(modelo.rg, modelo.validarRG(modelo.rg.val()))
    }

    validarSenha() {
        view.mostrarValid(modelo.senha, modelo.validarSenha(modelo.senha.val()))
    }

    validarMesmaSenha() {
        view.mostrarValid(modelo.confirmaSenha, modelo.validarSenhaIgual(modelo.senha.val(), modelo.confirmaSenha.val()))
    }

    validarCep() {
        view.mostrarValid(modelo.cep, modelo.validarCep(modelo.cep.val()))
    }

    validarReq(inputReq) {
        view.mostrarValid(inputReq, modelo.validarReq(inputReq.val()))
    }
}

const modelo = new ValidaModel
const view = new ValidaView
const controlador = new ValidaController

$(document).ready(() => {
    $(modelo.rg).mask("00.000.000-0")

})


$(modelo.email).keyup(() => {
    controlador.validaEmail()
})

$(modelo.nome).keyup(() => {
    controlador.validaNomeSobrenome(modelo.nome)
})

$(modelo.sobrenome).keyup(() => {
    controlador.validaNomeSobrenome(modelo.sobrenome)
})

$(modelo.rg).keyup(() => {
    controlador.validarRG()
})

$(modelo.senha).keyup(() => {
    controlador.validarSenha()
})

$(modelo.confirmaSenha).keyup(() => {
    controlador.validarMesmaSenha()
})

$(modelo.cep).keyup(() => {
    controlador.validarCep()
})

$(modelo.estado).blur(() => {
    controlador.validarReq(modelo.estado)
})

$(modelo.cidade).blur(() => {
    controlador.validarReq(modelo.cidade)
})


$(modelo.bairro).blur(() => {
    controlador.validarReq(modelo.bairro)
})

$(modelo.rua).blur(() => {
    controlador.validarReq(modelo.rua)
})


const erro = document.querySelector("#erro")

$(modelo.btnLogin).click((event) => {
    event.preventDefault()
    if (modelo.validarEmail(modelo.email.val()) == "success"  && modelo.validarSenha(modelo.senha.val())== "success" ) {
        location.assign("../index.html");

    }
    else if (modelo.validarEmail(modelo.email.val() == "error") || modelo.validarSenha(modelo.senha.val() == "error") ){
        erro.style.display = "flex"
    }

})

$(modelo.btnEsqueci).click((event) => {
    event.preventDefault()
    if (modelo.validarEmail(modelo.email.val()) == "success" && modelo.validarSenha(modelo.confirmaSenha.val()) == "success" && modelo.validarSenhaIgual(modelo.senha.val() == "success"))  {
        location.assign("../index.html");

    }
    else if (modelo.validarEmail(modelo.email.val()) == "error" || modelo.validarSenha(modelo.senha.val()) == "error" || modelo.validarSenha(modelo.confirmaSenha.val() =="error")){
        erro.style.display = "flex"
    }
})