const home = document.querySelector('#home');
const servico = document.querySelector('#servicos');
const contato = document.querySelector('#contato');
const login = document.querySelector('#login');
const cadastro = document.querySelector('#cadastro');

home.addEventListener("click", () => {
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

//