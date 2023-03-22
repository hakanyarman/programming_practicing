const myArr = [1,2,3,4,5,5,5,1,2];
const mySet = new Set(myArr);
const mySet2 = new Set([1,2,3]);
const uniqueArr = [...mySet];

console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }
console.log(myArr);  // [ 1, 2, 3, 4, 5, 5, 5, 1, 2]

console.log(uniqueArr); // [ 1, 2, 3, 4, 5 ];

// set'in içine primitive value veya object ve array de ekleyebiliriz. add komutu ile.
mySet.add(6); 
// mySet.add(7,8,9,10); // birden fazla elemanı aynı anda eklemeye izin vermez. 
console.log(mySet); // Set(6) { 1, 2, 3, 4, 5, 6 }

mySet.add({myName:"Hakan" , lastName:"Yarman"}); //object de eklenebilir.
const array = ["a","b","c"]
mySet.add(array); // array de eklenebilir.
console.log(mySet);

// delete set eleman.
mySet.delete(array);
mySet.delete(6)
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
console.log(mySet[1]);
