// var arr=[12,13,14,15,16,17]

// function square(num){
//     return num**2
// }
// var result=arr.map(square)
// console.log(result);

var arr=[10,11,12,13,14]
// var squares=arr.map(num=>num**2)
// console.log(squares);
// var cubes=arr.map(num=>num**3)
// console.log(cubes);
var add=arr.map(num=>num>12?num+1 :num<12?num-1:num)
console.log(add);