class ValidaModel {
    //Elementos da página de Cadastro
    constructor() {   
        this.email = $("#email")
        this.senha = $("#senha")
        this.confirmaSenha = $("#confirmaSenha")
    }

 
     loginEmail(email) {
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
        
        validarSenha(senha) {
            if (senha.length < 6) {
                return 'error'
            } else {
                return 'success'
            }
        }
 }
 
