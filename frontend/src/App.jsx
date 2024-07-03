import { useState } from "react";
import Login from "./componenets/Login";
import Signup from "./componenets/Signup"
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./componenets/Home";

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
    element:<Home/>
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
