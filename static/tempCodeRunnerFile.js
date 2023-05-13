const jsonData = '{"brand":"ford","model":"mustang","year":2015}';

const jsData = JSON.parse(jsonData);
console.log(jsData);
const carBrand = jsData.brand;
console.log(carBrand);