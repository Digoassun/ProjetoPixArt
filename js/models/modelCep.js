class CepModel {
    constructor() {
        this.estado = '';
        this.cidade = '';
        this.rua = '';
        this.bairro = '';
        this.cep = $('#cep');
    }

    reqCEP() {
        const requisicao = new XMLHttpRequest()

        requisicao.addEventListener('load', () => {
            if (requisicao.status == 200) {
                const dados = this._processaResposta(requisicao.responseText)
                this._att(dados)
            } else if(requisicao.status ==400){
                throw new Error('Cep invalido')
            }
        })
        requisicao.open('GET', `https://viacep.com.br/ws/${this.cep.val()}/json/`, false)
        requisicao.send()
    }

    _processaResposta(respostaString) {
        const resposta = JSON.parse(respostaString)
        return resposta
    }

    _att(dados) {
        this.estado = dados.uf
        this.cidade = dados.localidade
        this.bairro = dados.bairro
        this.rua = dados.logradouro
    }
}