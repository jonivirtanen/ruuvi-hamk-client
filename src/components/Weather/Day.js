import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import FontAwesome from 'react-fontawesome'
import './Weather.css'
import WeatherSymbol from './WeatherSymbol'

const Day = ({ forecast }) => {
  return (
    <div className="weatherContainer">
      <div className="header">
        <div className="title">
          <span className="text weather_day_title">
            {moment
              .unix(forecast.time)
              .format('ddd')
              .toUpperCase() + ' '}
            {moment.unix(forecast.time).format('DD.MM.YYYY')}
          </span>
          <span className="text weather_day_summary">{forecast.summary}</span>
        </div>
        <div className="weatherIcon">
          <WeatherSymbol status={forecast.icon} />
        </div>
      </div>
      <div className="weatherInfo">
        <div className="weather_day_outer">
          <div className="weather_day_wrapper">
            <span className="text weather_day_key">Temperature:</span>
          </div>
          <div className="weather_day_value">
            <span className="text weather_day_valueHigh">
              H: {forecast.temperatureHigh.toFixed(1)}&#8451;
            </span>
            <span className="text weather_day_valueLow">
              L: {forecast.temperatureLow.toFixed(1)}&#8451;
            </span>
          </div>
        </div>
        <div className="weather_day_outer">
          <div className="weather_day_wrapper">
            <span className="text weather_day_key">Humidity: </span>
          </div>
          <div className="weather_day_value">
            <span className="text weather_day_value_humidity">
              {forecast.humidity * 100} %
            </span>
          </div>
        </div>
        <div className="weather_day_outer" id="sun">
          <div className="sun_container">
            <FontAwesome name="sunrise" className="far fa-sun" size="2x" />
            <div className="weather_day_value">
              <span className="text weather_day_sun_text">Sunrise at</span>
              <span>{moment.unix(forecast.sunriseTime).format('HH:mm')}</span>
            </div>
          </div>
          <div className="sun_container">
            <FontAwesome name="sunset" className="fas fa-sun" size="2x" />
            <div className="weather_day_value">
              <span className="text weather_day_sun_text">Sunset at</span>
              <span>{moment.unix(forecast.sunsetTime).format('HH:mm')}</span>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

Day.propTypes = {
  forecast: PropTypes.object,
}

export default Day
