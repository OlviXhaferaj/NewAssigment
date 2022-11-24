import React from "react";
import { useState } from 'react';
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes
}from 'react-router-dom';
import Home from "./Components/Home";
import Number from "./Components/Number";
import Hello from "./Components/Hello";
import Lastpage from "./Components/Lastpage";

function App() {

  return(
      <BrowserRouter >
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/Number/4"}>4</NavLink>
        <NavLink to={"/Hello/hello"}>hello</NavLink>
        <NavLink to={"/Lastpage/hello/yellow/blue"}>Last page</NavLink>
      <Routes>
        <Route  path={"/home"} element={<Home />}/>
        <Route path="/Number/:num" element={<Number/>}/>
        <Route path="/Hello/:word" element={<Hello/>}/>
        <Route path={"/Lastpage/:tword/:color/:backgroundColor"} element={<Lastpage />}/>
      </Routes>
      </BrowserRouter>
  )
}
export default App;