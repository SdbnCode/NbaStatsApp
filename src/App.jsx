import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import "./index.css";
import API from "./component/api";
import ComparePlayer from "./pages/compareplayer";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="./pages/home" element={<Home />} />
          <Route path="./pages/compareplayers" element={<API />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
