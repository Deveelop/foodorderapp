import React from "react";
import styles from './HeaderCartButton.module.css'
import CartIcon from "./CartIcon";

export default function HeaderCartButton(){
    
    return(
      <>
      <button className={styles.button}><CartIcon/>Your cart</button>
      </>
    )
}