import React from "react";
import styles from './Login.module.css'

function Login() {
    return (
      <div className={styles.contained}>
          <h1>Sign in to your account</h1>
          <form>
      <div className={styles.formControl}>
       <label>E-mail</label>
        <input type='email' name='email' />
      
        <label>Password</label>
        <input type='text'/>
      </div>
      <div className={styles.actions}>
          <input type='checkbox'/>
          <span>Remember me</span>
      <p><a href='#'>Forgot Password ?</a></p> 
      </div>
      
      <button>Login</button>
      
          </form>
  
          <p>Don't have an account? <a href='/register'>Register</a></p>
       
      </div>
    )
  }
  
  export default Login