var arr=[10,11,12,13,14,15]

var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);


var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max)

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min)

var product=arr.reduce((num1,num2)=>num1*num2)
console.log(product);