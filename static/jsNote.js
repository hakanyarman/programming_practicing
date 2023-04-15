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

let numberr = 2 / 0;
console.log(numberr); //Infinity
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
let o = 5;
let u = 7;

[o, u] = [u, o];
console.log(
  `the value of o after swapping : ${o} and the value of u after swapping : ${u}`
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

let text_ = "";
for (let x of cars2) {
  text_ += x + " ";
}
console.log(text_);

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


//--------------Objects----------------------

/*
primitives : methodu ve propertie'si olmayan değerler.
primitive değerler dışında her şey objectdir.
*/

//objects are mutable. primitive values are not mutable(immutable)

const human = {name:"Hakan",surname:"Yarman",age:21};
const man = human;
man.name = "Ahmet";
// burada human objectinin kopyası olan man i değiştirdiğimizde human da değişir.
// çünkü man = human dediğimizde yeni object oluşturulmadı, var olan object e bir tane daha referans eklendi.
console.log(human); // { name: 'Ahmet', surname: 'Yarman', age: 21 }

delete human.age ;
// object propertie sini silmek için delete kullanılır. ama kullanılmamalı.
console.log(human);

//propertie ler arasında döngü dönmek için for in kullanılır.
txt = "";
for(prop in human){
  txt += human[prop] + " ";
}
console.log(txt);

// normal for'u (indexli for'u ) for in şeklinde kullanmak:

for(let i in human){
  console.log(human[i]);
} // human.i kullanılamaz, human[i] kullanılmalı. burada i propertie'dir.

// propertie'lerin değeri olan value lar bir propery attribute'u dur
// diğer attribute'lar : enumerable, configurable, and writable. bu attribute'lar,
// propertie nin nasıl erişilceiğini belirler. okunabilir mi yazılabilir mi vs.
// değiştirilebilen tek propertie attribute'u value'dur.
// tüm property attribute'lar okunabilirdir.


// object'e sonradan method ekleme:

human.sayWelcome = function(guest){
  return "Welcome " + guest.name + " " + guest.surname + " my name is " + this.name ;
}

const human2 = {
  name: "Ali",
  surname: "Yılmaz",
  age:30,
  sayAge : function(){
    return `my age is ${this.age}`;
  }
}

console.log(human.sayWelcome);
console.log(human2.sayAge);
console.log(human.sayWelcome(human2));

console.log(human); // methodu sonradan eklediğimiz için bu şekilde anonymous gösterdi:  [Function (anonymous)]
console.log(human2); // method zaten object oluşturulurken vardı, sonradan eklenmedi : [Function: sayAge]

// objecti yeni bir array'e dönüştürmek:

const humanArray = Object.values(human);
console.log(humanArray); //[ 'Ahmet', 'Yarman', [Function (anonymous)] ]

// stringify
// objecti string'e dönüştürme:

let stringHuman = JSON.stringify(human);
console.log(stringHuman); //{"name":"Ahmet","surname":"Yarman"} burada json notation da verir. key leri de
// string (tırnak işaretli) şekilde verir.
console.log(stringHuman[0]); // {} lar dahil string'e dönüştürür. o yüzden stringHuman[0] = { olur.

console.log(JSON.stringify(human2)); //{"name":"Ali","surname":"Yılmaz","age":30} normalde human2 de
// method da bulunuyordu ama stringify object methodlarını stringe çeviremez. o yüzden yazdırmadı.
// bunu düzeltmek için methodu öncesinde stringe çevirebiliriz.

human2.sayAge = human2.sayAge.toString();
console.log(JSON.stringify(human2)); //{"name":"Ali","surname":"Yılmaz","age":30,"sayAge":"function(){\r\n    return `my age is ${this.age}`;\r\n  }"}

//arrayleri stringe dönüştürmek için de stringify kullanılır.
const movies = ["John Wick", "Kurtlar Vadisi", "Leyla ile Mecnun"];
console.log(JSON.stringify(movies)[0]); // [


// getters and setters

const woman = {
  name: "Dilek",
  surname: "Yilmaz",
  nationality: "",
  get fullName() {
    return this.name + " " + this.surname;
  },
  set nation(nation) {
    this.nationality = nation.toUpperCase();
  }
};  

console.log(woman.fullName); //Dilek Yilmaz
// bunu method olarak da yapabilirdik fullname : function(){ } gibi ama get ile yaptığımızda fullname property
//oluyor ve erişmek için parantez koymuyoruz bu yüzden.

woman.nation = "Türk";
console.log(woman.nationality);

//------------------Constructors----------------
// object constructor function tanımlarken ilk harfi büyük yap. ayırt edilmesi için.


class Person{
  constructor(first,last,birthYear,height,weight) {
    this.firstName = first;
    this.lastName = last;
    this.birthYear = birthYear;
    this.height = height;
    this.weight = weight;
    this.age = new Date().getFullYear() - this.birthYear;
    this.fullName = this.firstName + " " + this.lastName
  };
  calcBMI(){
    return this.weight / (this.height)**2 ;
  }
}
const hakan = new Person("Hakan","Yarman",2002,1.98,85);
console.log(hakan.fullName, hakan.calcBMI(), hakan.age);
hakan.nationality = " Türk";
console.log(hakan);
//object'e method ekleme
hakan.run = function(){
  console.log("I am running");
}

console.log(hakan.run());

//constructor'a method eklenemez, objectlere sonradan eklenebilir.

//------------------- object prototypes ---------------------- 
/*
tüm javascript objectleri propertie lerini ve methodlarını bir prototype'den alır.
*/

function Man(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

//prototype inheritance zincirinin en üstünde Object.prototype yer alır
// ve diğer objectler ör: Man objecti , Date objecti , Array objecti prototype larını burdan alır.

// burada Man functionuna Man.height = diye propertie ekleyemeyiz. ancak Man functionundan oluşan objectlere
// ayrı ayrı propertie ekliyebiliriz. 
// eğer Man constructor funct'dan oluşan tüm objectlere aynı propertie'yi veya method'u eklemek istersek 
// veya constructor'un kendisine eklemek istersek 
// prototype kullanırız.

console.log(Man.prototype); //{}

Man.prototype.homeland = "Hatay";

console.log(Man.prototype); //{ homeland: 'Hatay' }

const Abdullah = new Man("Abdullah","Aktaş",21,"brown");

console.log(`Abdullah is from ${Abdullah.homeland}`);

// prototype ile constructor function'a method da ekleyebiliriz.

Man.prototype.sayOtherMansName = function(otherMan){
  return otherMan.firstName + " " + otherMan.lastName;
}

const Eren = new Man("Eren","Hedbe",21,"green");

console.log(Abdullah.sayOtherMansName(Eren));

//--------------iterables-----------------------

//iterables for strings
const str = "Beypazarı Maden Suyu";
for(let x of str)
  console.log(x,str.indexOf(x)); 
/*B 0
  e 1
  y 2
  p 3
  a 4
  z 5
  a 4
  r 7
  ı 8
    9
  M 10
  a 4
  d 12
  e 1
  n 14
    9
  S 16
  u 17
  y 2
  u 17
*/

//iterables for array:
const players = ["Arda Güler", "Ferdi Kadıoğlu", "Enner Valencia", "Mert Hakan Yandaş"];
let text = "";
for(const x of players)
    text += x + " is fenerbahçe's football player ";
console.log(text);  

//homamade iterable ları atladım.sets maps object reference atladım.

//----------------------FUNCTIONS------------------------

//function declaration : 
console.log(sum(2,8)); // hoisting den dolayı function tanımlanmadan önce de function'u çağırabiliriz.
// function tanımı otomatik olarak ilk satıra taşınır

function sum(x,y){
  return x+y;
}

//function expression : 
console.log(divide(5,8)); //Cannot access 'divide' before initialization

//function expression'da function tanımdan önce kullanılamaz.function expressions hoisted değildir

const divide = function(x,y){
  return x/y;
}
// divide functionu anonymous dur. fonksiyonun ismi yoktur, variable ismi ile çağrılır.

// Arrow function:
// console.log(greet()); //arrow functionlar hoisted değildir. tanımlandığı yerin üstünde çağırılamaz.
const greet = () => "merhaba";

// arrow function la object tanımlayamayız. yani constructor function değillerdir çünkü this keywordu kullanılamaz.

// functionlar da aslında object'dir.property ve methodlaara sahiptirler.

function myFunction3(x,y,z,t,q,r){
  return `${arguments.length>5 ? "number of arguments greater than 5 ":"number of arguments not greater than 5"}..`;
}

console.log(myFunction3());

console.log(myFunction3.toString()); // function'lar stringe de dönüştürülebilir.

// parameters arguments farkı:
// parameters function tanımlandığında gerçek değer olmayan değişkenlerdir.
// arguments functionu çağırdığımızda girdiğimiz gerçek değerlerdir.


//----------------- Class Practise ----------------
class Person{
  constructor(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  };
  propose(beloved){
     console.log(`will you marry me ${beloved.name}`);
  };
  response(proposer){
    let answer = "";
    if(this.gender!==proposer.gender){
      if(Math.abs(this.age - proposer.age)<=3){
        answer = "Yess you meet all the conditions";
      }else{
        answer = "Sorry ,i don't want too much age difference between me and the person I'm going to marry";
      }
    }else{
      answer = "No i want to marry opposite gender";
    }
     console.log(answer);
  };
}

const bale = new Person("Bale",24,"Male");
const anna = new Person("Anna",23,"Female");
const angela = new Person("Angela",30,"Female");
const john = new Person("John",26,"Male")

bale.propose(anna);
anna.response(bale);


angela.propose(john);
john.response(angela);

Person.prototype.nationality = "English";

console.log(angela.nationality);

// functions notes 

// decleration keyword (const,let,var) kullanılmadan oluşturulan variable lar daima global olur.

function access(){
  degisken = 5;
}
access() // önce funtion u çağırıp çalıştırmalıyız ki değişken oluşturulsun
console.log(degisken);

function noaccess(){
  var degisken2= 5;
  let degisken3 = 5;
}
noaccess();
console.log(degisken2,degisken3); //ikisine de erişilemez. sadece function içinden erişilebilirler.

// local variable lar function çalıştırılıp bittikten sonra silinirler

// nested functions: 
// functionda üstteki scope daki verilere erişebiliriz. mesela global scope daki verilere erişebiliriz.
// nested function ise içinde bulunduğu functionun verilerine erişebilir.

// function add() {
//   let counter = 0;
//   function plus() {
//    counter += 1;
//   }
//   plus();   
//   return counter;
// }

// console.log(add());

const add = (function () { // self invoking function.
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();
console.log(add()); //4


// class üzerinden yeni bir object oluşturulduğunda constructor function otomatik olarak çalışır.
// constructor function tanımlamasak bile default olarak boş bir constructor tanımlanır.

// class static methods:

// classlardan tanımlanan objectlerden static methodları çağıramayız. Class üzerinden çağırabiliriz.
// ör:


class Driver {
  constructor(name,carModel) {
    this.name = name;
    this.car = carModel;
  };
  static drive(driverObj) {
    return "I am driving " + driverObj.car;
  }
}
const yusuf= new Driver("Yusuf","Audi");
//console.log(yusuf.drive()); //object den static methoda erişilemez. 
console.log(Driver.drive(yusuf));