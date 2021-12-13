let daysOfWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
let gender = ["male" , "female"]

// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//  CC - is the century digits. For example 1989 has CC = 19
//  YY - is the Year digits (1989 has YY = 89)
//  MM -  is the Month
//  DD - is the Day of the month
//  mod - is the modulus function ( % )

let d, CC, YY, MM, DD , dayOfWeek;

function validate() {
  var date = document.getElementsByName("date");
  if (document.forms.date.value > 31 || document.forms.date.value <= 0 ) {
    alert("Kindly provide a valid date i.e from 0 to 31 !!");
    return false;
  }
  else if (document.forms.month.value > 12 || document.forms.month.value <= 0) {
    alert("Please provide a valid month i.e from 0 to 12 !!");
    return false;
  }
  else if (document.forms.year.value > 2021 ||document.forms.year.value  <= 1900) {
      console.log(document.forms.year.value)
    alert("Please provide the year you were born i.e from 1900 to 2021 !!");
    return false;
  }

//   else if (document.forms.male.checked==false && document.forms.female.checked==false){
//     alert("Kindly select your gender !!");
//     return false;
//   }
  else{
      return true;
  }
}
// var dayOfWeek = new date (year,month,date).getDay();
// console.log(dayOfWeek)

function calcDayOfWeek(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
   
    console.log(Math.floor(d));
    dayOfWeek = Math.floor(d);
  }
  

function getGender(){
    var gender = document.getElementsByName("gender");
    if(gender[0].checked == true){
        var gender = "male";
    }
    else if (gender[1].checked == true){
        var gender = "female";
    }
    // else{
    //     return false;
    // }

switch(gender){
    case "female":
        console.log("female")
        console.log(dayOfWeek)
        if(dayOfWeek==0){
            alert("Hey there , your akan an name is " + akanFemaleNames[0] );
        }
        else if(dayOfWeek==1){
            alert("Hey there , your akan name is " + akanFemaleNames[1] );
        }
        else if(dayOfWeek==2){
            alert("Hey there , your akan name is " + akanFemaleNames[2]  );
        }
        else if(dayOfWeek==3){
            alert("Hey there , your akan name is  " + akanFemaleNames[3]);
        }
        else if(dayOfWeek==4){
            console.log(daysOfWeek);
            alert("Hey there , your akan name is  " + akanFemaleNames[4] );
        }
        else if(dayOfWeek==5){
            alert("Hey there , your akan name is  " + akanFemaleNames[5] );
        }
        else if(dayOfWeek==6){
            alert("Hey there , your akan name is  " + akanFemaleNames[6] );
        }
    break
    
    case "male":
        console.log("male")
        if(dayOfWeek==0){
            alert("Hey there , your akan an name is " +akanMaleNames[0] );
        }
        else if(dayOfWeek==1){
            alert("Hey there , your akan name is " +akanMaleNames[1] );
        }
        else if(dayOfWeek==2){
            alert("Hey there , your akan name is " +akanMaleNames[2] );
        }
        else if(dayOfWeek==3){
            alert("Hey there , your akan name is  " +akanMaleNames[3] );
        }
        else if(dayOfWeek==4){
            alert("Hey there , your akan name is  " +akanFemaleNames[4]);
        }
        else if(dayOfWeek==5){
            alert("Hey there , your akan name is  " +akanMaleNames[5] );
        }
        else if(dayOfWeek==6){
            alert("Hey there , your akan name is  " +akanMaleNames[6]);
        }
    break

}

}

function akanName(){
    daysOfWeek = calcDayOfWeek();
    getGender();
}
const form = document.querySelector(".forms");

form.addEventListener("submit" , function(e){
    e.preventDefault();
    calcDayOfWeek();
    akanName();
    document.forms.date.value="";
    document.forms.month.value="";
    document.forms.year.value ="";
})

