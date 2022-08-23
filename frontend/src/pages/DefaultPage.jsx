import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const DefaultPage = () => {
  return (
    <>
        <Header />
        <div className='default_page'>
            <div className='default_page_login_btn'>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    </>
  )
}

export default DefaultPage