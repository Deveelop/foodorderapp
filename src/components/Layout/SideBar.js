import { useContext } from "react"
import { Link } from "react-router-dom"
import styles from './SideBar.module.css'
import UpgradeUser from "../../store/upgrade-context"
function Sidebar() {
    const ctx = useContext(UpgradeUser)
    return (
      
      <ul className={styles.sidebar}>
        <Link to='/' onClick={ctx.navCloseFunc} className={styles.link}><li>Home</li></Link>
        <Link to='/register'  onClick={ctx.navCloseFunc} className={styles.link}><li>Signup</li></Link> 
        <Link to='/login'  onClick={ctx.navCloseFunc} className={styles.link}><li>Signin</li></Link>
      </ul>
    )
  }
  
  export default Sidebar