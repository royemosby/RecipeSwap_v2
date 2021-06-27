import React from 'react'
import {Link} from 'react-router-dom'

const UserCard = ({user}) =>{
  return(
    <div className="prez">
      <Link to={`/user/${user.username}`}>
        <div>{user.username}</div>
        <p>{user.about}</p>
      </Link>
    </div>

  )
}

export default UserCard