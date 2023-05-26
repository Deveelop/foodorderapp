import React from "react";
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";


export default function Header (props){
    return (
        <>
    <header className={styles.header}>
        <h2>Kelly's kitchen</h2>
        <HeaderCartButton isCartShown={props.onShowCart}/>
    </header>
        <div className= {styles['main-image']} >
            <img src="/images/IMG.jpg" alt="wallpaper" />
        </div>
</>)
}