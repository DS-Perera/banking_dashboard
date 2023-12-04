import React from "react";
import MainNavBar from "../Layouts/MainNavBar";
import Payment from "../Layouts/Payment";
import Footer from "../Layouts/Footer";
import CopyrightBar from "../Layouts/CopyrightBar";

export default function PaymentPage() {
  return (
    <div>
      <MainNavBar />
      <Payment />
      <Footer />
      <CopyrightBar />
    </div>
  );
}
