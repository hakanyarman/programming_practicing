// {
//   let x = 2;
// }
// x can NOT be used here
// console.log(x);
// ReferenceError: x is not defined

const { set } = require("mongoose");

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
const object1 = { name: "hakan", surname: "yarman" };
const object2 = { name: "hakan", surname: "yarman" };
console.log(object1 == object2); // false
console.log(object1 === object2); // false

let text = "HELLO WORLD";
text[0] = "A"; // Gives no error, but does not work

// stringlerin değerini arraylerde olduğu gibi bu şekilde değiştiremeyiz.

let price = 18;
let VAT = 0.25;
let total = `Total: ${price * (4 + VAT)}`;

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

let x = 2 / 0;
console.log(x); //Infinity
// Infinity is the largest possible number in javascript.
// typeof(Infinity) => number

// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.
Number.isSafeInteger(10); // true
Number.isSafeInteger(12345678901234567890); // false

console.log(` type of (100+23) is ${typeof (100 + 23).toString()}`);

console.log(parseInt("18 pencil"));
console.log(parseInt("pencil 18")); // NaN
console.log(parseInt("-18.56")); // -18
console.log(parseFloat("-18.56")); // -18.56

// value swapping
// 1)DESTRUCTURING ASSIGNMENT
let a = 5;
let b = 7;

[a, b] = [b, a];
console.log(
  `the value of a after swapping : ${a} and the value of b after swapping : ${b}`
);

//2)TEMPORARY VARIABLE
let q = 1;
let w = 2;
let temp;
temp = q;
q = w;
w = temp;
console.log(
  `the value of a after swapping : ${q} and the value of b after swapping : ${w}`
);

// inner html' in içindeki html kodlarını "" içinde , javascript kodunu olduğu gibi yazarız
// veya ikisini de ` ` ters tırnak içinde yazarız, javascript kodları için ${} oluştururuz.
document.getElementById("paragraph").innerHTML =
  typeof "" +
  "<br>" +
  typeof "John" +
  "<br>" +
  typeof "John Doe" +
  "<br>" +
  typeof 0 +
  "<br>";
// veya

document.getElementById("paragraph").innerHTML = `
type of john is ${typeof "john"} 
`;

// w3 de js examples kısmında javascript strings e kadar geldim.

//forEach()  => array iteration method dur.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction); // fruits array indeki her bir eleman için myFunction fonksiyonunu çağırdı
// callback function
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
//-------------------------------------------------

const nums = [1, 2, 3];

nums.forEach((num) => console.log(num));
//-------------------------------------------------

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
console.log(sum);
//-------------------------------------------------

const numbers2 = [65, 44, 12, 4];
numbers2.forEach(myFunction2);

function myFunction2(item, index, arr) {
  // foreach methodu 3 parametre alır. item,index ve array.
  arr[index] = item * 10;
}
console.log(numbers2);
//-------------------------------------------------
// forEach with arrow function
const students = ["John", "Sara", "Jack"];

students.forEach((element) => {
  console.log(element);
});

//---------------,----------------------------------
const myArray = [9, 8, 7, 6];
myArray[8] = 78;
console.log(myArray); //[ 9, 8, 7, 6, <4 empty items>, 78 ]
// aradaki indexler de empty items oluştu.
//---------------,----------------------------------

// type of array is object
console.log(typeof myArray); // object
// peki bir şeyin array olup olmadığını nasıl anlayacağız?
// isArray() metodu ile
console.log(Array.isArray(myArray)); // true
// veya instance of Array kullanılır.
console.log(myArray instanceof Array);

console.log(0.1 + 0.2); // 0.30000000000000004

//ARRAY METHODS:

// converting array to string:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(
  `${fruits2.toString()}, type of fruits after the converting is ${typeof fruits2.toString()}`
);
// arrayler bu şekilde stringe dönüştürülebilir.

// join method
console.log(fruits2.join("-"));
// array elemanlarını bir stringde toplar. ama join in aldığı parametreyi aralarına koyar.

