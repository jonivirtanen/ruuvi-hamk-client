import React, { Component } from 'react'
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
      <div className="courses">
        {lunch.map(l => (
          <Course meal={l} />
        ))}
      </div>
    )
  }
}

export default Lunch
