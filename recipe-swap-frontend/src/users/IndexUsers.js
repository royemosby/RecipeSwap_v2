import React, {Component} from 'react'
import UserCard from './components/UserCard'
import {connect} from 'react-redux'

class IndexUsers extends Component{

  renderUserCards(users){
    return (
      users.map((user, idx) => {
        return <UserCard key={idx} user={user}/>
      })
    )
  }
  render(){
    return(
      <div className="skeleton">
        <h1>IndexUsers</h1>
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

export default connect(mapStateToProps)(IndexUsers)