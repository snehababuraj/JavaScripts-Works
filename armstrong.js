var num=1634
var org=num
var sum=0
var num_count=String(num).length
while(num!=0){
    let digit=num%10
    let cube=digit**num_count
    sum=sum+cube
    num=Math.floor(num/10)
}
console.log(sum);

console.log(org==sum? "armstrong":"not armstrong");


//for loop functions