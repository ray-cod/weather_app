import React from 'react'
import DailyWidget from './DailyWidget'
import HorizontallyScrollable from '../HorizontallyScrollable'
import '../../styles/forecast.css'

const WeekForecast = ({ title, data }) => {
  return (
    <div className='Week-forecast'>
      <div className='forecast-container'>
        <h3>{title}</h3>
        <HorizontallyScrollable className='widget-container'>
          {data.map((singleData) => (
            <div key={singleData.date || singleData.day}>
                <DailyWidget data={singleData} />
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  )
}

export default WeekForecast
