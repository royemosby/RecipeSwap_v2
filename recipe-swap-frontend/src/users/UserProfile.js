import React from 'react'

const UserProfile = (props) => {
  console.log(props)
  return (
    <div className="prez">
      <h2>About {props.user.username}</h2>
      <p>{props.user.about}</p>
    </div>
  )
}

export default UserProfile
