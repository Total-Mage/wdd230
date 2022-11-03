const todayDate = new Date();

// Get year, month, and day part from the date
var year = todayDate.toLocaleString("default", { year: "numeric" });
var month = todayDate.toLocaleString("default", { month: "2-digit" });
var day = todayDate.toLocaleString("default", { day: "2-digit" });

// Generate yyyy-mm-dd date string
var formattedDate = year + "-" + month + "-" +day ;
const formDate = document.getElementById("date");
formDate.setAttribute("value", formattedDate); //Breaks on thankyou.html

// Hold Submittee 
function holdName(){
    const formName = document.querySelector('[name="fname"]').value;
    localStorage.setItem("submitName", formName);
}

const subBtn = document.querySelector(".submitBtn");

subBtn.addEventListener("click", holdName); //Breaks on thankyou.html
console.log("test");
let currentName = window.localStorage.getItem("submitName");
document.getElementById("submitee-name").textContent = currentName;