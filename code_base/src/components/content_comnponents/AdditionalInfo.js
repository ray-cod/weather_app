import React, { useContext } from 'react'
import WeatherContext from '../../context/Weather.context';
import '../../styles/forecast.css'
import HorizontallyScrollable from '../HorizontallyScrollable';

const AdditionalInfo = ({ data }) => {
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

  const otherInfoWidgets = [
    {
      id: 0,
      icon: 'droplet',
      name: 'Precipitation',
      value: Math.round(precipitation.total),
      unit: units.precipitation,
    },
    {
      id: 1,
      icon: 'wind',
      name: 'Wind',
      value: Math.round(wind.speed),
      unit: units.wind_speed,
    },
    {
      id: 2,
      icon: 'moisture',
      name: 'Humidity',
      value: Math.round(humidity),
      unit: units.humidity,
    },
    {
      id: 3,
      icon: 'sunglasses',
      name: 'UV index',
      value: Math.round(uv_index),
      unit: units.uv_index,
    },
    {
      id: 4,
      icon: 'clouds-fill',
      name: 'Clouds cover',
      value: Math.round(cloud_cover),
      unit: units.cloud_cover,
    },
    {
      id: 5,
      icon: 'eye',
      name: 'Visibility',
      value: Math.round(visibility),
      unit: units.visibility,
    },
  ];

return (
    <div className='Additional-info'>
      <h3>Additional Info</h3>
      <div >
        <HorizontallyScrollable className='Details'>
      {otherInfoWidgets.map(({ id, name, icon, value, unit }) => (
          <div className='widget' key={id}>
          <div className='widget-container'>
            <div className='icon'>
                <i className={`bi bi-${icon}`}></i>
              </div>
            <div className='info'>
              <div className='value'>
                {value} {unit}
              </div>
              <div className='name'>{name}</div>
            </div>
          </div>
        </div>
      ))}
      </HorizontallyScrollable>
      </div>
      
    </div>
)
}

export default AdditionalInfo
