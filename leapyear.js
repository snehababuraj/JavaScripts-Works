// year=2023
// if((year%100==0 && year%400==0)||(year%100!=0 && year%4==0)){
//     console.log("year is leap year");
// }
// else{
//     console.log("not leap year");
// }


//print all leap year from 1800-2024
for(let year=1800;year<=2024;year++){

    if((year%100==0 && year%400==0)||(year%100!=0 && year%4==0)){
        console.log(year);
    }

}