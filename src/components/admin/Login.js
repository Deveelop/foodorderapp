import React,{useState} from "react";
import styles from './Login.module.css'
import { Link } from "react-router-dom";
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../../Firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from '../../store/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate();

  const emailChangeHandle = (e) => {
    setEmail(e.target.value)
  }

  const passwordChangeHandler =(e) => {
    setPassword(e.target.value)
  }

  const loginHandler = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/profile')
    }
    })
    .catch(err => setError(err.message))
  }
    return (
      <div className={styles.contained}>
          <h1>Sign in to your account</h1>
          {error && <div>{error}</div>}
          <form onSubmit={loginHandler}>
      <div className={styles.formControl}>
       <label htmlFor="email">E-mail</label>
        <input type='email' name='email' onChange={emailChangeHandle} />
      
        <label htmlFor="password">Password</label>
        <input type='text' name="password" onChange={passwordChangeHandler}/>
      </div>
      <div className={styles.actions}>
          <input type='checkbox'/>
          <span>Remember me</span>
      <p><a href='#'>Forgot Password ?</a></p> 
      </div>
      
      <button type="submit">Login</button>
      
          </form>
  
          <p>Don't have an account? <Link to='/register'>Register</Link></p>
       
      </div>
    )
  }
  
  export default Login