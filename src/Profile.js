import { useState } from 'react'
import {useAuthValue} from './store/AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './Firebase'

import AdminSvg from './components/admin/AdminSvg'
import './Profile.css'

function Profile() {
  const {currentUser} = useAuthValue();
  

  return (
    
      <div className='subG1'>
       <div className='info'>
       <span className='badge'> <span className='icon'><AdminSvg /></span></span>
        <h4>@{currentUser?.username} <span><i>verified</i></span></h4>
        <p><strong>Email: </strong>{currentUser?.email}</p>
       
        <div className="actions">
       <button className='update' type='button'>Update meals</button>
       <button className='logOut' onClick={() => signOut(auth)}>Sign Out</button>
       </div>
       </div>
      
       <div className='tracking'>
        <h1> Your Rating</h1>
        <div style={{'--values': 40}} className='div'></div>
        <div className='ratingGroup'>
        <div style={{'--value1': 8}} className='orders'></div>
        <div style={{'--value2': 15}} className='stars'></div>
        </div>
       </div>
      </div>
      



  













      // <div className={styles.center}>
      //   <div className={styles.profile}>
      //     <h1>Profile</h1>
      //     <p><strong>Username: </strong>{currentUser?.username}</p>
      //     <p><strong>Email: </strong>{currentUser?.email}</p>
      //     <p>
      //       <strong>Email verified: </strong>
      //       {`${currentUser?.emailVerified}`}
      //     </p>
      //     <span onClick={() => signOut(auth)}>Sign Out</span>
      //   </div>
      // </div>
  )
}

export default Profile