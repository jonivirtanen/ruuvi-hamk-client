import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './lunch.css'

class LunchElement extends Component {
  render() {
    return (
      <Link className="lunch" to={`/lunch`}>
        <span>Lunch</span>
      </Link>
    )
  }
}

export default LunchElement
