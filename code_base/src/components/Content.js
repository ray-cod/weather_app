import React, { useContext } from 'react'
import CurrentWeather from './content_comnponents/CurrentWeather'
import TodayForecast from './content_comnponents/TodayForecast'
import WeekForecast from './content_comnponents/WeekForecast'
import AdditionalInfo from './content_comnponents/AdditionalInfo'
import WeatherContext from '../context/Weather.context'
import Loader from './Loader'
import '../styles/content.css'

const Content = () => {

  const { loading, currentWeather, todayForecast, weekForecast } = useContext(WeatherContext)
  return (
    <main className='Main'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather}/>
          <WeekForecast data={weekForecast}/>
          <TodayForecast data={todayForecast}/>
          <AdditionalInfo data={currentWeather}/>
        </>
      )}
    </main>
  )
}

export default Content
