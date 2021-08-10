function clicar() {
    var res = document.querySelector('#dois')
    var nascimento = document.querySelector('#ano')
    var anoNascimento = Number(nascimento.value)
    var anoAtual = new Date()
    var anoFinal = anoAtual.getFullYear()
    var calculo = anoFinal - anoNascimento

    res.innerHTML = `Detectamos # com ${calculo} anos `

}