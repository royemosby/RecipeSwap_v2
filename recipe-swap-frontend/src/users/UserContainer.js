import React, {Component} from 'react'
import UserNav from './UserNav'
import UserProfile from './UserProfile'
import RecipesContainer from '../recipes/RecipesContainer'
import EditModal from './EditModal'

class UserContainer extends Component{
  render(){
    return(
      <div className="skeleton">
        <h1>UserContainer</h1>
        <UserNav/>
        <UserProfile/>
        <RecipesContainer/>
        <EditModal/>
      </div>
    )
  }
}

export default UserContainer