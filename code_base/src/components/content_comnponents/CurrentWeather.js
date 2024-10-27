import React from 'react'
import { useContext } from 'react';
import WeatherContext from '../../context/Weather.context';
import WeatherIcon from '../WeatherIcon';
import '../../styles/currentWeather.css';

const CurrentWeather = ({ data }) => {
    const {
      feels_like,
      icon_num,
      summary,
      temperature,
    } = data;
    const { units, place } = useContext(WeatherContext);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date().toLocaleDateString('en-US', options);


  return (
    <div className='Current-weather'>
      <div className='Info'>
        <h1 className='location'>{place.name}</h1>
        <p className='Date'>{formattedDate}</p>
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
