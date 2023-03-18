// {
//   let x = 2;
// }
// x can NOT be used here
// console.log(x);
// ReferenceError: x is not defined

// curly bracets içinde  ( let ile ) tanımlanan değişkenlere dışarıdan erişilemez.
// const için de aynı durum geçerli.
// ama var ile tanımlanan değişkenlere dışarıdan erişilebilir


/* 
        script bir klasörün içinde ise klasör ismini de yazmalıyız.
        <script src="/js/myScript.js"><script>
        
        gizli değişkenler için ilk harf _ ile başlar. ör: let _id = 54;
*/

//   let x = 10;
//   // Here x is 10

//   {
//   let x = 2;
//   // Here x is 2
//   }

//    // Here x is 10

// yeni bir array , object , function oluşturduğunda const kullan.


// Bitwise operators (unknown)
//  ~ : 	NOT
// ^	XOR : exclusive or (özel veya kapısı )    (x ^ y) =   (x && !y) || (!x && y)
// XNOR : not XOR :  !((x && !y) || (!x && y))

/*
let x = 10;
x &&= 5;  => x = x && 5
*/

// object datatypes:
// 1) object : const person = {firstName:"John", lastName:"Doe"};
// 2) array : const cars = ["Saab", "Volvo", "BMW"];
// 3) date : const date = new Date("2022-03-25");

// console.log(13 + "merhaba") => '13merhaba' : string
 
// let x = 16 + 4 + "Volvo"; strine ulaşıncaya kadar number olarak davrandı(16 ile 4ü topladı) sonra stringe döndü
// let x = "Volvo" + 16 + 4; ilk string olduğu için hepsini stringe çevirdi

// let answer = "He is called 'Johnny'"; => string içinde tırnak işareti kullanacağımız zaman böyle kullanırız.


// in other languages:
// byte (8-bit), short (16-bit), int (32-bit), long (64-bit) , float (32-bit), double (64-bit).
// Javascript are always one type:

// double (64-bit floating point).

// == and ===
// let var1 = "2";
// let var2 = 2;
// console.log(var1==var2); // true
// console.log(var1 === var2); // false

// console.log(("3" + 5 + 8));
// console.log((3 + 5 + "8"));

// console.log(typeof (3.14)); // not float , it returns number

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }
// console.log(toCelcius(56));
// console.log(toCelcius);

// Using the example above, toCelsius refers to the function object, and toCelsius() refers to the function result.

// Accessing a function without () will return the function object instead of the function result.

// OBJECTS:
// object : car 
// properties : model , color , engine .....
// methods : drive() , brake()

//  method : functions in a class or object



// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// // this refers to object itself
// console.log(person.fullName());

// Alone, this keyword refers to the global object.

// In HTML event handlers, this refers to the HTML element that received the event:

// <button onclick="this.style.color='red'">Click to change button color</button>

// this burada button elementini refere ediyor

// EVENTS

// html events
// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked

// common html events:

// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page

// event handlers : a function that is executed when a specific event occurs
// such as a button clicked , a page finishing loading , a key being pressed.

// const button = document.getElementById("myButton");

// button.addEventListener("click", function() {
//   console.log("The button was clicked!");
// });

// primitive types : 
// numbers,strings, booleans , null , undefined, symbols 
// primitive types lar stack de depolanır

// **** javascript primitive olan stringi string objectine dönüştürür, böylece string object methodlarını 
// kullanmak mümkün olur 

// reference data types :
// objects , functions , collections , arrays , dates . 
// reference data types lar heap de tutulur, pointer'ı stackde tutulur
// pointer object in variable name i ile tutulur ve heapte tutulan objecti işaretler

// When you create a variable and assign it a value that is a reference data type, the computer does not directly store that data type in that variable (as is the case with primitive types).

// Comparing two JavaScript objects always returns false.
// ex: 
const object1 = {name:"hakan",surname:"yarman"};
const object2 = {name:"hakan",surname:"yarman"};
console.log(object1==object2); // false
console.log(object1===object2); // false


let text = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work

// stringlerin değerini arraylerde olduğu gibi bu şekilde değiştiremeyiz.

let price = 18;
let VAT = 0.25;
let total = `Total: ${(price * (4 + VAT))}`;


// HTML Templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ol>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ol>`;

document.writeln(html);         

// let x = 0.2 + 0.1; neden 0.2+0.1 = 0.30000.....04 çıkıyor? sor 

// NaN - Not a Number . ex: 100 / "Apple" is NaN
// let y = 100 / "10"; it is not NaN. result is 10.

// isNaN()  => a global javascript function.

// console.log(isNaN(y)); => false

// typeof(NaN) => number .? neden sor ?

let x =  2 / 0;
console.log(x); //Infinity
// Infinity is the largest possible number in javascript.
// typeof(Infinity) => number 


// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.
Number.isSafeInteger(10); // true
Number.isSafeInteger(12345678901234567890); // false

console.log(` type of (100+23) is ${typeof((100 + 23).toString())}`);

console.log(parseInt("18 pencil"));
console.log(parseInt("pencil 18")); // NaN
console.log(parseInt("-18.56")); // -18
console.log(parseFloat("-18.56")); // -18.56

// value swapping 
// 1)DESTRUCTURING ASSIGNMENT
let a = 5;
let b = 7;

[a,b] = [b,a];
console.log(`the value of a after swapping : ${a} and the value of b after swapping : ${b}`);

//2)TEMPORARY VARIABLE
let q = 1;
let w = 2;
let temp;
temp = q;
q = w;
w = temp;
console.log(`the value of a after swapping : ${q} and the value of b after swapping : ${w}`);
