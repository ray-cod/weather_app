import React from 'react'
import CurrentWeather from './content_comnponents/CurrentWeather'
import TodayForecast from './content_comnponents/TodayForecast'
import WeekForecast from './content_comnponents/WeekForecast'
import AdditionalInfo from './content_comnponents/AdditionalInfo'
import '../styles/content.css'

const Content = () => {
  return (
    <main className='Main'>
      <CurrentWeather />
      <WeekForecast />
      <TodayForecast />
      <AdditionalInfo />
    </main>
  )
}

export default Content
