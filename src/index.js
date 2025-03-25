import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Resmenu from "./components/Resmenu";
import ErrorElemet from "./components/ErrorElemet";
// import userContext from "./utils/userContext";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";






const AppLayout = () => {
  const [userName,setuserName]=useState();
useEffect(()=>{
  const data={
    name:"sagar"
  }

  setuserName(data.name);
},[])

  return (
    <>
    <Provider   store={appStore}>
   <userContext.Provider value={{loggedinuser:userName ,setuserName}}>
      <Header />
      <Outlet/>
      </userContext.Provider>
      </Provider>
    </>
  );
};


const router =createBrowserRouter([
  {
    // path:"/Food_odering_Application",
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"",
        element:<Body/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"contact",
        element:<Contact/>
      },{
        path:"resmenu/:resid",
        element:<Resmenu/>
      }
    ],
    errorElement:<ErrorElemet/>
  },
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={router} basename="/Food_odering_Application" />);
