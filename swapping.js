var num1=10;
var num2=20;
//swapping
//calculate monthly emi (loanAmount, tenure,interestRate)
//if..else
//if..elif..else
//while,for

var num1=10;

var num2=20;

// swap two numbers



/*var temp;

temp=num1;

num1=num2;

num2=temp;*/

num1=num1+num2

num2=num1-num2

num1=num1-num2

console.log(${num1},${num2});



//calculate monthly emi(loan amount,tenure,interest rate)

var loan_amount=200000
var interest_rate=9
var tenure=20



var r=interest_rate/(12*100)
var n=tenure*12

emi=loan_amount*r*((1+r)*n)/((1+r)*n-1)
console.log(${emi})