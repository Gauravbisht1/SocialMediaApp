import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import './closeFriend.css'

export default function CloseFriend({ user }) {
  return (
    <li className='sidebarFriend'>
      <img
        className='sidebarFriendImg'
        // src={PF+user.profilePicture}
        src={`https://robohash.org/${user.username}`}
        alt=''
      />
      <Link
        to={`/profile/${user.username}`}
        style={{ textDecoration: 'none', cursor: 'pointer' }}
      >
        <span style={{ color: 'black', fontWeight: '500' }}>
          {user.username}
        </span>
      </Link>
    </li>
  )
}
