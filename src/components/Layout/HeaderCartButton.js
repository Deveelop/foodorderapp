import React from "react";
import styles from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";

export default function HeaderCartButton(props) {

  return (
  
      <button onClick={props.isCartShown} className={styles.button}>
        <span className={styles.icon}><CartIcon /></span>
        <span> Your Cart </span>
         <span className={styles.badge}>0</span></button>
    
  )
}