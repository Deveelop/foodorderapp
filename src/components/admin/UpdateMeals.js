import React from 'react'
import useInput from '../hooks/use-input';
import styles from './UpdateMeals.module.css'
import Modal from '../UI/Modal';
function UpdateMeals(props) {
const {
    value:enteredUserId,
    isValid:enteredUserIdIsValid,
     inputChangeHandler:userIdChanger,
     inputBlurHandler:userIdBlurHandle,
     hasError: userIdHasError,
     reset:userIdReset} = useInput(value => value.match(/[a-z]/) && value.match(/[0-9]/));
const {
    value:enteredMealName,
    isValid:enteredNameIsValid,
     inputChangeHandler:mealNameChanger,
     inputBlurHandler:mealNameBlurHandle,
     hasError: nameHasError,
     reset:mealNameReset} = useInput(value => value.trim() !== '');
const {
    value:enteredMealDescription,
    isValid:enteredDescriptionIsValid,
     inputChangeHandler:mealsDescriptionChanger,
     inputBlurHandler:mealDescriptionBlurHandle,
     hasError:descriptionHasError,
     reset:mealsDescriptionReset} = useInput(value => value.trim() !== '');

const {
    value:enteredmealPrice,
    isValid:enteredPriceIsValid,
     inputChangeHandler:mealPriceChanger,
     inputBlurHandler:mealPriceBlurHandle,
     hasError: priceHasError,
     reset:mealPriceReset} = useInput(value => value <= 1000);

     let formIsValid = false;
     if(enteredUserIdIsValid && enteredNameIsValid && enteredDescriptionIsValid && enteredPriceIsValid){
        formIsValid = true;
     }

const makeUpdateRequest = async (updateReq) => {
    const response = await fetch('https://react-http-85514-default-rtdb.firebaseio.com/meals.json', {
        method: 'POST',
        body: JSON.stringify(updateReq),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resData = await response.json();
}
const updateSubmit = (e) => {
e.preventDefault();

const updateDetails = {
    id: enteredUserId,
    name: enteredMealName,
    description: enteredMealDescription,
    price: enteredmealPrice,
}
makeUpdateRequest(updateDetails);
userIdReset();
mealNameReset();
mealsDescriptionReset();
mealPriceReset();
props.onCloseModal();
}

const userIdStyle = `${styles.control} ${userIdHasError ? styles.invalid : ''}`;
const nameStyle = `${styles.control} ${nameHasError ? styles.invalid : ''}`;
const descriptionStyle = `${styles.control} ${descriptionHasError ? styles.invalid : ''}`;
const priceStyle = `${styles.control} ${priceHasError ? styles.invalid : ''}`;

  return (
    <Modal onCancel={props.onCloseModal}>
        <form className={styles.form} onSubmit={updateSubmit}> 
        <div className={userIdStyle}>
        <label>UserID (your username and a unique number)</label>
        <input type='text' value={enteredUserId} onChange={userIdChanger} onBlur={userIdBlurHandle}/>
        </div>
         <div className={nameStyle}>
        <label>Meal name</label>
        <input type='text' value={enteredMealName} onChange={mealNameChanger} onBlur={mealNameBlurHandle}/>    
        </div>
        <div className={descriptionStyle}>
        <label>Meal description</label>
        <input type='text' value={enteredMealDescription} onChange={mealsDescriptionChanger} onBlur={mealDescriptionBlurHandle}/>    
        </div>
        <div className={priceStyle}>
        <label>Meal Price</label>
        <input type='number' value={enteredmealPrice} onChange={mealPriceChanger} onBlur={mealPriceBlurHandle}/>
        {priceHasError && <p>Please meal price must not be morethan 1000naira</p>}    
        </div>
        
        <div className={styles.actions}>
        <button onCancel={props.onCloseModal} disabled={!formIsValid}>Update</button>
        </div>
        </form>
        </Modal>
  )
}

export default UpdateMeals