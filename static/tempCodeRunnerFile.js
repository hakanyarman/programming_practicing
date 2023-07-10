function sum(a,b){
  console.log(a+b);
};

function runTwice(func){
  func();
}

runTwice(sum(2,8))