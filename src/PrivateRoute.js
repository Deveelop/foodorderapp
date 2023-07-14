import {Navigate} from 'react-router-dom'
import {useAuthValue} from './store/AuthContext'

export default function PrivateRoute({children}) {
  const {currentUser} = useAuthValue()

  if(!currentUser?.emailVerified){
    return <Navigate to='/signin' replace/>
  }

  return children
}