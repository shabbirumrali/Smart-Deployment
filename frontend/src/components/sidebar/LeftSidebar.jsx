import '../../index.scss'
import logo from '../../assets/logo/Liberty_Global.png'
import { MdDashboard, MdFolder, MdOutlineSettings } from "react-icons/md";

const LeftSidebar = () => {
  return (
    <nav className="right_sidebar">
        <div className="default_logo left_menu">
        <img src={logo} alt="dashboard logo" />
        </div>
        <div className="center_menu left_menu">
        <ul>
            <li><MdDashboard /><p>Dashboard</p></li>
            <li><MdFolder /></li>
            <li><MdFolder /></li>
            <li><MdFolder /></li>
        </ul>
        </div>
        <div className="setting left_menu">
        <MdOutlineSettings /><p>Setting</p>
        </div>
    </nav>
  )
}

export default LeftSidebar