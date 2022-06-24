function tabuada() {
    var tab = window.document.getElementById('tab')
    var tab1 = Number(tab.value)
    var res = document.getElementById('res')

    if (tab.value.length == 0) {
        window.alert('[ERRO] Digite um numero.')
    } else {
        res.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var opt = document.createElement('option')
            opt.text = `${tab1} x ${c} = ${tab1*c}`
            res.appendChild(opt)
    
        }
    }
   
}