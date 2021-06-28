import React, {Component} from 'react'
import UserFavorites from './components/UserFavorites'
import UserNav from './components/UserNav'
import UserProfile from './components/UserProfile'
import IndexRecipes from '../recipes/IndexRecipes'
import EditModal from './components/EditModal'
import {connect} from 'react-redux'

class ShowUser extends Component{
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
            <IndexRecipes recipes={targetUser().recipes}/>
            <UserFavorites />
            <EditModal/>
          </>
        )
      } else {
        return (
          <>
            <UserProfile user={targetUser()}/>
            <IndexRecipes recipes={targetUser().recipes}/>
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

export default connect(mapStateToProps)(ShowUser)