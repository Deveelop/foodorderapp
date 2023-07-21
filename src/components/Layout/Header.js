import {useContext} from "react";
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import AdminBtn from "../admin/AdminBtn";
import Home from "../Meals/Home";
import MenuIcon from "./MenuIcon";
import { Link } from "react-router-dom";
import UpgradeUser from '../../store/upgrade-context'

export default function Header (props){
    const ctx = useContext(UpgradeUser);
    return (
        <>
    <header className={styles.header}>
    <span onClick={ctx.navFuction} className={styles.icon}><MenuIcon/></span>
    <img src="/images/mamalogo.png" alt="mamalogo"/>
    <span className={styles.element3}> <Link to='/' className={styles.link}> <h2>MamaPut <Home/></h2></Link> </span> 
     <span className={styles.element2}><AdminBtn/></span> 
     <span className={styles.element1}><HeaderCartButton isCartShown={props.onShowCart}/></span>
      
    </header>
        <div className= {styles['main-image']} >
            <img src="/images/IMG.jpg" alt="wallpaper" />
        </div>
</>)
}