import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createUser, authenticateUser} from '../adapters/users'

class AuthModal extends Component{

  handleSubmit = (evt) => {

  }

  handleUpdate = (evt)=>{
    if(evt.target.className === "username"){
      this.props.updateUsername(evt.target.value)
    } else if(evt.target.className === "password"){
      this.props.updatePassword(evt.target.value)
    }
  }

  handleSubmit = (evt) =>{
    if(evt.target.id === "login"){
      this.props.authenticateUser()
    } else {
      this.props.createUser()
    }
    evt.preventDefault();
  }

  closeLoginModal = evt =>{
    evt.preventDefault();
    this.props.closeLoginModal();
  }
  

  render(){
    return(
      <div className={["modal", "prez"].join(" ")}>
        <h2>AuthModal</h2>
        <form>
          <div>
            <label>Username
              <input type="text"
                      onChange={this.handleUpdate}
                      className="username"
                      value={this.props.username}/>
            </label>
          </div>
          <div>
            <label>Password
              <input type="password"
                      onChange={this.handleUpdate}
                      className="password"
                      value={this.props.password} />
            </label>
          </div>
          <div>
            <input onClick={this.handleSubmit}id="login" type="submit" value="Log in"/>
            <button onClick={this.handleSubmit}id="signup">or Sign Up</button>
          </div>
          <div>
            <button onClick={this.closeLoginModal}>Cancel</button>
          </div>
          <div>
            {this.props.errorMessage}
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    closeLoginModal: () => dispatch({type: "CLOSE_LOGIN_MODAL"}),
    authenticateUser: () => dispatch(authenticateUser()),
    createUser: () => dispatch(createUser()),
    updatePassword: (pw) => dispatch({type: "UPDATE_PW", pw}),
    updateUsername: (un) => dispatch({type: "UPDATE_UN", un})
  })
}

const mapStateToProps = (state) => {
  return({
    username: state.currentUser.username,
    password: state.currentUser.password,
    errorMessage: state.currentUser.loginError,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal)