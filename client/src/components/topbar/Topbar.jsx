import './topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link, Redirect } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Topbar() {
  const { user } = useContext(AuthContext)
  const [search, setSearch] = useState('')
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>MeetApp</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Link to={`/profile/${search}`}>
            <Search className='searchIcon' id='btn' />
          </Link>

          <input
            placeholder='Search for friend, post or video'
            className='searchInput'
            id='searchQuery'
            onChange={(e) =>
              setSearch(document.getElementById('searchQuery').value)
            }
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : // : PF + "person/noAvatar.png"
                  `https://robohash.org/${user}`
            }
            alt=''
            className='topbarImg'
          />
        </Link>
      </div>
    </div>
  )
}
