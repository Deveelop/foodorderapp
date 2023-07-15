import React,{useState, useEffect} from "react";
import './App.css'
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import SignIn from "./components/admin/SignIn";
import Register from "./components/admin/Register";
import VerifyEmail from "./VerifyEmail";
import UserProfile from "./UserProfile";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./store/AuthContext";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false)

  useEffect(()=>{
onAuthStateChanged(auth, (user)=>{
setCurrentUser(user)
})
  }, [])
 
  const showCartHandler = () => {
    setCartShown(true);
  }
  const hideCartHandler = () => {
    setCartShown(false)
  }
 
  
  return (
    <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
      <Router>
   <CartProvider>
   {cartShown && <Cart onClose={hideCartHandler}/>}
   <Header onShowCart={showCartHandler}/>
 <main>
  <Routes>
    <Route path="/" element={<Meals/>}/>
    <Route path="/signin" element={
    <SignIn />
    }/>
    <Route path="/register" element={
    <Register/>
    }/>
    <Route path="/verify-email" element={<VerifyEmail/>}/>
     <Route exact path="/profile" element={
    <PrivateRoute>
    <UserProfile/>
    </PrivateRoute>
    }/> 

  </Routes>
 </main>
  <footer>
            <p>&copy; 2023 Deveeloop(Vicson Abuka). All rights reserved</p>
            <p>+2348065032361</p>
        </footer>
   </CartProvider>
   </Router>
   </AuthProvider>
  );
}

export default App;
