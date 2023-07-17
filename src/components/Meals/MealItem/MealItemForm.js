import { useRef, useState } from 'react';
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'

export default function MealItemForm(props){
    const amountInputRef = useRef();
    const [formIsValid, setFormIsValid] = useState(true);
    const submitHandler = (e) => {
        e.preventDefault();
    const enteredAmount = amountInputRef.current.value; //this is always returned as a string
    const enteredAmountNumber = +enteredAmount; //reason why I added the plus sign to convert it to a number here.

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
        setFormIsValid(false)
        return;
    }
    props.onAddCart(enteredAmountNumber);
    
}

    return <form onSubmit={submitHandler} className={styles.form}>
        <Input ref={amountInputRef} label='Amount' input={{ id:'amount_' +props.id, type:'number', min: '1', max: '5', step: '1', defaultValue:'1'}} />
        <button>+ Add</button>
        {!formIsValid && <p>Please entered valid number (1-5).</p>}
    </form>
}