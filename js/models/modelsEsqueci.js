class Model {
    constructor(){
        this.email = $('#email')
        this.email =
        this.senha1 = $('#senha1')
        this.senha2 = $('#senha2')
        this.resposta = ""
    }
}
function previnir(event){
    event.preventDefault()
    form.addEventListener("submit",previnir)
} 

function compara (){
    btn.addEventListener("click", function() {
        if (senha1.val() === senha2.val()){
return this.resposta = true
        }
    })
}

model.compara()
view.resultado(model.resposta)
view.resultado(model.compara())
// const btn = document.querySelector("#btn")
// const email = document.querySelector("#email")
// const senha1 = document.querySelector("#senha1")
// const senha2 = document.querySelector("#senha2")
// const form = document.querySelector("#form")
