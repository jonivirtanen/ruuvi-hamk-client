import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ruuviService from '../../services/ruuvi'
import Course from './Course'
import './course.css'
class Lunch extends Component {
  constructor() {
    super()
    this.state = {
      lunch: [],
    }
  }

  componentDidMount() {
    ruuviService.getLunch().then(lunch => {
      this.setState({ lunch: lunch.courses })
    })
    setTimeout(() => {
      this.componentDidMount()
    }, 43200000)
  }

  render() {
    const { lunch } = this.state
    return (
      <div className="lunchPage">
        <div className="courses">
          {lunch.map(l => (
            <Course meal={l} />
          ))}
        </div>
        <div className="tagControls">
          <Link to="/">
            <span className="backButton">Takaisin</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default Lunch
