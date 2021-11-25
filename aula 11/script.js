function carregar() {
    let msg1 = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg1.innerHTML = `Agora são ${hora} horas. `
    //let hora = 23
    if  (hora >= 0 && hora < 12) {
        img.src = 'manha.jpeg'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpeg'
        document.body.style.background = 'red'
    } else {
        img.src = 'noite.jpeg'
        document.body.style.background  = 'black'
    }
}
