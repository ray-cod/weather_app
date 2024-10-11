import currentWeather from '../api/current-weather.json';

const getCurrentWeather = () => {
    return currentWeather.current
}

export { getCurrentWeather }