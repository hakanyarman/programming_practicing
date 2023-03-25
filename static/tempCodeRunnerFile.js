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
  // throw lamazsa age e o değeri atar.
  
}
catch(error){ // buradaki error objectdir. ve 2 propertie ye sahiptir. name ve message.
  // örneğin prompt yerine promp yazdıysak error un name ini ve message ını döndürür.
  console.log(error); // buradaki error try bloğundaki throw ladığımız şeydir.
  
}
finally{
  console.log("thanks for visiting.");
}
// finally bloğu her halükarda çalışır error throw etse de etmese de .
