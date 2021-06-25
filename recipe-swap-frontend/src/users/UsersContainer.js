import React, {Component} from 'react'
import UserCard from './UserCard'

class UsersContainer extends Component{
  render(){
    return(
      <div className="skeleton">
        <h1>UsersContainer</h1>
        <UserCard/>
      </div>
    )
  }
}

export default UsersContainer