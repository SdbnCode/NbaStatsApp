import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import "./index.css";
import API from "./component/api";
import ComparePlayer from "./pages/compareplayer";
// import About from "./pages/about";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/compareplayer" element={<ComparePlayer />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/api" element={<API />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
