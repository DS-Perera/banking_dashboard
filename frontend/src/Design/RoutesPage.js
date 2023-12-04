import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Success from "./Pages/Success";
import PaymentPage from "./Pages/PaymentPage";
import Login from "./Pages/Login";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </div>
    </Router>
  );
}