// pop() arraydeki son elemanı siler ; shift ilk elemanı siler. unshift() ilk index e eleman ekler.

// iki array i birleştirmek: concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const yourBoys = ["ali", "veli", "mehmet"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
console.log(myGirls.concat(myBoys, yourBoys)); // 3 arrayi birleştirme

// arr.sort() method
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.sort()); // alfabetik sıraya göre dizdi.
console.log(fruits3); // ve arrayi ona göre değiştirdi. artık array her zaman böyle.
fruits3.reverse(); // array sıralamasını tam tersi olarak değiştirdi.
console.log(fruits3);

// sort method'u number ları sıralamada doğru çalışmaz
const numbers4 = [5, 35, 17, 9];
numbers4.sort();
console.log(numbers4); // [ 17, 35, 5, 9 ] çünkü 35 olarak algılamaz ,35 in 3 ünü alır,
// 5 den küçük olduğu için öne atar

// çözüm olarak bu şekilde kullanabiliriz
numbers4.sort(function (a, b) {
  return a - b;
}); // [ 5, 9, 17, 35 ]
//now min value : numbers[0] ; max value : numbers[numbers.length-1]
// azalan sıraya göre sıralamak için:
numbers4.sort(function (a, b) {
  return b - a;
}); // [ 35, 17, 9, 5 ]
//now max value : numbers[0] ; min value : numbers[numbers.length-1]
console.log(numbers4);

// array.map() methodu
// array iteration method dur.
// orijinal array i değiştirmez.
// içine yazılan fonksiyonun işlevini array'in HER BİR elemanI için uygulayıp yeni array oluşturur.
// map() içine callback function alır. foreach gibi. parametreleri de aynıdır . value,index,array.
// sadece value yani ilk parametre yazıldığı durumlarda index ve array parametreleri atlanır.

// array.filter() metodu
// arraydeki her eleman için yazdığımız koşulu kontrol eder ; eğer koşulu sağlamıyorsa
// yeni oluşturduğu arrayden o elamanları siler.

const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
  return item % 2 == 0;
});
console.log(evens);

// tüm array iteration methodları içine callback function alır

console.log(Boolean("")); // empty string in boolean ı false dur

// 20 dk. + 20 dk + 35dk

// ternary conditional operator
const age = 20;
const age_group = age >= 18 ? "Adult" : "Child";
console.log(age_group);

// 2 < "12" =>true  : çünkü number olan 2 string olan "12" yi numbera dönüşmesi için zorladı.
// burada "12" yi number olarak algıladı.

//"2" < "12" =>	false : burada ikisi de string olduğu için. number'a dönüşmediler. 2 , 12nin ilk basamağı olan
// 1 den daha küçük olmadığı için false döndü

// "3" < "45" => true : çünkü 3 , 45in ilk basamağı olan 4 den daha küçük.
console.log("8" < "123"); // false

//The Nullish Coalescing Operator (??)

let name = null;
let text = "missing";
let result = name ?? text;
console.log(result); // eğer 1.parametre null ise 2. parametreyi alır.

// The Optional Chaining Operator (?.)
//eğer bir object undefined veya null ise hata vermeden undefined/null yazdırır.
// undefined veya null değilse normalde olduğu gibi değerini yazdırır
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car?.name); // undefined
console.log(car?.type); // Fiat

//-----------------------------------------------
// switch-case
// The default case does not have to be the last case in a switch block:,
switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
/////////////////////////
switch (new Date().getDay()) {
  case 4:
  case 5: // aynı kod bloğunda birden çok case yazılabilir.
    // burada case 4 veya 5 ise text = "Soon it is Weekend" olur.
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
// multiple case
switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    text = "bugün haftaiçi";
    break;
  default:
    text = "bugün haftasonu";
}
console.log(text);

// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object

const cars = [];
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
// for un içinde birçok değer atanabilir.
// ancak bu değerleri let ile atadıysan değerler sadece for kod bloğu içinden erişilebilir.
// var ile atadıysan kod bloğu dışından da erişilebilir.

