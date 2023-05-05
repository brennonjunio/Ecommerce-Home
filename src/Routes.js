import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Sobre from "./Pages/Sobre";
import Home from "./Pages/Home";

const MyRoutes = () => {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
