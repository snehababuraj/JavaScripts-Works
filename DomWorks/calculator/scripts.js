function displayNumber(event){
    let num=event.target.value
    document.querySelector("#result").value+=num
}

function clearValue(event){

    document.querySelector("#result").value=""
}

function evaluateExpression(){
    let currentExp=document.querySelector("#result").value;
    let result=eval(currentExp)
    document.querySelector("#result").value=result

}