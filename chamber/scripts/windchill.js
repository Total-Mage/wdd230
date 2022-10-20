const temp = 40;
const wspeed = 2.5;
const nA = "N/A";

const windChill = 35.73 + 0.6215*temp - 35.7*wspeed^0.16 +0.4275*temp*wspeed^0.16;
let chillText = '';

if(temp <= 50 && wspeed > 3){
    chillText = windChill +"°F";
}
else{
    chillText = nA;
}
document.getElementById('wspeed').textContent = wspeed +" mph";
document.getElementById('chill').textContent = chillText;
document.getElementById('temp').textContent = temp +"°F";
