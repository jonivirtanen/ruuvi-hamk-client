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
      <div className="properties">{meal.properties}</div>
    </div>
  )
}

Course.propTypes = {
  meal: PropTypes.object,
}
export default Course
