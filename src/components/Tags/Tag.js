import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './tag.css'

class Tag extends Component {
  render() {
    console.log(this.props.hexColor)
    const { tag, hexColor } = this.props
    return (
      <div className="tag" style={{ background: hexColor }}>
        <div className="ruuviId">{tag.ruuviId}</div>
        <div className="ruuviName">{tag.name}</div>
        <div className="temperature">{tag.temperature.toFixed(1)}</div>
      </div>
    )
  }
}

Tag.propTypes = {
  tag: PropTypes.object,
}

export default Tag
