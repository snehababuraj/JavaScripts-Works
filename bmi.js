var weightInKg=40;

var heightinCm=165;

var heightInM=heightinCm/100;

var bmi=(weightInKg/(heightInM**2))

bmi=Math.round(bmi)

console.log(bmi);

if(bmi<19){
    console.log("underweight");
}
else if(bmi<=25){
    console.log("normal");
}
else if(bmi<=30){
    console.log("overweight");
}
else{
    console.log("obese");
}