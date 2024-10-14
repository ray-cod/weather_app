import React from 'react'
import { useContext } from 'react';
import WeatherContext from '../../context/Weather.context';
import WeatherIcon from '../WeatherIcon';

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
      <div className='temperature'>
        <div className='weather-icon'>
          <WeatherIcon iconNumber={icon_num} summary={summary} />
        </div>
        <div className='value'>
          <div className='real'>
            {Math.round(temperature)} {units.temperature}
          </div>
          <div className='feels_like'>
            feels like {Math.round(feels_like)} {units.temperature}
          </div>
        </div>
        <div className='summary'>{summary}</div>
      </div>
    </div>
  )
}

export default CurrentWeather
