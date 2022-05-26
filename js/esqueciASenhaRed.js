const esqueciSenha = document.getElementById('esqueciSenha')

esqueciSenha.addEventListener("click", (event)=>{
    event.preventDefault()
    location.assign("./esqueci_senha.html")
})