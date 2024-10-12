import React from 'react'
import HourlyWidget from './HourlyWidget'
import HorizontallyScrollable from '../HorizontallyScrollable';

const TodayForecast = ({ title, data }) => {
  return (
    <div className='Today-forecast'>
      ----------------------------------------------------------------------
      <div className='forecast-container'>
        <h3>{title}</h3>
        <HorizontallyScrollable className='widget-container'>
          {data.map((singleData) => (
            <div key={singleData.date || singleData.day}>
                <HourlyWidget data={singleData} />
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
      ----------------------------------------------------------------------
    </div>
  )
}

export default TodayForecast
