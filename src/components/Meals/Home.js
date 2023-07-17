import React from 'react'
import HomeIcon from './HomeIcon'
import styles from './Home.module.css'


function Home() {
  return (
    
    <span className={styles.badge}><span className={styles.icon}><HomeIcon /></span></span>
    
  )
}

export default Home