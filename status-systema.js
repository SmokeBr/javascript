const os = require('os')

setInterval( () => {

const {freemem, totalmem } = os

const total = parseInt(totalmem() / 1024 / 1024)
const mem = parseInt(freemem() / 1024 / 1024)
const percents = parseInt((mem / total) * 100)

const stats = {
    free: `${mem} Mb`,
    total: `${total} Mb`,
    usage: `${percents}  % `
}

console.clear()
console.log("===PC ESTATUS ===")
console.table(stats)
console.log(os.platform())

},1000)
