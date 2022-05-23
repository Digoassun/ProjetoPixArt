const btn = document.querySelector("#btn")
const email = document.querySelector("#email")
const senha1 = document.querySelector("#senha1")
const senha2 = document.querySelector("#senha2")
const form = document.querySelector("#form")
btn.addEventListener("click", function() {
    function previnir(event){
        event.preventDefault()
    }
    form.addEventListener("submit",previnir)
    if (senha1 === senha2){
        console.log("igual")
    }
})