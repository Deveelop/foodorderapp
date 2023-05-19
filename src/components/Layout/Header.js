import React from "react";
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import styless from './HeaderCartButton.module.css'
import HomeIcon from "../MainHeader/HomeIcon";

export default function Header (){
    return (
        <>
    <header className={styles.header}>
        {/* <div className={styless.icon}><HomeIcon/></div> */}
        <h2>Kelly's kitchen</h2>
        <HeaderCartButton/>
    </header>
        <div className= {styles['main-image']} >
            <img src="/images/IMG.jpg" alt="wallpaper" />
        </div>
</>)
}