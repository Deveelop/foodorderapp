import React from "react";
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import AdminBtn from "../admin/AdminBtn";
import Home from "../Meals/Home";


export default function Header (props){
    return (
        <>
    <header className={styles.header}>
        <h2>MamaPut <Home/></h2>
        <AdminBtn/>
        <HeaderCartButton isCartShown={props.onShowCart}/>
    </header>
        <div className= {styles['main-image']} >
            <img src="/images/IMG.jpg" alt="wallpaper" />
        </div>
</>)
}