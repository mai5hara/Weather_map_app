const API_KEY = 'ad32e5732727ae27e9f2c3a1ecd95b69';
const searchBtn = document.getElementById('search_btn');
const weatherImg = document.getElementById('weather_img');
let getCityName = document.getElementById('city_name');
let sunny = document.getElementById('sunny');
let rain = document.getElementById('rain');
let cloud = document.getElementById('cloud');
let snow = document.getElementById('snow');
let undefind = document.getElementById('undefind');
sunny.style.display = 'none';
rain.style.display = 'none';
cloud.style.display = 'none';
snow.style.display = 'none';
undefind.style.display = 'none';

window.onload = () => {
    let getCityName = document.getElementById('city_name');
    getCityName = 'Vancouver';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        const weather = data.weather[0]['main'];
        const tempCelsius = Math.round(data.main['temp']) + '℃';
        const tempFahrenheit = Math.round((data.main['temp']) * 1.8000 + 32.00) + '℉';
        document.getElementById('search_city_name').innerHTML = getCityName;
        document.getElementById('weather').innerHTML = weather;
        document.getElementById('temp_celsius').innerHTML = tempCelsius;
        document.getElementById('temp_fahrenheit').innerHTML = tempFahrenheit;

        weatherSwitch(weather);

        }
    )
};

getWeather = () => {
    let getCityName = document.getElementById('city_name').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        const weather = data.weather[0]['main'];
        const tempCelsius = Math.round(data.main['temp']) + '℃';
        const tempFahrenheit = Math.round((data.main['temp']) * 1.8000 + 32.00) + '℉';
        document.getElementById('search_city_name').innerHTML = getCityName;
        document.getElementById('weather').innerHTML = weather;
        document.getElementById('temp_celsius').innerHTML = tempCelsius;
        document.getElementById('temp_fahrenheit').innerHTML = tempFahrenheit;

        weatherSwitch(weather);

        }
    )
};

weatherSwitch = (weather) => {
    switch (weather) {
        case 'Clouds':
            cloud.style.display = 'block';
            sunny.style.display = 'none';
            rain.style.display = 'none';
            snow.style.display = 'none';
            undefind.style.display = 'none';
            break;
        case 'Rain':
            rain.style.display = 'block';
            sunny.style.display = 'none';
            cloud.style.display = 'none';
            snow.style.display = 'none';
            undefind.style.display = 'none';
            break;
        case 'Clear':
            sunny.style.display = 'block';
            rain.style.display = 'none';
            snow.style.display = 'none';
            cloud.style.display = 'none';
            undefind.style.display = 'none';
            break;
        case 'Snow':
            snow.style.display = 'block';
            sunny.style.display = 'nonw';
            rain.style.display = 'none';
            cloud.style.display = 'none';
            undefind.style.display = 'none';
            break;
        default:
            undefind.style.display = 'block';
    }
};

searchBtn.addEventListener('click', () => {
    getWeather();
});

document.onkeydown = () => {
    if (event.keyCode === 13) {
        getWeather();
    } 
};
