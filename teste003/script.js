function verificar() {
    var nasc = window.document.getElementById('nasc')
    var data = new Date()
    var anoat = data.getFullYear()
    var idade = anoat - Number(nasc.value)
    var res = window.document.getElementById('res')
    var img = window.document.createElement('img')

    if (nasc.value.length == 0 || nasc.value > anoat) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
        
    } else {
        var sex = window.document.getElementsByName('sex')
        var gen = ''
        if (sex[0].checked) {
            var gen = 'Homem'
            if (idade < 12) {
                img.setAttribute('src','imagens/hcrianca.png')
            } else if (idade < 21) {
                img.setAttribute('src','imagens/hjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','imagens/hadulto.png')
            } else {
                img.setAttribute ('src', 'imagens/hidoso.png')
            }
            
        } else if (sex[1].checked) {
            var gen = 'Mulher'
            if (idade < 12) {
                img.setAttribute('src','imagens/mcrianca.png')
            } else if (idade < 21) {
                img.setAttribute('src','imagens/mjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','imagens/madulta.png')
            } else {
                img.setAttribute('src','imagens/midosa.png')
            }
            
        }
        res.innerHTML = `Detectamos: ${gen} de ${idade} anos <br>`
        res.appendChild(img)
    }
    
}