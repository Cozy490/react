import React from 'react'
import { Outlet } from "react-router-dom";

function Courses() {
  return (
    <div>
      Courses
      <Outlet />
    </div>
  )
}

export default Courses
