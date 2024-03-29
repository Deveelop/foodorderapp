import { useContext } from 'react';
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context'

export default function MealItem(props){
const ctx = useContext(CartContext);
 

    const addCartHandler = amount => {
    ctx.addItem({id: props.id, name: props.name, amount: amount, price: props.price})
    }
 return <li className={styles.meal}>
    <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}><span>&#8358;</span>{props.price}</div>
    </div>
    <div>
    <MealItemForm onAddCart={addCartHandler} id={props.id}/>
    </div>
 </li>
}