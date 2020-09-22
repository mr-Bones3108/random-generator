console.log('This is the weather app');

const weather1 = document.getElementById('weather');
const temperature = document.getElementById('temp');
const location1 = document.getElementById('loco');
const date = document.getElementById('date');
const dayName= document.getElementById('dayName');

const weather ={};

weather.temperature = {
    unit: "celsius"
}



// app data
const weather2 = {};
weather.temperature ={
    unit: "celsius"
}

const KELVIN = 273;

// set users position
function setPosition(position){
    let latitude = position.latitude;
    let longitude = position.longitude;
    getWeather(latitude, longitude);
    
};


// check if the uses supports geo location
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition, showError);
    }
    else {
      notificationElement.style.display = 'block';
      notificationElement.innerHTML = "<p> Your browser does not support geolocation<p>";
    }};