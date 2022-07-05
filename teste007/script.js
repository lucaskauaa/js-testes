var valores = document.getElementById('valores')
var select = document.getElementById('select')
var res = document.getElementById('res')
var val = []

function adicionar() {
    res.innerHTML = ''
    if (valores.value < 1 || valores.value > 100 || valores.value.length == 0) {
        window.alert('Insira um valor válido')
    } else if (val.indexOf(Number(valores.value)) != -1) {
        window.alert('Valor já digitado')
    } else {
        val.push(Number(valores.value))
        var option = document.createElement('option')
        option.setAttribute('value',val)
        option.text = `Valor ${valores.value} adicionado.`
        select.appendChild(option)
        valores.value = ''
        valores.focus()
    }
}

function finalizar() {
    if (val.length == 0) {
        window.alert('Insira um valor')
    } else {
        res.innerHTML = `<p>Ao todo temos ${val.length} números cadastrados.</p>`
        var maior = val[0]
        var menor = val[0]
        var soma = 0
        var media = 0
        for (var c in val) {
            if (val[c] > maior) {
               maior = val[c]
            }
            if (val[c] < menor) {
                menor = val[c]
            }
            soma += Number(val[c])
            media = soma / val.length
        }
        res.innerHTML += `<p>Maior valor encontrado foi ${maior}</p>`
        res.innerHTML += `<p>Menor valor encontrado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media.toFixed(2)}</p>`
    }
}