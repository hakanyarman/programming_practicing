function generateNum() {
//   let randomNumbers = [];
//   for (let i = 0; i < 14; i++) {
//     randomNumbers[i] = Math.floor(Math.random() * 100) + 1;
//   }


fetch('/getData', {
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
  // body: JSON.stringify({ "id": 78912 })
})
 .then(response => response.json())
 .then(response => console.log(JSON.stringify(response)))


 




  document.getElementById("data1").innerHTML = jsNums[0];
  console.log(jsNums);
  
  // data 1's number is constant. because it is generated from python side
  // if and only if the page refreshed then data 1's number changes. 
  // but other datas changes when button is clicked. 
//   document.getElementById("data2").innerHTML = randomNumbers[1];
//   document.getElementById("data3").innerHTML = randomNumbers[2];
//   document.getElementById("data4").innerHTML = randomNumbers[3];
//   document.getElementById("data5").innerHTML = randomNumbers[4];
//   document.getElementById("data6").innerHTML = randomNumbers[5];
//   document.getElementById("data7").innerHTML = randomNumbers[6];
//   document.getElementById("data8").innerHTML = randomNumbers[7];
//   document.getElementById("data9").innerHTML = randomNumbers[8];
//   document.getElementById("data10").innerHTML = randomNumbers[9];
//   document.getElementById("data11").innerHTML = randomNumbers[10];
//   document.getElementById("data12").innerHTML = randomNumbers[11];
//   document.getElementById("data13").innerHTML = randomNumbers[12];
//   document.getElementById("data14").innerHTML = randomNumbers[13];
}
