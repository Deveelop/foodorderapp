import React from "react";
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import styless from '../MainHeader/HeaderCartButton.module.css'
import HomeIcon from "./HomeIcon";
import MealItem from "../MealItem/MealItem";
import MealsSummary from "../MealsSummary/MealsSummary";
export default function Header (){
    return (
        <>
    <div className={styles.header}>
        <div className={styless.icon}><HomeIcon/></div>
        <h2>Kelly's kitchen</h2>
        <HeaderCartButton/>
    </div>
        <div className={styles.main} >
            <img src="/images/IMG.jpg" alt="wallpaper" />
        </div>
        <MealsSummary/>
        <MealItem/>
        
        </>)
}