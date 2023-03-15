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