var i = 5;
for (var i = 0; i < 10; i++) {
  // some code
}
// Here i is 10

//----------------------
let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5

//---------------------------
// for(;;) => sonsuz döngü.

// for in - for of da kaldım.

// for in
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
let properties = "";
for (let x in person) {
  text += person[x];
  properties += x + " ";
}
console.log(text);
console.log(properties);
// for in döngüsü bir object in propertie leri arasında döner.

// for of
// object , array veya stringin her değeri için döner
// object için:

const cars2 = ["BMW", "Volvo", "Mini"];

let text2 = "";
for (let x of cars2) {
  text2 += x + " ";
}
console.log(text2);

//string için

let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x; // burada x language stringinin her bir harfi.
}
console.log(text);

//break - continue
// break : döngüyü tamamen kırar
// continue : döngünün o tekrarını geçer , döngünün başına döner.
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // 2 yi atladı
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // 3 e geldiğinde döngüyü kırdı.
  }
  console.log(i);
}

// set-array-map
// set , unique elemanları içerir. aynı olan array elemanlarını siler 1 tane bırakır.
const myArr = [1, 2, 3, 4, 5, 5, 5, 1, 2];
const mySet = new Set(myArr);
const mySet2 = new Set([1, 2, 3]);
const uniqueArr = [...mySet];

console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }
console.log(myArr); // [ 1, 2, 3, 4, 5, 5, 5, 1, 2]

console.log(uniqueArr); // [ 1, 2, 3, 4, 5 ];

// set'in içine primitive value veya object ve array de ekleyebiliriz. add komutu ile.
mySet.add(6);
// mySet.add(7,8,9,10); // birden fazla elemanı aynı anda eklemeye izin vermez.
console.log(mySet); // Set(6) { 1, 2, 3, 4, 5, 6 }

mySet.add({ myName: "Hakan", lastName: "Yarman" }); //object de eklenebilir.
const array = ["a", "b", "c"];
mySet.add(array); // array de eklenebilir.
console.log(mySet);

// delete set eleman.
mySet.delete(array);
mySet.delete(6);
console.log(mySet);

// clear set
// mySet.clear(); // clear all set eleman (not the set itself) , no need parameter.
// after the clearing mySet still exist.
console.log(mySet); //Set(0) {}

// set.has() içine yazdığımız parametre set içinde bulunuyor mu? //return true or false
const doesInclude2 = mySet.has(2);
console.log(doesInclude2);
// set.size
console.log(mySet.size);

//differences between array and set:
// array ordered objectler den oluşur; bu yüzden index numarasına göre erişebiliriz.
// ama set deki elemanlara index numarası ile erişemeyiz.
console.log(myArr[1]);
console.log(mySet[1]); // undefined

//map
// javascript object sadece 1 key li objectleri destekler,eğer birden çok key koyarsak;
// sadece son keyi hatırlar , bu sorunu ortadan kaldırmak için map kullanırız.
// map de key herhangi bir veri tipinde olabilir
// map.set() => map deki bir keyin value sunu tanımlar
// map.get() => map deki bir keyin value sunu getirir

const myMap = new Map([
  ["name", "hakan"],
  ["surname", "yarman"],
]);
console.log(myMap); // Map(2) { 'name' => 'hakan', 'surname' => 'yarman' }

const myObject = {};

const a = {};
const b = {};

myObject[a] = "a";
myObject[b] = "b";
console.log(myObject); // { '[object Object]': 'b' }

const myMap2 = [
  [a, "a"],
  [b, "b"],
]; // birden çok key i tutar.
console.log(myMap2); // [ [ {}, 'a' ], [ {}, 'b' ] ]

const meyveler = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
meyveler.set("pineapples", 450);
meyveler.set("apples", 250);
console.log(meyveler.get("apples"));
console.log(meyveler.has("pineapples"));
console.log(meyveler.size);
// objects map arasındaki farklar:

// object de size propertysi yoktur , maps de size property si vardır.
// object de key mutlaka string olmalı , maps de key herhangi bir data type da olabilir
// object de key ler sıralı değil , maps de sıralı

