import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


const Header = (props) => {
  return (
    <div>
      <h1 className="prez">Header</h1>
      <nav>
        <NavLink to="/"
                  className="linky"
                  onClick={props.closeLoginModal}
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
        <NavLink to="/"
                  className="linky"
                  onClick={props.activateLoginModal}
                  exact>
        Log in or Create Account </NavLink>
      </nav>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return({
    activateLoginModal: () => dispatch({type: "OPEN_LOGIN_MODAL"}),
    closeLoginModal: () => dispatch({type: "CLOSE_LOGIN_MODAL"})
  })
}

export default connect(null, mapDispatchToProps)(Header)
