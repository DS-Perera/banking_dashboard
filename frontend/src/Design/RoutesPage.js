import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Success from "./Pages/Success";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}
