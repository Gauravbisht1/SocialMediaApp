import './sidebar.css'
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from '@material-ui/icons'
// import { Users } from "../../dummyData";
import CloseFriend from '../closeFriend/CloseFriend'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Sidebar() {
  const { user } = useContext(AuthContext)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('/users/allusers')
      // console.log(res.data)
      res.data = res.data.filter((r) => r.username !== user.username)

      setUsers(res.data)
    }
    fetchUser()
  }, [users])

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <Chat className='sidebarIcon' />
            <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleFilledOutlined className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <Group className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <Event className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <School className='sidebarIcon' />
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <div className='headings'>
          <School className='sidebarIcon' />
          <h3>Other Users</h3>
        </div>
        {users?.map((u) => (
          <CloseFriend className='allusers' key={u.id} user={u} />
        ))}
      </div>
    </div>
  )
}
