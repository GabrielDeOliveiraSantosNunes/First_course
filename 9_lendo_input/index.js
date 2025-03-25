const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Qual a sua linguagem preferida? `, (language) => {
  if (language === 'phyton') {
    console.log('isso nem e linguagem!')
  } else {
  
    console.log(`A minha linguagem preferida é: ${language}`);
  }


    readline.close();
  });
