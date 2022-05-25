
// Mostrar resposta de Validação no Input

class ValidaView {
    mostrarValid(inputId, validation) {
        $(inputId).attr("class", `nes-input is-${validation}`)
    }

}

