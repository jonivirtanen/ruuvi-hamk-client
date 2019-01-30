import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import FontAwesome from 'react-fontawesome'

import './Weather.css'
import WeatherSymbol from './WeatherSymbol'

const Day = ({ forecast }) => {
  return (
    <div className="weatherContainer">
      <div className="weatherInfo">
        <h2 className="weather_day_title">
          {moment.unix(forecast.time).format('DD.MM.YYYY')}
        </h2>
        <div className="weather_day_outer">
          <div className="weather_day_wrapper">
            <span className="weather_day_key">Temperature:</span>
          </div>
          <div className="weather_day_value">
            <span className="weather_day_valueHigh">
              H: {forecast.temperatureHigh}
            </span>
            <span className="weather_day_valueLow">
              L: {forecast.temperatureLow}
            </span>
          </div>
        </div>
        <div className="weather_day_outer">
          <div className="weather_day_wrapper">
            <span className="weather_day_key">Humidity: </span>
          </div>
          <div className="weather_day_value">
            <span className="weather_day_value_humidity">
              {forecast.humidity * 100} %
            </span>
          </div>
        </div>
        <div className="sun">
          <FontAwesome name="sunRise" className="far fa-sun" size="3x" />
          <FontAwesome name="sunSet" className="fas fa-sun" size="3x" />
        </div>
      </div>
      <div className="weatherIcon">
        <WeatherSymbol status={forecast.icon} />
      </div>
    </div>
  )
}

Day.propTypes = {
  forecast: PropTypes.object,
}

export default Day
