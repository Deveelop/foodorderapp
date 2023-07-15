import React,{useState} from 'react'
import useInput from '../hooks/use-input';
import styles from './UpdateMeals.module.css'
import Modal from '../UI/Modal';
function UpdateMeals(props) {
const {
    value:enteredUserId,
     inputChangeHandler:userIdChanger,
     inputBlurHandler:userIdBlurHandle,
     hasError: userIdHasError,
     reset:userIdReset} = useInput(value => value.match(/[a-z]/) && value.match(/[0-9]/));
const {
    value:enteredMealName,
     inputChangeHandler:mealNameChanger,
     inputBlurHandler:mealNameBlurHandle,
     hasError: nameHasError,
     reset:mealNameReset} = useInput(value => value.trim() !== '');
const {
    value:enteredMealDescription,
     inputChangeHandler:mealsDescriptionChanger,
     inputBlurHandler:mealDescriptionBlurHandle,
     hasError:descriptionHasError,
     reset:mealsDescriptionReset} = useInput(value => value.trim() !== '');
const {
    value:enteredmealPrice,
     inputChangeHandler:mealPriceChanger,
     inputBlurHandler:mealPriceBlurHandle,
     hasError: priceHasError,
     reset:mealPriceReset} = useInput(value => value > 1000);

const makeUpdateRequest = async (updateReq) => {
    const response = await fetch('https://react-http-85514-default-rtdb.firebaseio.com/meals.json', {
        method: 'POST',
        body: JSON.stringify(updateReq),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resData = await response.json();
    console.log(resData);
}
const updateSubmit = (e) => {
e.preventDefault();

const updateDetails = {
    id: enteredUserId,
    name: enteredMealName,
    description: enteredMealDescription,
    price: enteredmealPrice
}
makeUpdateRequest(updateDetails);
console.log(updateDetails)
userIdReset();
mealNameReset();
mealsDescriptionReset();
mealPriceReset()
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
        <input type='text' value={enteredmealPrice} onChange={mealPriceChanger} onBlur={mealPriceBlurHandle}/>    
        </div>
        <div className={styles.actions}>
        <button onCancel={props.onCloseModal}>Update</button>
        </div>
        </form>
        </Modal>
  )
}

export default UpdateMeals