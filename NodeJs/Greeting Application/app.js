const readline = require('readline');
const fs = require('fs');
const generateGreeting = require('./greetings');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('What is you name?',(name)=>{
    const greeting = generateGreeting(name);
    console.log(`${greeting}`);

    fs.writeFile('output.txt',greeting,(error)=>{
        if(error){
            console.log('Found Error',Error);
        }else{
            console.log('Successfull');
        }

        r1.close();
    });
});