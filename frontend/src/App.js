import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeautyPearlsLanding from "./components/BeautyPearlsLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BeautyPearlsLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;