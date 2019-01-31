import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import FontAwesome from 'react-fontawesome'
import TagLine from './TagLine'
import ruuviService from '../../services/ruuvi'
import './tag.css'

class Tag extends Component {
  constructor() {
    super()
    this.state = {
      times: [],
      temps: [],
      meanTemp: 0,
    }
  }

  parseData(data = null) {
    let times = []
    let temps = []
    if (data != null) {
      data.forEach(tag => {
        if (tag.temperature != null && tag.time != null) {
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

    ruuviService.getMeanTemp(this.props.tag.ruuviId).then(data => {
      this.setState({
        meanTemp: data[0].temperature,
      })
    })

    setTimeout(() => {
      this.componentDidMount()
    }, 60000)
  }

  render() {
    const { tag } = this.props
    return (
      <div className="tagPage">
        <div className="tagValues">
          <div className="ruuviId">{tag.ruuviId}</div>
          <div className="ruuviName">{tag.name}</div>
          <div className="temperature">
            <FontAwesome className="fas fa-thermometer-three-quarters" />
            {' ' + tag.temperature.toFixed(1) + '°C'}
          </div>
          <div className="humidity">
            <FontAwesome className="fas fa-tint" />
            {' ' + tag.humidity} %
          </div>
          <div className="pressure">
            <FontAwesome className="fas fa-long-arrow-alt-down" />
            {' ' + tag.pressure / 100 + ' hPa'}
          </div>
          <div className="mean">
            <FontAwesome className="fas fa-thermometer-half" />
            {' ' + this.state.meanTemp.toFixed(1) + '°C'}
          </div>
        </div>
        <TagLine
          temps={this.state.temps}
          height={100}
          times={this.state.times}
        />
      </div>
    )
  }
}

Tag.propTypes = {
  tag: PropTypes.object,
}

export default Tag
