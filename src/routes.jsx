import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Reserves from "./pages/Reserves";

export default function Switch() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/reservas" element={<Reserves/>}></Route>
      </Routes>
    </>
  )
}