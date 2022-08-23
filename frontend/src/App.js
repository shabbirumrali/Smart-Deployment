import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from './pages/Register'
import DefaultPage from './pages/DefaultPage'
import Header from './components/Header'
import PlumeProductList from './pages/plume/PlumeProductList'

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          {/* <Header /> */}
          <Routes>
            <Route path='/' element={<Dashboard />} />
            
            <Route path='product-list' element={<PlumeProductList />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/default' element={<DefaultPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App