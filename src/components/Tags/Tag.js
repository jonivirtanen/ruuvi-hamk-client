import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import FontAwesome from 'react-fontawesome'
import { Line } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import ruuviService from '../../services/ruuvi'
import LunchElement from '../Lunch/LunchElement'
import './tag.css'

class Tag extends Component {
  constructor() {
    super()
    this.state = {
      times: [],
      temps: [],
    }
  }

  parseData(data = null) {
    let times = []
    let temps = []
    console.log(data)
    if (data != null) {
      data.forEach(tag => {
        if (tag.temperature != null && tag.time != null) {
          console.log(tag)
          times.push(moment(tag.time).format('H:mm'))
          temps.push(tag.temperature.toFixed(1))
        }
      })
      times.reverse()
      temps.reverse()
      this.setState({
        times,
        temps,
      })
    }
  }

  componentDidMount() {
    ruuviService.getSingle(this.props.tag.ruuviId).then(data => {
      this.parseData(data)
    })
    setTimeout(() => {
      this.componentDidMount()
    }, 60000)
  }

  render() {
    const options = {
      scales: {
        yAxes: [
          {
            gridLines: {
              color: 'rgba(0,0,0,.2)',
            },
            ticks: {
              fontColor: '#000',
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
              color: 'rgba(0,0,0,.2)',
            },
            ticks: {
              fontColor: '#000',
            },
          },
        ],
      },
    }

    const data = {
      labels: this.state.times,
      datasets: [
        {
          label: 'Lämpötila',
          fill: false,
          lineTension: 0.3,
          backgroundColor: 'rgba(255, 0, 0,1)',
          borderColor: 'rgba(255, 0, 0,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0,0,0,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(0,0,0,1)',
          pointHoverBorderColor: 'rgba(0,0,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.temps,
        },
      ],
    }

    const { tag } = this.props
    return (
      <div className="tagPage">
        <div className="tagValues">
          <div className="ruuviId">{tag.ruuviId}</div>
          <div className="ruuviName">{tag.name}</div>
          <div className="temperature">
            <FontAwesome className="fas fa-thermometer-half" />
            {' ' + tag.temperature.toFixed(1)}
          </div>
          <div className="humidity">
            <FontAwesome className="fas fa-tint" />
            {' ' + tag.humidity} %
          </div>
          <div className="pressure">
            <FontAwesome className="fas fa-long-arrow-alt-down" />
            {' ' + tag.pressure / 100 + ' kPa'}
          </div>
        </div>
        <Line data={data} height={100} options={options} />
        <div className="nav">
          <LunchElement />
          <Link className="weather" to="/weather">
            Weather
          </Link>
        </div>
      </div>
    )
  }
}

Tag.propTypes = {
  tag: PropTypes.object,
}

export default Tag
