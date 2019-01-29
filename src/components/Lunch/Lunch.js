import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import ruuviService from '../../services/ruuvi'
import Course from './Course'
import moment from 'moment'
import Nav from '../Nav/Nav'
import FontAwesome from 'react-fontawesome'
import './course.css'
class Lunch extends Component {
  constructor() {
    super()
    this.state = {
      date: moment(new Date()),
      lunch: [],
    }
    this.nextDay = this.nextDay.bind(this)
    this.prevDay = this.prevDay.bind(this)
  }

  componentDidMount() {
    this.getLunch()

    setTimeout(() => {
      this.componentDidMount()
    }, 43200000)
  }

  getLunch(direction) {
    const { date } = this.state

    ruuviService
      .getLunch(date.format('Y'), date.format('MM'), date.format('DD'))
      .then(lunch => {
        if (lunch.courses.length != 0) this.setState({ lunch: lunch.courses })
        else if (direction == 'next') this.nextDay()
        else if (direction == 'prev') this.prevDay()
      })
  }

  nextDay() {
    this.setState({
      date: this.state.date.add(1, 'days'),
    })
    this.getLunch('next')
  }
  prevDay() {
    this.setState({
      date: this.state.date.add(-1, 'days'),
    })
    this.getLunch('prev')
  }

  render() {
    const { lunch } = this.state
    return (
      <div className="lunchPage">
        <div className="weekDay">{this.state.date.format('dddd')}</div>
        <div className="date">{this.state.date.format('DD.MM.YYYY')}</div>
        <div className="courses">
          {lunch.length != 0 ? (
            lunch.map(l => <Course meal={l} />)
          ) : (
            <Loader active />
          )}
        </div>
        <button className="prevDay">
          <FontAwesome
            onClick={this.prevDay}
            name="prevDay"
            className="fas fa-arrow-left"
            size="4x"
          />
        </button>
        <button className="nextDay">
          <FontAwesome
            onClick={this.nextDay}
            name="nextDay"
            className="fas fa-arrow-right"
            size="4x"
          />
        </button>
        <Nav />
      </div>
    )
  }
}

export default Lunch