//----------------------------------------------------------------------------------------------

console.log(typeof new Array(1, 2, 3)); // array lerin tipi objectdir
console.log(typeof null); // null un tipi object dir.
console.log(typeof undefined);
console.log(
  typeof function myFunc() {
    return 5 + 2;
  }
); // function un tipi function dır.

const book = undefined;
console.log(book, typeof book); // hem value undefined hem type of value undefined.

console.log(
  typeof undefined,
  typeof null,
  null == undefined,
  null === undefined
); //undefined object true false

// instanceof operator:

const books = ["A", "B", "C"];
console.log(books instanceof Array); // true
console.log(books instanceof Object); // true
console.log(books instanceof String); // false

// ---------------------------------------------------------
//  javascript void

//   anchor tagleri arasındaki hrefe bir şey return etmeyen fonksiyon yazmamızı sağlar

//------------------ type conversion --------------------------
console.log(Number(" "),Number("")); // 0 0 
// boş stringin numbera dönüşümü 0 dır.

// string bir number ın başına + koyarsak type ı number olur.
let y= "5";      // y is a string
let x = + y;      // x is a number
console.log(typeof y , typeof x );

// toExponential() üstel görünüme çevirir
console.log((1000000000).toExponential(),typeof((1000000000).toExponential())); //1e+9 string


console.log(Boolean("")); //false
console.log(Boolean([])); //true. boş arrayin boolean ı true olur.
console.log(Boolean({})); //true. boş objectin boolean ı true olur.

//-----------------regular expressions (RegEx)----------------------
// genellikle search ve replace metotları ile beraber kullanılırlar.
//  syntax:  /pattern/modifiers; 
// pattern: aranacak data. 
/w3schools/i

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n); //W3Schools un hangi indexde olduğunu söyledi(case sensitive olarak).

let n2 = text.search(/w3schools/i); // i : insensitive
console.log(n2); // küçük-büyük harf ayırt etmeksizin ayırdı

// regexin içine çift tırnak koyulmaz.

let text2 = text.replace(/visit/i,"ziyaret et"); //insensitive şekilde visit i buldu ve 
//2. parametre ile değiştirdi.
console.log(text2);


//modifiers:
// i : insensitive
// g: global ; yani yazılan değeri ilk bulduktan sonra durmaz, hepsini bulur.

let text3 = "hakan ın hakan adında bir arkadaşı var ";
let tex4 = text3.match(/hakan/g);
console.log(tex4); //[ 'hakan', 'hakan' ]

// test()

const pattern = /emre/i;
console.log(pattern.test("Emre belezoğlu fenerbahçelidir")); //true
// çünkü stringin içinde yazdığımız pattern yani emre bulunuyor.

// --------------------ERRORS---------------------

// try= tests a block of code for errors.
// catch = handles the error.
// throw = creates custom errors. (throw exception)
// finally = execute code, after try and catch, regardless

//user dan input aldığımızda bu yapıyı kullanmalıyız,çünkü user ın nasıl bir input gireceğini bilmiyoruz.

//Try de test edeceğimiz kodu yazarız.eğer hata varsa 
const prompt=require("prompt-sync")({sigint:true}); 
try{
  // let age = promp("how old are you?");
  let age = prompt("how old are you?");
  
  if(age == "") throw "you didn't enter in anything!";
  if(isNaN(age)) throw `${age} is not a number.`;
  if(age < 18) throw "you need to be 18+";

  console.log("you are " + age + " years old and you are now signed up"); 
  //eğer throw larsa age e o değeri atamaz ve console da age yazdığımızda göremeyiz.
  
}
catch(error){ // buradaki error objectdir. ve 2 propertie ye sahiptir. name ve message.
  
  console.log(error);
}

//------------------------------------------------------------------------
// let ve const tanımlandığı kod bloğu dışarısından erişilemez ama var erişilebilir
// function içinde tanımlanan değişkenler yine dışarıdan erişilemez.
// global değişkenler her yerden erişilebilir

// function variable ları function çalışıp tamamlandıktan sonra silinir

