const myArray = [9,8,7,6];
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