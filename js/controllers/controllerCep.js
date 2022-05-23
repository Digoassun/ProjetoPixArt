class CepController {
    passaCep() {
        const validacao = new CepModel($('#cep').val())
        const mostra = new CepView()
        if(!validacao.validaCep(validacao.cep)){
            validacao.reqCep()                    
        } else {
            alert('oie')
        }
        mostra.mostraReq(validacao)
    }
}

const controller = new CepController()
$('#buscaCep').click((e) => {
    e.preventDefault()
    controller.passaCep()
})