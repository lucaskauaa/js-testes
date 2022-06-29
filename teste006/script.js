var num = (document.getElementById('num'))
var slct = document.getElementById('slct')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if  (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado.`
        slct.appendChild(item)
        res.innerHTML = ''

    }   else {
        window.alert ('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert ('Valor inválido ou já encontrado na lista')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p><p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>A soma dos valores ${soma}</p>`
        res.innerHTML += `<p>A média dos valores ${media}</p>`
    }
}

/*for (var c = 0;c <= total; c++) {
    var soma = soma + valores[c]
}
window.alert (Number(soma))*/