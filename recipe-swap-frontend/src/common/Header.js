import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1 className="prez">Header</h1>
      <nav>
        <NavLink to="/"
                  className="linky"
                  exact
                  activeStyle={{background: 'lightblue'}}>
        Home </NavLink>
        <NavLink to="/recipe"
                  className="linky"
                  exact
                  activeStyle={{background: 'lightblue'}}>
        Recipe(hone w/params) </NavLink>
        <NavLink to="/user"
                  className="linky"
                  exact
                  activeStyle={{background: 'lightblue'}}>
        User(hone w/params) </NavLink>
        <NavLink to="/users"
                  className="linky"
                  exact
                  activeStyle={{background: 'lightblue'}}>
        Users </NavLink>
      </nav>
    </div>
  )
}

export default Header
