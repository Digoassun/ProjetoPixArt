class CepModel {
    constructor(cep){
        this.estado='';
        this.cidade='';
        this.rua='';
        this.bairro='';
        this.cep=$('#cep');
    }

    reqCEP() {
        const requisicao = new XMLHttpRequest()

        requisicao.addEventListener('load',()=>{
            if(requisicao.status==200){
                const dados = this._processaResposta(requisicao.responseText)
                this._att(dados)
            }
        })
        requisicao.open('GET', `https://viacep.com.br/ws/${this.cep.val()}/json/`, false)       
        requisicao.send()
    }

    _processaResposta(respostaString){
        const resposta = JSON.parse(respostaString)
        return resposta
    }

    _att(dados){
        this.estado = dados.uf
        this.cidade = dados.localidade
        this.bairro = dados.bairro
        this.rua = dados.logradouro
    }


}



// $("#buscaCep").click((e) => {
//     e.preventDefault()
//     const cepInput = $('#cep').val()
//     $.ajax({
//         url: `https://viacep.com.br/ws/${cepInput}/json/`,
//         type: "GET",
//         success: function (data) {
//             console.log(data)

//             $('#estado').val(data.uf)
//             $("#cidade").val(data.localidade)
//             $("#bairro").val(data.bairro)
//             $("#rua").val(data.logradouro)
//         }
//     })
// })