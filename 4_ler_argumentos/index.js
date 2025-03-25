// nome
console.log(process.argv);

const args = process.argv.slice(2);
console.log(args);

if (args.length < 2) {
    console.log("Erro: argumentos insuficientes. Use: node index.js nome=##### idade=##");
    process.exit(1);
}

const nome = args[0]?.split('=')[1] || "Desconhecido";
const idade = args[1]?.split('=')[1] || "Não informada";

console.log(`O nome dele é ${nome} e ele tem ${idade} anos!`);
