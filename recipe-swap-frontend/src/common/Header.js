import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


const logInlogOut = (props) => {
  const {token, username, activateLoginModal, logOut} = props
  console.dir(token)
  if(props.token.length === 0){
    return(
      <NavLink to="/"
                  className="linky"
                  onClick={activateLoginModal}
                  exact>
        Log in or Create Account </NavLink>
    )
  } else {
    return(
      <>
      <NavLink to="/recipes/new"
                  className="linky"
                  exact
                  activeStyle={{background: 'lightblue'}}>
        Create New Recipe </NavLink>
      {/*TODO: make profile into users/${username}*/}
      <NavLink to={`/users/${username}`}
                  className="linky"
                  exact
                  activeStyle={{background: 'lightblue'}}>
        My Profile </NavLink>
      <NavLink to="/"
                  className="linky"
                  onClick={logOut}
                  exact>
        Log Out </NavLink>
        </>
    )
  }
}

const Header = (props) => {
  return (
    <div className="prez">
      <h1>Header</h1>
      <nav>
        <NavLink to="/"
                  className="linky"
                  onClick={props.closeLoginModal}
                  exact
                  activeStyle={{background: 'lightblue'}}>
        Home </NavLink>
        <NavLink to="/users"
                  className="linky"
                  exact
                  activeStyle={{background: 'lightblue'}}>
        Users </NavLink>
        {logInlogOut(props)}
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return({
    token: state.currentUser.token,
    username: state.currentUser.username
  })
}

const mapDispatchToProps = (dispatch) =>{
  return({
    activateLoginModal: () => dispatch({type: "OPEN_LOGIN_MODAL"}),
    closeLoginModal: () => dispatch({type: "CLOSE_LOGIN_MODAL"}),
    logOut: () => dispatch({type: "LOG_OUT"})
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
