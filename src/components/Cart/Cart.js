
import styles from './Cart.module.css'

import Modal from "../UI/Modal";
export default function Cart(props) {
    const cartItems = <ul className={styles['cart-items']}> {[{ id: 'c1', name: 'sushi', amount: 3, price: 20.99 }].map((items) => <li key={Math.random()}>{items.name}</li>)}</ul>
    return <Modal onCancel={props.onClose}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>30.10</span>
            </div>

        <div className={styles.actions}>
        <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
        </div>
    </Modal>
}