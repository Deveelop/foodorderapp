
import styles from './Checkout.module.css'
import useInput from '../hooks/use-input'

function Checkout(props) {
  
const {
    value:enteredName,
    hasError:nameHasError,
    inputChangeHandler:nameChange, 
    inputBlurHandler:nameBlurHandle,
    reset: resetName
  } = useInput (value => value.trim() !== '');
  const {
    value:enteredStreet,
    hasError:streetHasError,
    inputChangeHandler:streetChange, 
    inputBlurHandler:streetBlurHandle,
    reset: resetStreet
  } = useInput (value => value.trim() !== '');
  const {
    value:enteredPostal,
    hasError:postalHasError,
    inputChangeHandler:postalChange, 
    inputBlurHandler:postalBlurHandle,
    reset: resetPostal
  } = useInput (value => value.trim() !== '' && value.length === 6);

  const {
    value:enteredCity,
    hasError:cityHasError,
    inputChangeHandler:cityChange, 
    inputBlurHandler:cityBlurHandle,
    reset: resetCity
  } = useInput (value => value.trim() !== '');

  



  const checkoutSubmit = (event) =>{
    event.preventDefault();

    const userData ={
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity
    }
   props.onSubmit(userData);
    resetName();
    resetStreet();
    resetPostal();
    resetCity();
  }

  const nameStyles = `${styles.control} ${nameHasError ? styles.invalid : ''}`
  const streetStyles = `${styles.control} ${streetHasError ? styles.invalid : ''}`
  const postalStyles = `${styles.control} ${postalHasError ? styles.invalid : ''}`
  const cityStyles = `${styles.control} ${cityHasError ? styles.invalid : ''}`
  
  
  return (
    <form className={styles.form} onSubmit={checkoutSubmit}>
        <div className={nameStyles}>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' value={enteredName} onChange={nameChange} onBlur={nameBlurHandle} />
        {nameHasError && <p>field required</p>}
        </div>
        <div className={streetStyles}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' value={enteredStreet} onChange={streetChange} onBlur={streetBlurHandle}/>
        {streetHasError && <p>field required</p>}
        </div>
        <div className={postalStyles}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' value={enteredPostal} onChange={postalChange} onBlur={postalBlurHandle}/>
        {postalHasError && <p>enter valid code</p>}
        </div>
        <div className={cityStyles}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' value={enteredCity} onChange={cityChange} onBlur={cityBlurHandle}/>
        {cityHasError && <p>field required</p>}
        </div>
        <div className={styles.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button className={styles.submit}>Confirm</button>
        </div>
    </form>
  )
}

export default Checkout