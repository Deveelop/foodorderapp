import { useContext, useState, useEffect } from 'react';
import styles from './Cart.module.css'
import CartContext from '../../store/cart-context';
import Modal from "../UI/Modal";
import CartItems from './CartItem';
import Checkout from './Checkout';
import UpdateMeals from '../admin/UpdateMeals';
import MealsApi from '../api/meals-api';

export default function Cart(props) {
    const ctx = useContext(CartContext);
    const {submitRequestFunc:submitHandler, submitingStateVar:isSubmitting, didSubmitStateVar:didSubmit, errorStateVar:isError} = MealsApi();
   const [hasItem] = useState(ctx.items.length > 0)
   const [showForm, setShowForm] = useState(false);
   
  
   const cartRemoveHandler = (id) => {
    ctx.removeItem(id)
   }
   const cartAddHandler = (item) => {
    ctx.addItem({...item, amount: 1})
   }

   
    const cartItems = <ul className={styles['cart-items']}> 
    {ctx.items.map((item) =>(
    <CartItems onAdd={cartAddHandler.bind(null, item)} onRemove={cartRemoveHandler.bind(null, item.id)} name={item.name} price={item.price} amount={item.amount} key={item.id}/>
    ))
    }</ul>
   
    const orderButtonHandle = () =>{
        setShowForm(true);
     
       }
       const modalActions = (
        <div className={styles.actions}>
        <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
        <button onClick={orderButtonHandle} className={styles.button} disabled={!hasItem}>Order</button>
        </div>
       )
  const cartModalContent = (
  <>
     {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span><span>&#8358;</span>{ctx.totalAmount}</span>
            </div>
            {showForm && <Checkout onSubmit={submitHandler} onCancel={props.onClose}/>}
        {!showForm && modalActions}
       
  </>
  );
  const isSubmittingModalContent = <p>Please wait while we place your order...</p>
  const didSumitModalContent = (
  <>
  <h4>Successful!!</h4>
  <p>Thank You for your patronage. Exercise patience as we would deliver in no time.</p>
  <div className={styles.actions}>
        <button onClick={props.onClose} className={styles.button}>Close</button>
        </div>
  </>);
  const errorMsgContent = (
    <>
    <p>{isError}. Please check your network and try again!!!</p>
    <div className={styles.actions}>
        <button onClick={props.onClose} className={styles.button}>Refresh</button>
        </div>
    </>
  )
    return <Modal onCancel={props.onClose}>
     {!isSubmitting && !didSubmit  && !isError && cartModalContent}
     {isSubmitting && !isError && !didSubmit && isSubmittingModalContent}
     {!isSubmitting && !isError && didSubmit && didSumitModalContent}
     { isSubmitting && !didSubmit && isError && errorMsgContent}
    {ctx.updateHandle && <UpdateMeals/>}
    </Modal>
}

