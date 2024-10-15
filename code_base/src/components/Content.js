import React, { useContext } from 'react'
import CurrentWeather from './content_comnponents/CurrentWeather'
import TodayForecast from './content_comnponents/TodayForecast'
import WeekForecast from './content_comnponents/WeekForecast'
import AdditionalInfo from './content_comnponents/AdditionalInfo'
import WeatherContext from '../context/Weather.context'
import Loader from './Loader'
import '../styles/content.css'
import current from '../api/current-weather.json'
import daily from '../api/daily-forecast.json'
import hourly from '../api/hourly-forecast.json'

const Content = () => {

  const { loading, currentWeather, hourlyForecast, dailyForecast } = useContext(WeatherContext)
  return (
    <main className='Main'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={current.current}/>
          <WeekForecast title='Daily Forecast' data={daily.daily.data}/>
          <TodayForecast title="Today's Forecast" data={hourly.hourly.data}/>
          <AdditionalInfo data={current.current}/>
        </>
      )}
    </main>
  )
}

export default Content
