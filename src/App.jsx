import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import "./index.css";
import About from "./pages/about";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