function func(){
  let x = "abcd"
}
console.log(x); //ReferenceError: x is not defined

//------------------Hoisting--------------------------------------

// hatalardan kaçınmak için variable ları her kod bloğunun başında tanımla. global ise en üstte.

/* function myFunc(){

} 
şeklinde tanımlanan fonksiyonlar otomatik olarak en üste taşınır
bu yüzden tanımlamanın üstünde çağırsak da hata vermeden çalışır.

ama arrow funtion lar
const myFunc = (a,b) => a+b ;
bunlar otomatik olarak yukarı taşınmaz 
ve eğer bunun üstünde çağırırsak otomatik olarak yukarı taşınmayacağı için reference error verir

*/

/*
console.log(e);  let ve const un aksine hata vermek yerine undefined döndürür.
var e = 5;
*/

/*
console.log(e);  hata : ReferenceError: Cannot access 'e' before initialization
let e = 5; 
*/

// javascript default mode: sloppy mode . katı mod : strict mod
// "use strict" ile kullanılır. kod un en başına veya fonksiyonların en başına yazılır.
// strict mode da undeclared variable kullanamazsın. var, let veya const ile tanımlamalısın. 

//------------------this keyword------------------------
/*
this keyword u object i refere eder
object içindeki method da this , methodun bulunduğu objecti temsil eder

function içinde global i temsil eder
(strict modda ise undefined döner)

bir event içinde this , eventi alan elemanı temsil eder
örneğin <button onclick="this.style.color='red'"> click </button>

this tek başına kullanıldığında global i temsil eder.
*/

//-------------------Call,Apply,Bind-----------------------------------

var welcome = function(){
  console.log("Welcome " + this.name );
}

console.log(welcome());

var yigit = {
  name : "Yiğit"
}

var ada = {
  name : "Ada"
}

console.log(welcome.call(yigit)); //Welcome Yiğit
console.log(welcome.call(ada));

console.log(welcome.apply(yigit)); //Welcome Yiğit
// fonksiyon eğer parametre almıyorsa call ve apply aynıdır.

console.log(welcome.bind(yigit)); //[Function: bound welcome]
// bu sefer yigit objecti için yeni fonksiyon oluşturdu. 
// parametre olarak yazdığımız object için yeni fonksiyon oluşturdu 
// ve fonksiyonu döndürdü

 var welcomeYigit = welcome.bind(yigit);

 console.log(welcomeYigit()); //Welcome Yiğit 

 //----------Call & Apply farkı -----------------

 var greeting = function(a,b){
    console.log("Hello "+ this.name + " are you interested in " + a + " and " + b);
 }

 var greetingToYigit = greeting.call(yigit,"football","basketball");

 // call ile apply in tek farkı : fonksiyonda parametre olması durumunda 
 // apply ile parametreleri array olarak yazmamız gerek.
 // call da direkt yazarız.
 var greetingToAda = greeting.apply(ada,["football","basketball"]);

//-------------Arrow Function---------------------

let fonk = () => 5+2;
let fonk2 = (a,b) => {
  return (a+b)
} 
// eğer tek satırda yazabiliyorsak return demeye gerek kalmaz.
// tek satırda yazılmış hali:
let fonk3 = (a,b) => a+b;

// eğer tek parametre varsa parantez koymaya gerek kalmaz.

let fonk4 = a => 2*a;
console.log(fonk() , fonk2(2,3) , fonk3(2,3) , fonk4(5));

// this keyword kullanımı regular function ve arrow function arasında farklıdır.
// class ın içindeki metotları arrow function ile tanımla. this keywordu daha doğru çalışır.
// arrow function da kullanılan this keywordu fonksiyonun içinde bulunduğu object i temsil eder

class Employee {
    constructor(name) {
        this.name = name;
    }
    getEmployeeName() {
        setTimeout(function () {
            console.log(this.name);
            // burada this, employee objectini refere etmiyor.
         }, 1000)
      }
    getEmployeeNameArrow() {
        setTimeout(() => {
            console.log(this.name);
            // burada this, employee objectini refere ediyor.
        }, 2000)
      }
    }  
