import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import ruuviService from '../../services/ruuvi'
import Course from './Course'
import moment from 'moment'
import Nav from '../Nav/Nav'
import './course.css'
class Lunch extends Component {
  constructor() {
    super()
    this.state = {
      date: moment(new Date()),
      lunch: [],
    }
  }

  componentDidMount() {
    const { date } = this.state

    ruuviService
      .getLunch(date.format('Y'), date.format('MM'), date.format('DD'))
      .then(lunch => {
        this.setState({ lunch: lunch.courses })
      })
    setTimeout(() => {
      this.componentDidMount()
    }, 43200000)
  }

  nextDay() {
    this.setState({
      date: this.state.date.add(1, 'days'),
    })
  }
  prevDay() {
    this.setState({
      date: this.state.date.add(-1, 'days'),
    })
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
