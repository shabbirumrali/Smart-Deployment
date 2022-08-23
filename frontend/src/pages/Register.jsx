import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import '../index.scss'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formData
    const navigate = useNavigate()
    const dispatch =  useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    
    useEffect(() => {
        if(isError) {
            console.log(message)
        }
        if(isSuccess || user) {
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
        if(password !== password2) {
            console.log('passowrd do not match')
        }else {
            const userData = { name, email, password }
            dispatch(register(userData))
        }
    }
    if (isLoading) {
        return <Spinner />
    }
  return (
    <>
        <section className="right_section">
            <div className="form_container">
                <h2>Register</h2>
                <form onSubmit={onSubmit}>
                    <div className="form_element">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name='name' value={name} onChange={onChange} placeholder='Joe millar' />
                    </div>
                    <div className="form_element">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' value={email} onChange={onChange} placeholder='joe@email.com' />
                    </div>
                    <div className="form_element">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' value={password} onChange={onChange} placeholder='Enter your password' />
                    </div>
                    <div className="form_element">
                        <label htmlFor="password2">Confirm password</label>
                        <input type="password" id='password2' name='password2' value={password2} onChange={onChange} placeholder='Confirm password' />
                    </div>
                    <div className="form_element">
                        <button type='submit'>Register</button>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Register