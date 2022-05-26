    const home = document.querySelector('#home');
    const servico = document.getElementById('servicos');
    const contato = document.getElementById('contato');
    const login = document.getElementById('login');
    const cadastro = document.getElementById('cadastro')
    
    home.addEventListener("click", ()=>{
        location.assign("../index.html");
    })
    
    servico.addEventListener("click", ()=>{
        location.assign("./servicos.html");
    })
    
    contato.addEventListener("click", ()=>{
        location.assign("./contatos.html");
    })
  
    login.addEventListener("click", ()=>{
        location.assign("./login.html");
    })
    
    cadastro.addEventListener("click", ()=>{
        location.assign("./cadastro.html");
    })