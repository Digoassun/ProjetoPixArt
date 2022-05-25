const home = document.querySelector('#homeI');
const servicos = document.querySelector('#servicosI');
const contatos = document.querySelector('#contatoI')
const login = document.querySelector('#loginI')
const cadastro = document.querySelector('#cadastroI')
const saibaMais1= document.querySelector('#botaoSaiba1')
const saibaMais2= document.querySelector('#botaoSaiba2')
const saibaMais3= document.querySelector('#botaoSaiba3')
const saibaMais4= document.querySelector('#botaoSaiba4')

home.addEventListener('click', () => {
    location.assign('./index.html')
})
servicos.addEventListener('click', () => {
    location.assign('./html/servicos.html')
})

contatos.addEventListener('click', () => {
    location.assign('./html/contatos.html')
})

login.addEventListener('click', () => {
    location.assign('./html/login.html')
})

cadastro.addEventListener('click', () => {
    location.assign('./html/cadastro.html')
})

saibaMais1.addEventListener('click', () => {
    location.assign('./html/servicos.html')
})
saibaMais2.addEventListener('click', () => {
    location.assign('./html/servicos.html')
})
saibaMais3.addEventListener('click', () => {
    location.assign('./html/servicos.html')
})
saibaMais4.addEventListener('click', () => {
    location.assign('./html/servicos.html')
})

