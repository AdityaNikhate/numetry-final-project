import { useState } from "react";
import Login from "./componenets/Login";
import Signup from "./componenets/Signup"
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./componenets/Home";
import ForgotPass from "./componenets/ForgotPass";
import Profile from "./componenets/Profile";
import Hero from "./componenets/Hero";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  }, 
  {
    path:'/signup',
    element:<Signup/>
  }, 
  {
    path:'/home',
    element:<Home/>,
    children:[
      {
        path:'profile',
        element: <Profile/>
      }, 
      {
        index:true,
        element:<Hero/>
      }
    ]
  },
  {
    path:'/forgotpass',
    element:<ForgotPass/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
