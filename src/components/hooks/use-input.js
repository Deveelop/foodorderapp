import {useState} from 'react'

function useInput(validateInput) {
    const [enteredValue, setEnteredValue] = useState('');
    const [inputFocus, setInputFocus] = useState(false);
    
    const validInput = validateInput(enteredValue);
    const hasError = !validInput && inputFocus;

    const inputChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }
    const inputBlurHandler = () => {
       setInputFocus(true);
    }
    const reset = () => {
        setEnteredValue('');
        setInputFocus(false);
    }
  return {
   value: enteredValue,
   hasError,
   inputChangeHandler,
   inputBlurHandler,
   reset
  }
}

export default useInput;