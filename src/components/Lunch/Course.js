import React from 'react'
import PropTypes from 'prop-types'
import './course.css'

const Course = props => {
  const { meal } = props
  return (
    <div className="course">
      <div className="category">{meal.category}</div>
      <div className="title">{meal.title_fi}</div>
      <div className="price">{meal.price}</div>
    </div>
  )
}

Course.propTypes = {
  tag: PropTypes.object,
}
export default Course
