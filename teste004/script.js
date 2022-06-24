function contar() {
    var num1 = window.document.getElementById('num1')
    var num2 = window.document.getElementById('num2')
    var num3 = window.document.getElementById('num3')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var n3 = Number(num3.value)
    var res = window.document.getElementById('res')

    if (num1.value.length == 0 || num2.value.length == 0 || num3.value.length == 0){
        res.innerHTML = 'Impossivel Contar.'
    } else if (n3 == 0){
       window.alert('Passo invalido, considerando PASSO 1')
       var n3 = 1
       for (var c1 = n1; c1 <= n2; c1 = c1 + n3) {
        res.innerHTML = `Numero: ${c1}<br>`
    }
    } else if (n3 != 0) {
        for (var c1 = n1; c1 <= n2; c1 = c1 + n3) {
            res.innerHTML = `Numero: ${c1}<br>`
    }
    }
}