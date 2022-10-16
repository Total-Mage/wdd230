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

// Hamburger Menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.hammy')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


// Meeting Reminder Banner
function checkMeetReminder(day){
  const banner = document.querySelector(".notification-banner");
  
  if(day == 2 || day == 3){
    banner.setAttribute('id','reminder');
  }
}
checkMeetReminder(date.getDay());