
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