$("#buscaCep").click((e) => {
    e.preventDefault()
    const cepInput = $('#cep').val()
    $.ajax({
        url: `https://viacep.com.br/ws/${cepInput}/json/`,
        type: "GET",
        success: function (data) {
            $("#estado").text(data.uf)
            console.log(data)
            $("#cidade").text(data.localidade)
            $("#bairro").text(data.bairro)
            $("#rua").text(data.logradouro)
        }
    })
})