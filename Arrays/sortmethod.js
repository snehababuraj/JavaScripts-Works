var arr=[1000,17,16,10,11,12,13,14,15,20,22,30,33]
// arr.sort()
// console.log(arr);

arr.sort((o1,o2)=>o1-o2)  //fisrt o1 and then o2  asc order
console.log(arr);
arr.sort((o1,o2)=>o2-o1)  //desc order
console.log(arr);