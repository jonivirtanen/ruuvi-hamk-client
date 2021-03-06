import React, { Component } from 'react'
import ruuviService from '../../services/ruuvi'
import Day from './Day'
import PropTypes from 'prop-types'

class Weather extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    ruuviService.getWeather().then(forecast => {
      this.setState({
        forecast,
      })
    })
  }

  render() {
    return (
      <div>
        <div className="forecasts">
          {this.state.forecast ? (
            this.state.forecast.data
              .slice(0, 3)
              .map(entry => <Day key={entry.time} forecast={entry} />)
          ) : (
            <div>No weather data available</div>
          )}
        </div>
      </div>
    )
  }
}

Weather.propTypes = {
  weather: PropTypes.array,
}

export default Weather
