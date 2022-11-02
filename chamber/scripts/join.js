const todayDate = new Date();

// Get year, month, and day part from the date
var year = todayDate.toLocaleString("default", { year: "numeric" });
var month = todayDate.toLocaleString("default", { month: "2-digit" });
var day = todayDate.toLocaleString("default", { day: "2-digit" });

// Generate yyyy-mm-dd date string
var formattedDate = year + "-" + month + "-" +day ;
const formDate = document.getElementById("date");
formDate.setAttribute("value", formattedDate);