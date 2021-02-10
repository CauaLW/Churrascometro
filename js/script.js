// Carne - 400gr por pessoa / 6+ horas - 650gr
// Cerveja - 1200ml por pessoa / 6+ horas - 2000ml
// Refrigerante/água - 1000ml por pessoa / 6+ horas - 1500ml

// Crianças valem 0,5

function calcular () {
    const inputAdultos = document.querySelector('#adultos')
    const inputCriancas = document.querySelector('#criancas')
    const inputDuracao = document.querySelector('#duracao')

    let adultos = parseInt(inputAdultos.value)
    let criancas = parseInt(inputCriancas.value)
    let duracao = parseInt(inputDuracao.value)

    let qtdCarne = 0
    let qtdCerveja = 0
    let qtdBebidas = 0

    if (!adultos > 0) {
        adultos = 0
    }

    if (!criancas > 0) {
        criancas = 0
    }

    if (!duracao > 0) {
        duracao = 0
    }

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

    document.querySelectorAll('.img-resultado').forEach(img => {
        img.style.display = 'inline'
    })

    const resultado = document.querySelectorAll('.resultado')
    
    document.querySelectorAll('span').forEach(span => span.remove())

    const spanCarne = document.createElement('span')
    spanCarne.innerHTML = `${Math.ceil(qtdCarne / 1000)} Kg de carne.`
    resultado[0].appendChild(spanCarne)

    const spanCerveja = document.createElement('span')
    spanCerveja.innerHTML = `${Math.ceil(qtdCerveja / 355)} latas de cerveja`
    resultado[1].appendChild(spanCerveja)

    const spanBebida = document.createElement('span')
    spanBebida.innerHTML = `${Math.ceil(qtdBebidas / 2000)} garrafas de bebidas`
    resultado[2].appendChild(spanBebida)
}

document.querySelector('#btn-calcular').addEventListener('click', calcular)