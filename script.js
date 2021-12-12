let daysOfWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//  CC - is the century digits. For example 1989 has CC = 19
//  YY - is the Year digits (1989 has YY = 89)
//  MM -  is the Month
//  DD - is the Day of the month
//  mod - is the modulus function ( % )

let d, CC, YY, MM, DD , dayOfWeek;

function validate() {
  var date = document.getElementsByName("date");
  if (document.forms.date.value > 31 || document.forms.date.value <= 0) {
    alert("Kindly provide a valid date i.e from 0 to 31 !!");
  }
  else if (document.forms.month.value > 12 || document.forms.month.value <= 0) {
    alert("Please provide a valid month i.e from 0 to 12 !!");
  }
  else if (document.forms.year.value > 2021 || document.forms.month.value <= 1900) {
    alert("Please provide the year you were born i.e from 1900 to 2021 !!");
  }
//   else if (gender[0].checked==false && gender[1].checked==false){
//     alert("Kindly select your gender !!");
//   }
  break
}

switch(gender){
    case "female":
        if(dayOfWeek==0){
            alert("Hey there ,your akan an name is " +akanFemaleNames[0] + ", you were born on " + daysOfWeek[0]);
        }
        else if(dayOfWeek==1){
            alert("Hey there ,your akan name is " +akanFemaleNames[1] + ", you were born on " + daysOfWeek[1]);
        }
        else if(dayOfWeek==2){
            alert("Hey there ,your akan name is " +akanFemaleNames[2] + ", you were born on " + daysOfWeek[2]);
        }
        else if(dayOfWeek==3){
            alert("Hey there ,your akan name is  " +akanFemaleNames[3] + ", you were born on " + daysOfWeek[3]);
        }
        else if(dayOfWeek==4){
            alert("Hey there ,your akan name is  " +akanFemaleNames[4] + ", you were born on " + daysOfWeek[4]);
        }
        else if(daysOfWeek==5){
            alert("Hey there ,your akan name is  " +akanFemaleNames[5] + ", you were born on " + daysOfWeek[5]);
        }
        else if(daysOfWeek==6){
            alert("Hey there ,your akan name is  " +akanFemaleNames[6] + ", you were born on " + daysOfWeek[6]);
        }
    break
    
    case "male":
        if(dayOfWeek==0){
            alert("Hey there ,your akan an name is " +akanMaleNames[0] + ", you were born on " + daysOfWeek[0]);
        }
        else if(dayOfWeek==1){
            alert("Hey there ,your akan name is " +akanMaleNames[1] + ", you were born on " + daysOfWeek[1]);
        }
        else if(dayOfWeek==2){
            alert("Hey there ,your akan name is " +akanMaleNames[2] + ", you were born on " + daysOfWeek[2]);
        }
        else if(dayOfWeek==3){
            alert("Hey there ,your akan name is  " +akanMaleNames[3] + ", you were born on " + daysOfWeek[3]);
        }
        else if(dayOfWeek==4){
            alert("Hey there ,your akan name is  " +akanFemaleNames[4] + ", you were born on " + daysOfWeek[4]);
        }
        else if(daysOfWeek==5){
            alert("Hey there ,your akan name is  " +akanFemaleNames[5] + ", you were born on " + daysOfWeek[5]);
        }
        else if(daysOfWeek==6){
            alert("Hey there ,your akan name is  " +akanFemaleNames[6] + ", you were born on " + daysOfWeek[6]);
        }
    break
}


