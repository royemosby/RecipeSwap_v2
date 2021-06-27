import React, {Component} from 'react'
import UserCard from './UserCard'
import {connect} from 'react-redux'

class UsersContainer extends Component{

  renderUserCards(users){
    return (
      users.map(user => {
        return <UserCard user={user}/>
      })
    )
  }
  render(){
    return(
      <div className="skeleton">
        <h1>UsersContainer</h1>
        {this.renderUserCards(this.props.users)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    users: state.users
  })
}

export default connect(mapStateToProps)(UsersContainer)