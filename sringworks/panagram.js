//it should contain a-z in the text

var t1="the quick brown fox jumps over the lazy dog"

var alphabets="abcdefghijklmnopqrstuvwxyz"

var isPangram=true

for(let ch of alphabets){
    if(!t1.includes(ch)){
        isPangram=false
        break
    }
}
console.log(isPangram);
