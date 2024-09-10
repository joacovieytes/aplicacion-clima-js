const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = `f72c171e3d9e1c64702f085c80d8ab16`
const diffKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', () => {

    const city = document.getElementById('cityInput').value;

    if(city){
        fetchWeather(city);
    }else{
        alert('Ingrese una ciudad valida');
    }
})

function fetchWeather(city) {
    
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data));

}


function showWeatherData(data) {
    
    const divResponseData = document.getElementById('responseData');
    divResponseData.innerHTML = '';

    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${countryName}`;

    const tempInfo = document.createElement('p');
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp - diffKelvin)}ºC`;

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `La humedad es del ${humidity}%`;

    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; // verificar como colocar una imagen

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `Descripcion metereologica: ${description}`;

    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempInfo);
    divResponseData.appendChild(humidityInfo);
    divResponseData.appendChild(iconInfo);
    divResponseData.appendChild(descriptionInfo);

}