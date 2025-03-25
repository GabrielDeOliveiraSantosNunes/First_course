const minimist = require('minimist')

const agrs = minimist(process.argv.slice(2))

console.log(agrs)

const nome = agrs['name']

console.log(nome)
const profissao = agrs['profissao']

console.log(nome, profissao)

console.log(`O nome dele e ${nome} e a profissao dele e ${profissao}`)
