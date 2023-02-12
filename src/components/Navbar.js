import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="navbar">
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="hrefer">Hrefer</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar