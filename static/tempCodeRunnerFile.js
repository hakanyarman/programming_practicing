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