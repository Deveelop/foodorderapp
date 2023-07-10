import React,{useState, useEffect} from "react";
import './App.css'
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./store/AuthContext";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
    <AuthProvider value={{currentUser}}>
   <CartProvider>
   {cartShown && <Cart onClose={hideCartHandler}/>}
   <Header onShowCart={showCartHandler}/>
 <main>
  <Routes>
    <Route path="/home" element={<Meals/>}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
 </main>
  <footer>
            <p>&copy; 2023 Deveeloop(Vicson Abuka). All rights reserved</p>
            <p>+2348065032361</p>
        </footer>
   </CartProvider>
   </AuthProvider>
  );
}

export default App;
