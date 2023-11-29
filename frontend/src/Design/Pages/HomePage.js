import React from "react";
import MainNavBar from "../Layouts/MainNavBar";
import CopyrightBar from "../Layouts/CopyrightBar";
import Footer from "../Layouts/Footer";
import MainDashboard from "../Layouts/MainDashboard";

export default function HomePage() {
  return (
    <div>
      <MainNavBar />
      <MainDashboard />
      <Footer />
      <CopyrightBar />
    </div>
  );
}
