function raceTimeNum( age,time){
    let raceNum;
   if(age >= 1000 && time == "early"){
       raceNum = 1000 + Math.floor(Math.random()*1000);
   }
   else{
    raceNum =  Math.floor(Math.random()*1000);
   }
   return raceNum;
}
function slotBooking(age,time){
let timeAvail;
if(age < 18){
    timeAvail = "12:30";
}
else if(age >= 18 && time == "early"){
           timeAvail = "9:30";
}
else{
    timeAvail = "11:00";
}
return timeAvail;
}

console.log("Race no. of participant is : ", raceTimeNum(18,"early"));
console.log("slot of regitered participant is : " ,slotBooking(18,"early"));