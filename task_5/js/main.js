// ip-api: http://ip-api.com/json
// openweather: a34a6cba2483a2867968ae2f62ed684e

const localApi = 'http://ip-api.com/json';
const weatherApi = 'a34a6cba2483a2867968ae2f62ed684e';

const place = document.querySelector('.place');
const temperature = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weatherIcon');
const weatherCondition = document.querySelector('.weatherCondition');
const date = document.querySelector('.date');

showWeather();

async function showWeather() {
    try {
        const ipResponse = await fetch(localApi);
        const ipData = await ipResponse.json();
        let city = ipData.city;

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`
        );
        const data = await response.json();

        place.innerHTML = city;
        temperature.innerHTML = `${changeTemp()}&deg`;
        weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">`;
        weatherCondition.innerHTML = data.weather[0].description;

        function getDate() {
            const months = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ];
            let now = new Date();
            date.textContent = `${now.getDate()} ${months[now.getMonth()]}`;
        }
        getDate();

        function changeTemp() {
            let getTemp = data.main.temp;
            let tempC = Math.floor(getTemp) - 273;
            return tempC;
        }
    } catch (e) {
        console.log(e.message);
    }
}
