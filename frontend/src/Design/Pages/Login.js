import React from "react";
import CopyrightBar from "../Layouts/CopyrightBar";
import LoginPage from "../Layouts/LoginPage";

export default function Login() {
  return (
    <div className="loginBackground">
      <div style={{ flex: 1 }}>
        <LoginPage />
      </div>
      <CopyrightBar />
    </div>
  );
}
