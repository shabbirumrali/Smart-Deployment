import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../assets/logo/lg.png'
import Spinner from '../components/Spinner'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
      if (isError) {
        console.log(message);
      }
      if( isSuccess || user ) {
        navigate('/')
      }
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
     

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {email, password}
        dispatch(login(userData))

    }
    // if(isLoading) {
    //     return <Spinner />
    // }
  return (
    <div className="auth_container">
        <div className="left_section">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="right_section">
            <div className="login_title">
                <span>Welcome!</span>
                <h2>Connectivity Trial Monitoring Platform</h2>
            </div>
            <div className="form_container">
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="form_element">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' value={email} onChange={onChange} placeholder='joe@email.com' />
                    </div>
                    <div className="form_element">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' value={password} onChange={onChange} placeholder='Enter your password' />
                    </div>
                    <div className="form_element">
                        <p>Forgot password?</p>
                    </div>
                    <div className="form_element">
                        <button type='submit'> {isLoading ? <Spinner /> : 'Login'} </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login