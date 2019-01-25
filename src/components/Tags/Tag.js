import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './tag.css'

class Tag extends Component {
  render() {
    const { tag } = this.props
    return (
      <div>
        <div className="ruuviId">{tag.ruuviId}</div>
        <div className="ruuviName">{tag.name}</div>
        <div className="temperature">{tag.temperature.toFixed(1)}</div>
        <div className="humidity"> {tag.humidity}</div>
        <div className="pressure"> {tag.pressure}</div>
        <Link to="/">
          <button style={{ width: '10em', height: '10em' }}>Takasin</button>
        </Link>
      </div>
    )
  }
}

Tag.propTypes = {
  tag: PropTypes.object,
}

export default Tag
