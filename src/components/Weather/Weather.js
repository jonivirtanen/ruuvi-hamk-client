import React, { Component } from 'react'
import ruuviService from '../../services/ruuvi'
import moment from 'moment'
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types'

class Weather extends Component {
  constructor() {
    super()
    this.state = {
      forecast: null,
    }
  }

  componentDidMount() {
    ruuviService.getWeather().then(forecast => {
      this.setState({
        forecast,
      })
    })
  }

  render() {
    // const data = canvas => {
    //   const ctx = canvas.getContext('2d')
    //   const gradient = ctx.createLinearGradient(0, 0, 100, 0)
    //   return {
    //     backgroundColor: gradient,
    //   }
    // }
    // const names = this.props.weather.map(t => t.name)
    let names = []
    let values = []

    if (this.state.forecast !== null) {
      this.state.forecast.data.forEach(object => {
        names.push(moment.unix(object.time).format('YYYY-MM-DD HH:mm'))
        values.push(object.temperatureMax)
      })
    }

    if (this.props.weather) {
      this.props.weather.forEach(t => {
        names.push(t.name)
        values.push(t.temperature)
      })
    }
    const data = {
      labels: names,
      datasets: [
        {
          label: 'Lämpötila',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: values,
        },
      ],
    }

    return (
      <div
        className="chart-container"
        // style={{ position: 'relative', height: '15em', width: '30em' }}
      >
        <Line data={data} />
      </div>
    )
  }
}

Weather.propTypes = {
  weather: PropTypes.array,
}

export default Weather
