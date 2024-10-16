var text="pneumonoultramicroscopicsilicovolcanoconiosis"
var vowels="aeiou"
v_count=0
c_count=0
for(var ch of text){
    if(vowels.includes(ch)){
        v_count++


    }
    else{
        c_count++
    }
}
console.log("vowel count:",v_count);
console.log("consonant count:",c_count);
console.log("total characters",text.length);


//anagram