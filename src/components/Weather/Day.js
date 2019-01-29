import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import FontAwesome from 'react-fontawesome'

import './Weather.css'

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
      </div>
      <div className="weatherIcon">
        <FontAwesome name="weathericon" className="fas fa-cloud" size="3x" />
      </div>
    </div>
  )
}

Day.propTypes = {
  forecast: PropTypes.object,
}

export default Day
