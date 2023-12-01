import React from "react";
import downArrow from "../Assets/downArrow.png";
import MyPieChart from "../Components/MyPieChart";
import MyBarChart from "../Components/MyBarChart";
import Code from "../Components/Code";

export default function MainDashboard() {
  return (
    <div>
      <div className="pageBackground">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-6 p-3 dashboardContent">
              <h3>Account Details</h3>
              <div className="row">
                <div className="col-md-6">
                  <h5 className="pt-3 ">Your Account</h5>
                  <p>000-000 00 0000</p>
                </div>
                <div className="col-md-6 text-right">
                  <h5 className="pt-3 text-right">Credit Card Bill</h5>
                  <p className="text-right">2435 **** **** **12</p>
                </div>
                <div className="col-md-12 text-right">
                  <button
                    type="button"
                    class="btn btn-primary py-2 px-4 alpha-btn"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
              <div className="py-2">
                <hr />
              </div>
              <h3 className="pt-3">Account Charts</h3>
              <div className="row">
                <div className="col-md-6">
                  <h5 className="pt-3 pb-4">Pie Chart</h5>
                  <MyPieChart />
                </div>
                <div className="col-md-6">
                  <h5 className="pt-3 pb-4">Bar Chart</h5>
                  <MyBarChart />
                </div>
              </div>
            </div>
            <Code />
          </div>
        </div>
      </div>
    </div>
  );
}
