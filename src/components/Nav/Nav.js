import React from 'react'
import { Link } from 'react-router-dom'
import LunchElement from '../Lunch/LunchElement'
import './nav.css'

const Nav = () => {
  return (
    <div className="nav">
      <Link className="tagsLink" to="/">
        Tags
      </Link>
      <LunchElement />
      <Link className="weather" to="/weather">
        Weather
      </Link>
    </div>
  )
}

export default Nav
