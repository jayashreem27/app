import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./paqes/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./paqes/auth/Login";
import Register from "./paqes/auth/Signup";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoginStatus } from "./redux/features/auth/authSlice";
import Profile from "./paqes/profile/Profile";
import Cart from "./paqes/cart/cart";

const App = () => {
  axios.defaults.withCredentials=true;
  const dispatch=useDispatch()

  useEffect(()=>{
     dispatch(getLoginStatus())
  },[dispatch])

  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </BrowserRouter> 
    </>
  );
};

export default App;
