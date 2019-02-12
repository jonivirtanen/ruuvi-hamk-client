import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div className="nav">
      <Link className="tagsLink" to="/">
        Tags
      </Link>
      <Link className="lunch" to="/lunch">
        Lunch
      </Link>
      <Link className="weather" to="/weather">
        Weather
      </Link>
    </div>
  )
}

export default Nav
