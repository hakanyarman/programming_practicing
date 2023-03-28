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