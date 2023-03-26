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
 var greetingToAda = greeting.apply(ada,["football","basketball"]);
