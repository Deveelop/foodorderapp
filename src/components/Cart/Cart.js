import { useContext, useState } from 'react';
import styles from './Cart.module.css'
import CartContext from '../../store/cart-context';
import Modal from "../UI/Modal";
import CartItems from './CartItem';
import Checkout from './Checkout';

export default function Cart(props) {
    const ctx = useContext(CartContext);
   const [hasItem] = useState(ctx.items.length > 0)
   const cartRemoveHandler = (id) => {
    ctx.removeItem(id)
   }
   const cartAddHandler = (item) => {
    ctx.addItem({...item, amount: 1})
   }
    const cartItems = <ul className={styles['cart-items']}> 
    {ctx.items.map((item) =>(
    <CartItems onAdd={cartAddHandler.bind(null, item)} onRemove={cartRemoveHandler.bind(null, item.id)} name={item.name} price={item.price} amount={item.amount} key={item.id}/>        
    ))}</ul>
    const totalAmount = `${ctx.totalAmount.toFixed(2)}`;
   
    return <Modal onCancel={props.onClose}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span><span>&#8358;</span>{totalAmount}</span>
            </div>
            <Checkout/>

        <div className={styles.actions}>
        <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
        <button className={styles.button} disabled={!hasItem}>Order</button>
        </div>
    </Modal>
}