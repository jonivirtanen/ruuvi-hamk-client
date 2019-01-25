import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './tag.css'

class TagElement extends Component {
  render() {
    const { tag, hexColor } = this.props
    return (
      <Link
        className="tag"
        style={{ background: hexColor }}
        to={`/tags/${tag.ruuviId}`}
      >
        {/* <div className="tag" style={{ background: hexColor }}> */}
        <div className="ruuviId">{tag.ruuviId}</div>
        <div className="ruuviName">{tag.name}</div>
        <div className="temperature">{tag.temperature.toFixed(1)}</div>
        {/* </div> */}
      </Link>
    )
  }
}

TagElement.propTypes = {
  tag: PropTypes.object,
  hexColor: PropTypes.string,
}

export default TagElement
