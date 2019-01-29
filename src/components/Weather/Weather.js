import React, { Component } from 'react'
import ruuviService from '../../services/ruuvi'
import Day from './Day'
import PropTypes from 'prop-types'
import Nav from '../Nav/Nav'

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
        <div className="weatherjsjs">
          {this.state.forecast ? (
            this.state.forecast.data.map(entry => (
              <Day key={entry.time} forecast={entry} />
            ))
          ) : (
            <div>No weather data available</div>
          )}
        </div>
        <Nav />
      </div>
    )
  }
}

Weather.propTypes = {
  weather: PropTypes.array,
}

export default Weather
