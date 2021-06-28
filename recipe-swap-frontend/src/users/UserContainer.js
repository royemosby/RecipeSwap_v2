import React, {Component} from 'react'
import UserFavorites from './UserFavorites'
import UserNav from './UserNav'
import UserProfile from './UserProfile'
import RecipesContainer from '../recipes/RecipesContainer'
import EditModal from './EditModal'
import {connect} from 'react-redux'

class UserContainer extends Component{
  render(){
    
    const targetUser = () => {
      if (this.props.currentUser.username === this.props.match.params.username){
        return this.props.currentUser
      } else {
        const found = this.props.users.find( user => {
          return user.username === this.props.match.params.username
        })
        if (found instanceof Object){
          return found
        } else {
          return {username: "User not found"}
        }
      }
    }

    const renderProfileSegments = () => {
      if(Object.keys(targetUser()).includes("token") && targetUser().token.length > 0){
        return (
          <>
            <UserNav user={targetUser()}/>
            <UserProfile user={targetUser()}/>
            <RecipesContainer recipes={targetUser().recipes}/>
            <UserFavorites />
            <EditModal/>
          </>
        )
      } else {
        return (
          <>
            <UserProfile user={targetUser()}/>
            <RecipesContainer recipes={targetUser().recipes}/>
          </>
        )
      }
    }
    
    return(
      <div className="skeleton">
        <h1>{targetUser().username}</h1>
        {renderProfileSegments()}
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    users: state.users,
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps)(UserContainer)