import {useContext, useEffect, useState} from "react";
import styles from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
const cartCtx = useContext(CartContext);
const [btnHighlighted, setBtnHighlighted] = useState(false);

const numberOfCartItems = cartCtx.items.reduce((currNum, item)=>{
  return currNum + item.amount
}, 0);
const {items} = cartCtx;
const btnStyles = `${styles.button} ${btnHighlighted ? styles.bump : ''}`;
useEffect(() => {
  if(items.length === 0){
    return;
  }
  setBtnHighlighted(true);
 const timer = setTimeout(() => {
setBtnHighlighted(false);
  }, 300);

  return () => {
    clearTimeout(timer);
  }

}, [items])

  return (
    
      <button onClick={props.isCartShown} className={btnStyles}>
        <span className={styles.icon}><CartIcon /></span>
        <span> Your Cart </span>
         <span className={styles.badge}>{numberOfCartItems}</span></button>
    
  )
}