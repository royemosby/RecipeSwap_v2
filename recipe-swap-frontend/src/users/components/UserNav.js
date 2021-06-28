import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = (props) => {
  return (
    <div className="prez">
      <nav>
        <Link to="/recipes/new" className="linky">
          New recipe
        </Link>
        <Link to="/users/new" className="linky">
          Favorites(nope)
        </Link>
        <Link to="/users/:username/edit" className="linky">
          Edit profile(nope)
        </Link>
      </nav>
    </div>
  )
}

export default UserNav
