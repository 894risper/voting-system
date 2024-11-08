import React from 'react'
import { Outlet,Link } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/registration"> User Registration</Link>
                </li>
                <li>
                    <Link  to="profile"> Profile</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout