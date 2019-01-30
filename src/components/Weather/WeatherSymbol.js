import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

const WeatherSymbol = ({ status }) => {
  // clear-day, clear-night, fog,
  switch (status) {
    case 'cloudy':
      return <FontAwesome name="cloudy" className="fas fa-cloud" />
    case 'partly-cloudy-day':
      return (
        <FontAwesome name="partly_cloudy_day" className="fas fa-cloud-sun" />
      )
    case 'partly-cloudy-night':
      return (
        <FontAwesome name="partly_cloudy_night" className="fas fa-cloud-moon" />
      )
    case 'snow':
      return <FontAwesome name="snow" className="fas fa-snowflake" />
    case 'sleet':
      return (
        <div>
          <FontAwesome name="snow" className="fas fa-snowflake" />
          <FontAwesome name="cloud_rain" className="fas fa-cloud-rain" />
        </div>
      )
    case 'rain':
      return <FontAwesome name="cloud_rain" className="fas fa-cloud-rain" />
    case 'wind':
      return <FontAwesome name="wind" className="fas fa-wind" />
    default:
      return <FontAwesome name="na" className="fas fa-exclamation-triangle" />
  }
}

WeatherSymbol.propTypes = {
  status: PropTypes.string,
}
export default WeatherSymbol
