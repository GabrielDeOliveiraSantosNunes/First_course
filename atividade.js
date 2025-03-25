const inquirer = require('inquirer');
const chalk = require('chalk')

inquirer.prompt([
    {
        name: "p1",
        message: "Qual seu nome?"
    },
    {
        name: "p2",
        message: "Qual sua idade?"
    }
])
.then(answers => {
    console.log(answers);
    const nome = answers.p1;
    const idade = answers.p2;

    const response = `Olá, ${nome} de idade ${idade}`
    console.log(chalk.bgYellow.black(response));
})
