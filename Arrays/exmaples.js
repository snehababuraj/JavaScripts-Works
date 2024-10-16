// var arr=["basi","sruthy","rahul","aju","adi"]

// var upperCaseString=arr.map(w=>w.toUpperCase())
// console.log(upperCaseString);

// var lengths=arr.map(w=>w.length)
// console.log(lengths);


var arr=["program","project","profile","profession","django","python"]
// var startWithPro=arr.filter(w=>w.startsWith("pro"))
// console.log(startWithPro);

var longest=arr.reduce((w1,w2)=>w1.length>w2.length?w1:w2)
// console.log(longest);

var shortest=arr.reduce((w1,w2)=>w1.length<w2.length?w1:w2)
// console.log(shortest);

arr.sort((o1,o2)=>o2.length-o1.length)
console.log(arr);