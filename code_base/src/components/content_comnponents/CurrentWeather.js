import React from 'react'
import { getCurrentWeather } from '../../api'

const CurrentWeather = () => {
    const data = getCurrentWeather();

  return (
    <div className='Current-weather'>
      Current Weather
    </div>
  )
}

export default CurrentWeather