let firstEmployee = new Employee('John');
firstEmployee.getEmployeeName(); // undefined
firstEmployee.getEmployeeNameArrow(); // John

//----------------------------Classes---------------------------

// class'ın içinde object oluşturmak için constructor methodunu kullan

class Person{
  constructor(name , birthYear){
    this.name = name;
    this.birthYear = birthYear;
  }
    age(){
      let date = new Date().getFullYear();
      return date-this.birthYear;
    }
}

const mehmet = new Person("Mehmet",2002);
let mehmetAge = mehmet.age();
console.log(mehmetAge);

//----------------Modules-----------------

// javascript module leri import ile çağrılır.

/* html e module bağlarken <script src="./index.js" type= "module"></script>  
 type ına module yazmamız gereklidir. 

 exports ikiye ayrılır :
 1) named exports
 2) default exports

 named exportsları export edeceğimiz şeyin satır başında yazarak da kullanabiliriz
 ör : export const name = "Hakan"; şeklinde
 veya 
 en aşağıda export {name,age} bu şekilde curly brackets ile de export edebiliriz. 


 default export u bir dosyada sadece bir kez kullanabiliriz
 ör: 
 const age = 21;
 const name = "Hakan";
 export default age;
*/


/*
import etme:

named export ları curly brackets kullanarak import ederiz
ör: 
import {name,age} from "./person.js";

default export ları import ederken curly bracket kullanılmaz
import name from "./person.js";

*** js dosyalarının başına ./ koymamız gerekli.

*/


//------------------------JSON-----------------------
/*
JSON verileri depolamak için kullanılır.
sunucudan web sayfasına veri gönderiminde kullanılır.
json dilden bağımsızdır.
json herhangi bir dille yazılabilir
syntax ı javascript objectleri ile aynıdır. bu yüzden javascript json'u
native javascript objectine dönüştürebilir

json syntax kuralları

*veriler name/value çiftleridir.tıpkı javascript object de olduğu gibi
*veriler virgül ile ayrılır.

!!! json name leri tırnak işaretleri ile tutulmalıdır. ama javascript object nameleri gerek duymaz.

json örneği:

"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]

json u javascriptte kullanmak istersek javascript bunu string olarak görür.
jsonu native js objectine dönüştürmek için JSON.parse(jsonName) kullanılır


let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

artık obj yi web sayfamızda kullanabiliriz.

*/

//--------------break points---------------------

/*
her breakpoint de kod yürütmesi durdurulur.
*/

// constant lar büyük harfle tanımlanır.
// ör: const PI = 3.14;

// dosya isimlerinde her zaman lower case kullan. web server larının çoğu case sensitive dir.


//javascript best practises

/* 
- global variables kullanma
- new keyword ünü kullanma
- == kullanma
- eval() kullanma

----------------------------

* tüm tanımlamaları kod bloğunun(fonksiyon ve script) en üstte yap.
* object ve arrayleri const ile tanımla.

* function da kullanılmayan parametreler undefined olur,
bu yüzden function u tanımlarken parametrelere default değer verilmeli.
ör: function myFunction(a=5, b=6) {
      return a*b;
    }
*/


// json da name kesinlikle string olmalı ama value string olmayabilir.

console.log('Hakan' - 'Yarman'); //NaN

// for döngüsünün çalışma hızını artırmak için . tanımlamaları döngünün dışında yap

for(let i = 0; i<arr.length; i++) {
  // bu şekilde kullanma, arr.length i dışarıda tanımla
  // burada döngü her döndüğünde arr in lengthine baştan erişmeye süre harcar.
}
// doğru kullanım:
let len = arr.length;
for(let i = 0; i<len; i++) {

}

// script dosyasını head kısmına koymak sayfanın açılmasını geciktirebilir.
// sayfa yüklendikten sonra javascript dosyasının çalıştırılmasını istersek
// defer="true" kullanılır 
// defer : ertelemek
// <script src = "myscript.js" defer="true">  