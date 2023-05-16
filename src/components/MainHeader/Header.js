import React from "react";
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
export default function Header (){
    return (
        <>
    <header className={styles.header}>
        <h2>Kelly's kitchen</h2>
        <HeaderCartButton/>
    </header>
        <div className={styles.main} >
            <img src="/images/IMG.jpg" alt="wallpaper" />
        </div>
        <HeaderCartButton/>
        </>)
}