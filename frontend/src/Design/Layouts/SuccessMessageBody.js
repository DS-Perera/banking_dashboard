import React from "react";
import downArrow from "../Assets/downArrow.png";
import MyPieChart from "../Components/MyPieChart";
import MyBarChart from "../Components/MyBarChart";
import Code from "../Components/Code";

export default function SuccessMessageBody() {
  const scrollDown = () => {
    const codebaseDiv = document.querySelector(".Codebase");
    codebaseDiv.scrollTop += codebaseDiv.scrollHeight / 10;
  };
  return (
    <div>
      <div className="pageBackground">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-6 p-3 dashboardContent">
              <div>
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Happy 1st Birthday!</h4>
                    <p className="card-subtitle text-muted">
                      Celebrating One Year of Awesome
                    </p>
                  </div>
                  <div className="card-body text-center">
                    <p className="card-text">
                      Thank you for an incredible year of memories and growth.
                      Here's to many more!
                    </p>
                    <a href="#" className="btn btn-primary">
                      Celebrate
                    </a>
                  </div>
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
