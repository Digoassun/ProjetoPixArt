class ValidaView {
    mostrarValid(inputId, validation) {
        $(inputId).attr("class", `nes-input is-${validation}`)
    }

}