let daysOfWeek = ["sunday" , "monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday"];
let akanMaleNames = ["Kwasi" , "Kwadwo" , "Kwabena" , "Kwaku" , "Yaw" , "Kofi" , "Kwame"];
let akanFemaleNames = ["Akosua" , "Adwoa" , "Abenaa" , "Akua" , "Yaa" , "Afua" , "Ama"];

// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//  CC - is the century digits. For example 1989 has CC = 19
//  YY - is the Year digits (1989 has YY = 89)
//  MM -  is the Month
//  DD - is the Day of the month 
//  mod - is the modulus function ( % )

let d, CC, YY, MM, DD;

function validate(){
    var genderr = document.getElementsByName("gender");
    if(document.forms.date.value > 31 || document.forms.date.value <= 0){
        alert(please provide a valid date i.e from 0-31)
    }
}
