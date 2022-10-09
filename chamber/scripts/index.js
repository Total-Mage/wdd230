// Header Current Date
const date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
today = days[date.getDay()] +", " +date.getDate() +" " +monthNames[date.getMonth()] +" " +date.getFullYear(); 
let currentDate = document.querySelector(".date-time");
currentDate.textContent = today;

let lastMod = new Date(document.lastModified);
let currentCopy = new Date().getFullYear();

let modifiedDate = document.querySelector(".last-modified");
modifiedDate.innerHTML = lastMod.toLocaleString();

let copyDate = document.querySelector(".copy-year");
copyDate.innerHTML = currentCopy;