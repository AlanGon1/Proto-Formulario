function clicar() {
    var res = document.querySelector('#dois')
    var foto = document.querySelector('#img')
    var nascimento = document.querySelector('#ano')
    var anoNascimento = Number(nascimento.value)
    var anoAtual = new Date()
    var anoFinal = anoAtual.getFullYear()
    var idade = anoFinal - anoNascimento

    var check = document.getElementsByName('check')
    var genero = ''
    
    if (check[0].checked) {
        genero = 'um homem'

    } else {
        genero = 'uma mulher'
    }
    
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    if (idade>=16 && idade<40 && genero == 'uma mulher') {
        foto.src = 'imagem/F-20anos.png'
    } else if (idade>=16&&idade<40&&genero == 'um homem') {
        foto.src = 'imagem/M-20anos.png'
    } else if (idade>=40&&idade<60 && genero == 'uma mulher') {
        foto.src = 'imagem/F-40anos.png'
    } else if (idade>=40&&idade<60 && genero == 'um homem') {
        foto.src = 'imagem/M-40anos.png'     
    } else if (idade>=60&&idade<130 && genero == 'uma mulher') {
        foto.src = 'imagem/F-60anos.png'
    } else if (idade>=60&&idade<130 && genero == 'um homem') {
        foto.src = 'imagem/M-60anos.png'
    } else if (idade<16&&idade>0 && genero == 'uma mulher') {
        foto.src = 'imagem/F-5anos.png'
    } else if (idade<16&&idade>0 && genero == 'um homem') {
        foto.src = 'imagem/M-5anos.png'
    } else {
        /* (idade == 0 || nascimento.value.lenght == 0) */
        res.innerHTML = `Verifique os dados e tente novamente`
        foto.src = ''
    }
}