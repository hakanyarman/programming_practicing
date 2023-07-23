const fs = require('fs');


const hello = "hello world";
console.log(hello);

const textInput = fs.readFileSync('txt/input.txt',
    { encoding: 'utf8', flag: 'r' });
    

console.log(textInput);    

const textOutput = `This is what we know about the avocado: ${textInput} \n Created on ${Date.now()}`;
console.log(textOutput);

const whereTheFileWillBeCreate = './txt/output.txt'
// hem dosyayı oluşturur hem de içine yazar.
fs.writeFileSync(whereTheFileWillBeCreate, textOutput);
console.log('The file is created on ' + whereTheFileWillBeCreate);
// ör:
// 8*3

// _+6 // => 30

// tab tuşuna bastığımızda ilgili değişkene ait tüm metotlar ve property ler listelenir.

// dosya okumak için kullanılan module : fs (file system)