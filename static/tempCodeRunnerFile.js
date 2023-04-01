
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
}

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

console.log(human); 
console.log(human2);