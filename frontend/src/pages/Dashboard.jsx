import { useState, useEffect } from "react"
import LeftSidebar from "../components/sidebar/LeftSidebar"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from "../components/Header"
import PlumeIndex from "./plume/PlumeIndex"

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const [initialLetter, setInitialLetter] = useState(null)

  
  // const firstLetter = user.user.name.split(' ').map(word => word[0]).join('').toUpperCase()
  
  useEffect(() => {
    if(!user || user == null) {
      navigate('/login')
    }else {
      setInitialLetter(user.user.name.split(' ').map(word => word[0]).join('').toUpperCase());
    }
  }, [user, navigate])
  return (
    <>    
      <div className="sub_container">
        <LeftSidebar />
        <div className="second_section">
          <Header initialLetter={initialLetter} />
          <PlumeIndex />
        </div>
      </div>
    </>
  )
}

export default Dashboard