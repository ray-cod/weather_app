import React from 'react'
import { useContext } from 'react';
import WeatherContext from '../../context/Weather.context';
import WeatherIcon from '../WeatherIcon';
import '../../styles/currentWeather.css';

const CurrentWeather = ({ data }) => {
    const {
      cloud_cover,
      feels_like,
      humidity,
      icon_num,
      precipitation,
      summary,
      temperature,
      uv_index,
      visibility,
      wind,
    } = data;
    const { units } = useContext(WeatherContext);


  return (
    <div className='Current-weather'>
      <div className='Info'>
        <h1 className='location'>Johannesburg</h1>
        <p className='Date'>September 25,2024</p>
        <WeatherIcon iconNumber={icon_num} summary={summary} />
        <h2 className='Summary'>{summary}</h2>
      </div>
      <div className='Temperature'>
        <div className='real'>
          {Math.round(temperature)} &deg;{units.temperature}
        </div>
        <div className='feels_like'>
          {Math.round(feels_like)} &deg;{units.temperature}/ 
          {Math.round((Math.round(feels_like)*9/5)+32)} &deg;F
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
