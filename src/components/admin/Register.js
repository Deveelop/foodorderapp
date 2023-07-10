import React from 'react'
import useInput from '../hooks/use-input'
import { auth } from '../../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


function Register() {
  

    const {
        value:enteredEmail,
         hasError:emailHasError,
          inputBlurHandler:emailBlurHandler,
         inputChangeHandler:emailChanger,
        reset:resetEmail
        } = useInput(value => value.includes('@'))

        const {
            value:enteredPassword,
             hasError:passwordHasError,
              inputBlurHandler:passwordBlurHandler,
             inputChangeHandler:passwordChanger,
            reset:resetPassword
            } = useInput(value => value.trim() !== '' && value.length > 5)

            const {
                value:enteredConfirmPassword,
                 hasError:confirmPasswordHasError,
                  inputBlurHandler:confirmPasswordBlurHandler,
                 inputChangeHandler:confirmPasswordChanger,
                reset:resetConfirmPassword
                } = useInput(value => value === enteredPassword);
    const registerSubmit = (e) => {
        e.preventDefault()

        if(emailHasError && passwordHasError && confirmPasswordHasError){
            createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword).then((res)=>{
                console.log(res.user)
            }).catch(err => console.log(err.message))
        }
    }


    return (
    <form  onSubmit={registerSubmit} >
    <div >
    <label htmlFor='email'>Your name</label>
    <input type='email' id='email' value={enteredEmail} onChange={emailChanger} onBlur={emailBlurHandler}  />
    {emailHasError && <p>Please enter valid email</p>}
    </div>
    <div >
    <label htmlFor='password'>Password</label>
    <input type='text' id='password' value={enteredPassword} onChange={passwordChanger} onBlur={passwordBlurHandler} />
    {passwordHasError && <p>Password should be greater than 5</p>}
    </div>
    <div >
    <label htmlFor='confirmPassword'>Confirm Password</label>
    <input type='text' id='confirmPassword' value={enteredConfirmPassword} onChange={confirmPasswordChanger} onBlur={confirmPasswordBlurHandler} />
    {confirmPasswordHasError && <p>Password does't match</p>}
    </div>
    <div >
    <button >Submit</button>
    </div>
</form>
  )
}

export default Register