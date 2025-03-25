const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const calcular = (num1, num2, operacao) => {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Não é possível dividir por zero!';
            }
        default:
            return 'Operação inválida';
    }
};
const perguntar = () => {
    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Digite o segundo número: ', (num2) => {
            rl.question('Escolha a operação (+, -, *, /): ', (operacao) => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                const resultado = calcular(num1, num2, operacao);
                console.log(`Resultado: ${resultado}`);
                rl.close();
            });
        });
    });
};
perguntar();

