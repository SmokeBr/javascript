var agora = new Date()

var hora = agora.getHours()

console.log(`Agora sao ${hora}`)
if (hora < 12) {
    console.log('bom-dia');
} else if (hora <= 18) {
    console.log('boa  tarde');
} else {
    console.log('Boa noite');
}