const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

const units = "&units=Imperial";
const appid = "&appid=a34ada9eca3c4aa161bc70a337446dc2";

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Eclectic' +units +appid;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    const temp = weatherData.main.temp.toFixed(0);
    document.getElementById('temp').textContent = temp +"°F";
    // currentTemp.innerHTML = `<strong>${temp}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    captionDesc.textContent = desc;
    const wspeed = weatherData.wind.speed;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    const windChill = weatherData.main.feels_like.toFixed(0)
    let chillText = '';
    const nA = "N/A";

    if(temp <= 50 && wspeed > 3){
        chillText = windChill +"°F";
    }
    else{
        chillText = nA;
    }
    document.getElementById('wspeed').textContent = wspeed +" mph";
    document.getElementById('chill').textContent = chillText;
    
  }


