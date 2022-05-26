const home = document.querySelector('#home');
const servico = document.getElementById('servicos');
const contato = document.getElementById('contato');
const login = document.getElementById('login');
const cadastro = document.getElementById('cadastro')
const btnServicos = document.querySelectorAll('.btn-servicos');
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const esqueciSenha = document.getElementById('esqueciSenha')

home.addEventListener("click", ()=>{
    location.assign("../index.html");
})

servico.addEventListener("click", () => {
    location.assign("./servicos.html");
})

contato.addEventListener("click", () => {
    location.assign("./contatos.html");
})

login.addEventListener("click", () => {
    location.assign("./login.html");
})

cadastro.addEventListener("click", () => {
    location.assign("./cadastro.html");
})

// esqueciSenha.addEventListener("click", (event)=>{
//     event.preventDefault()
//     location.assign("./esqueci_senha.html")
// })

// btnServicos[0].addEventListener("click", () => {
//     location.assign("./cadastro.html");
// })

// btnServicos[1].addEventListener("click", () => {
//     location.assign("./cadastro.html");
// })

// btnServicos[2].addEventListener("click", () => {
//     location.assign("./cadastro.html");
// })


