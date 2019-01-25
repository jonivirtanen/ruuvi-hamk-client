import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        times.push(tag.time)
        temps.push(tag.temperature.toFixed(1))
      })

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
  }

  render() {
    const data = {
      labels: this.state.times,
      datasets: [
        {
          label: 'Lämpötila',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(0,0,0,1)',
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
          <div className="temperature">{tag.temperature.toFixed(1)}</div>
          <div className="humidity"> {tag.humidity}</div>
          <div className="pressure"> {tag.pressure}</div>
        </div>
        <Line data={data} />
        <div className="tagControls">
          <Link to="/">
            <button>Takasin</button>
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
