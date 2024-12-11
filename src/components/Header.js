import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Header = () => {
 const [btnName ,setbtnName] =useState("login");

 const {loggedinuser
 }=useContext(userContext);
 console.log(loggedinuser
 )

 const Status= useOnlinestatus(); 
 const cartItems=useSelector((store)=>store.cart.items)

 console.log(Status)
  // let btnName="login"
    return (
      <>
        <div className="header h-[70px] bg-pink-50 ">
          <ul className="flex text-2xl justify-end gap-7 mr-10 p-4">
            <li>{Status?"🟢":"❌" }</li>  
          <Link to="/"> <li>Home</li></Link>
            <Link to="about"> <li>About</li></Link>
            <Link to="Contact">  <li>Contact</li></Link>
           
            <Link to="about"></Link>
           
          <Link to="cart"> <li>Cart({cartItems.length}items)</li></Link>
           
            <li><button onClick={()=>{
               
                btnName === "login"
                ? setbtnName("logout")
                : setbtnName("login");
              
          
              
                console.log(btnName)
            }} className="bg-gray-600 p-2 rounded-lg">
           {btnName}
              </button></li>
              <li>{loggedinuser
              }</li>
          </ul>
        </div>
      </>
    );
  };

  export default Header;