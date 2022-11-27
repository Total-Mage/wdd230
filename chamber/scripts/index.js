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
  
  if(day == 1 || day == 2){
    banner.setAttribute('id','reminder');
  }
}
checkMeetReminder(date.getDay());

// Business spotlights

function getBusiness(){
  fetch(requestURL = "./data/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    let data = businesses;
    dispBusinesses(data);
    console.log('Fetching complete')
  });
}

function dispBusinesses(busList){
  let topMembers = [];
  console.log(busList);
    for(let i = 0; i < busList.length; i++){
      if(busList[i].membership == "Gold" || busList[i].membership == "Silver"){
        topMembers.push(busList[i]);
        console.log(`kept ${busList[i].name}`);
      }
      else{}
      console.log(topMembers);
    }
  let busToPick = 3;
  let pickedBus;
  let spots = [];
  while(busToPick > 0){
    pickedBus = Math.floor(Math.random() * topMembers.length);
    console.log(`Placed ${topMembers[pickedBus].name} on list... ${busToPick-1} left`)
    spots.push(topMembers[pickedBus]);
    topMembers.splice(topMembers[pickedBus], 1);
    busToPick-=1;
  }
  arrayToSpot(spots);  

}

function arrayToSpot(list){
  const spot1 = document.querySelector(".spot1");
  const spot2 = document.querySelector(".spot2");
  const spot3 = document.querySelector(".spot3");

  spot1.innerHTML= `<h3>${list[0].name}</h3><img src="${list[0].image}" alt="logo for ${list[0].name}">`
  spot2.innerHTML= `<h3>${list[1].name}</h3><img src="${list[1].image}" alt="logo for ${list[1].name}">`
  spot3.innerHTML= `<h3>${list[2].name}</h3><img src="${list[2].image}" alt="logo for ${list[2].name}">`
}

getBusiness();