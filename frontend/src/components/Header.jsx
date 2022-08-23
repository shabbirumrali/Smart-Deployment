import { useNavigate } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import '../index.scss'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = ({initialLetter}) =>  {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <nav className='pre_login_nav'>
      <div className="nav_heading">
        <h2>Welcome to </h2>
        <h3> Connectivity Trial Monitoring Platform</h3>
      </div>
      <div className="top_menu">
        <div className="logout" onClick={onLogout}>
          <AiOutlineLogout />
        </div>
        <span className='notification' >
          <IoNotificationsOutline />
        </span>
        <div className='profile'>
          <span className="profile_icon"> {initialLetter} </span>
          <span><MdOutlineKeyboardArrowDown /> </span>
        </div>
      </div>
        {/* <ul>
          {user ? (
            <li><button className='logout-btn' type='submit' onClick={onLogout}>Logout</button></li>
            ) : (
            <>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
            </>
          )}
        </ul> */}
    </nav>
  )
}

export default Header