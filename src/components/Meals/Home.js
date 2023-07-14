import React from 'react'
import HomeIcon from './HomeIcon'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Link to='/' className={styles.link}>
    <span className={styles.badge}><span className={styles.icon}><HomeIcon /></span></span>
    </Link>
  )
}

export default Home