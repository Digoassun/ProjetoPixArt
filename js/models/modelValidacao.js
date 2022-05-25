class ValidaModel {
    //Elementos da página de Cadastro
    constructor() {
        this.nome = $("#nome")
        this.sobrenome = $("#sobrenome")
        this.rg = $("#rg")
        this.email = $("#email")
        this.senha = $("#senha")
        this.confirmaSenha = $("#confirmaSenha")
        this.cep = $("#cep")
        this.estado = $("#estado")
        this.cidade = $("#cidade")
        this.bairro = $("#bairro")
        this.rua = $("#rua")
    }

    // Validação do Input de Email

    validarEmail(email) {
        if (email == "") {
            return 'error'
        } else {
            const arroba = /@/
            if (!arroba.test(email)) {
                return 'error'
            } else if (email.length <= 8) {
                return 'error'
            } else {
                return 'success'
            }
        }
    }

    // Validação do Input de Nome

    validarNome(nome) {
        if (nome == "" || isNaN(nome) == false) {
            return 'error'
        } else if (nome.length <= 2) {
            return 'error'
        } else {
            return 'success'
        }
    }

    // Validação do Input de RG    

    validarRG(rg) {
        if (rg.length != 12) {
            return 'error'
        } else {
            return 'success'
        }

    }


    // Validação do Input de Senha

    validarSenha(senha) {
        if (senha.length < 6) {
            return 'error'
        } else {
            return 'success'
        }
    }

    // Validação do Input de Confirmar Senha    
    
    validarSenhaIgual(senha1, senha2) {
        if (senha2 == "") {
            return 'error'
        } else if (senha1 !== senha2) {
            return 'error'
        } else {
            return 'success'
        }

    }

    //Validação de CEP

    validarCep(cep){
        if (cep.length < 8 ){
            return 'error'
        } else {
            return 'success'
        }
    }   
    
    validarReq(req){
        if(typeof req != 'string'){
            return ''
        } else {
            return 'success'
        }
    
    }
}