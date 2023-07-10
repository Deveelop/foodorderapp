import { useContext, useState } from 'react';
import styles from './Cart.module.css'
import CartContext from '../../store/cart-context';
import Modal from "../UI/Modal";
import CartItems from './CartItem';
import Checkout from './Checkout';

export default function Cart(props) {
    const ctx = useContext(CartContext);
   const [hasItem] = useState(ctx.items.length > 0)
   const [showForm, setShowForm] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [didSubmit, setDidSubmit] = useState(false);
   const [isError, setIsError] = useState(false);
  
   const cartRemoveHandler = (id) => {
    ctx.removeItem(id)
   }
   const cartAddHandler = (item) => {
    ctx.addItem({...item, amount: 1})
   }
const submitHandler = async (userDetails) =>{
    setIsSubmitting(true)
    try{
const response = await fetch('https://react-http-85514-default-rtdb.firebaseio.com/mealsorder.json',{
    method: 'POST',
    body: JSON.stringify({
        user: userDetails,
        orderedItems: ctx.items
    }),
    headers:{
        'Content-Type': 'application/json'
    }
})
if(!response.ok){
    throw new Error('Order Failed...try again!')
}
const responseData = await response.json();
console.log(responseData);
setIsSubmitting(false);
setDidSubmit(true);
ctx.clearCart()
} catch(err){
setIsError(err.message || 'Something went wrong');
}
} 
   
    const cartItems = <ul className={styles['cart-items']}> 
    {ctx.items.map((item) =>(
    <CartItems onAdd={cartAddHandler.bind(null, item)} onRemove={cartRemoveHandler.bind(null, item.id)} name={item.name} price={item.price} amount={item.amount} key={item.id}/>
    ))
    }</ul>
    
    const totalAmount = `${ctx.totalAmount.toFixed(2)}`;
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
            <span><span>&#8358;</span>{totalAmount}</span>
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
    </Modal>
}

