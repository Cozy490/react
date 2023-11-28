import React from 'react'
import { Outlet,Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
    </div>
  )
}

export default Layout
