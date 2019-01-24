import React, { Component } from 'react'
import './tag.css'

class Tag extends Component {
  render() {
    const { tag } = this.props
    return (
      <div className="tag">
        <div className="ruuviId">{tag.ruuviId}</div>
        <div className="ruuviName">{tag.name}</div>
        <div className="temperature">{tag.temperature.toFixed(1)}</div>
      </div>
    )
  }
}

export default Tag
