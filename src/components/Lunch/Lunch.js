import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import ruuviService from '../../services/ruuvi'
import Course from './Course'
import Nav from '../Nav/Nav'
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
          {lunch.length != 0 ? (
            lunch.map(l => <Course meal={l} />)
          ) : (
            <Loader active />
          )}
        </div>
        <Nav />
      </div>
    )
  }
}

export default Lunch
