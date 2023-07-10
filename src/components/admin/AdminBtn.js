import React from 'react'
import styles from './AdminBtn.module.css'
import AdminSvg from './AdminSvg'
import { Link } from 'react-router-dom'

function AdminBtn(props) {
  return (
    <Link to='/login' className={styles.link}>
    <button className={styles.button}>
   <span className={styles.badge}> <span className={styles.icon}><AdminSvg /></span></span>
    <span> Admin </span>
     </button>
    </Link>
  )
}

export default AdminBtn