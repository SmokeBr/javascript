function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO Verifiar os dados denovo')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <10) {
                //crinça
                img.setAttribute('src', 'foto-bb-m.jpg')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'foto-bb-f.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}