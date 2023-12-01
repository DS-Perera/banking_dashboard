import React from "react";
import MainNavBar from "../Layouts/MainNavBar";
import CopyrightBar from "../Layouts/CopyrightBar";
import Footer from "../Layouts/Footer";
import MainDashboard from "../Layouts/MainDashboard";
import SuccessMessageBody from "../Layouts/SuccessMessageBody";

export default function Success() {
  return (
    <div>
      <MainNavBar />
      {/* <MainDashboard /> */}
      <SuccessMessageBody />
      <Footer />
      <CopyrightBar />
    </div>
  );
}
