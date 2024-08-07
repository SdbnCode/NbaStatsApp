import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Header from "./component/header";
import Home from "./pages/home";
import "./App.css";
import API from "./component/api";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
