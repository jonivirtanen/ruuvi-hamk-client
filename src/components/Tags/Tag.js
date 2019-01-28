import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import FontAwesome from 'react-fontawesome'
import { Line } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import ruuviService from '../../services/ruuvi'
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
        console.log(tag)
        times.push(moment(tag.time).format('H:mm'))
        temps.push(tag.temperature.toFixed(1))
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
    const data = {
      labels: this.state.times,
      datasets: [
        {
          label: 'Lämpötila',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgb(75,192,192)',
          borderColor: 'rgb(75,192,192)',
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

    const options = {}

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
            <FontAwesome className="fas fa-star-and-crescent" />
            {' ' + tag.pressure}
          </div>
        </div>
        <Line data={data} height={100} />
        <div className="tagControls">
          <Link to="/">
            <span className="backButton">Takaisin</span>
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
