import React, {Component} from 'react'
import {connect} from 'react-redux'

class AuthModal extends Component{

  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
      login: true //TODO: toggle this to toggle back and forth
    }             // between login and sign up. Use this to also
  }               // determine the post route the adapter will use
                  // login ? "auth#create" : "users#create"

  handleUpdate = (evt)=>{
    this.setState({
      [evt.target.className] : evt.target.value
    })
  }

  handleSubmit = (evt) =>{
    evt.preventDefault();
    //TODO: Redux and/or adapter wire-up
    this.setState({
      username: "",
      password: "",
    })
  }

  closeLoginModal = evt =>{
    evt.preventDefault();
    this.props.closeLoginModal();
  }
  

  render(){
    return(
      <div className={["modal", "prez"].join(" ")}>
        <h2>AuthModal</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username
              <input type="text"
                      onChange={this.handleUpdate}
                      className="username"
                      value={this.state.username}/>
            </label>
          </div>
          <div>
            <label>Password
              <input type="password"
                      onChange={this.handleUpdate}
                      className="password"
                      value={this.state.password} />
            </label>
          </div>
          <div>
            <input type="submit" value="Log on"/>
            <button>or Sign Up</button>
          </div>
          <div>
            <button onClick={this.closeLoginModal}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    closeLoginModal: () => dispatch({type: "CLOSE_LOGIN_MODAL"})
  })
}

export default connect(null, mapDispatchToProps)(AuthModal)