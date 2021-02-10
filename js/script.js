// Carne - 400gr por pessoa / 6+ horas - 650gr
// Cerveja - 1200ml por pessoa / 6+ horas - 2000ml
// Refrigerante/água - 1000ml por pessoa / 6+ horas - 1500ml

// Crianças valem 0,5

function calcular () {
    const inputAdultos = document.querySelector('#adultos')
    const inputCriancas = document.querySelector('#criancas')
    const inputDuracao = document.querySelector('#duracao')

    const adultos = parseInt(document.querySelector('#adultos').value)
    const criancas = parseInt(document.querySelector('#criancas').value)
    const duracao = parseInt(document.querySelector('#duracao').value)

    let qtdCarne = 0
    let qtdCerveja = 0
    let qtdBebidas = 0

    if(duracao >= 6) {
        qtdCarne = adultos * 650 + criancas * 325
        qtdCerveja = adultos * 2000
        qtdBebidas = adultos * 1500 + criancas * 750
    }
    else {
        qtdCarne = adultos * 400 + criancas * 200
        qtdCerveja = adultos * 1200
        qtdBebidas = adultos * 1000 + criancas * 500
    }
}

document.querySelector('#btn-calcular').addEventListener('click', calcular)