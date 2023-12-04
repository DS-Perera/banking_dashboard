import React from "react";
import Code from "../Components/Code";

export default function SuccessMessageBody() {
  return (
    <div>
      <div className="pageBackground">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-6 p-3 dashboardContent">
              <div>
                <div className="card">
                  <div className="card-header primary-background px-5">
                    <p className="card-subtitle text-muted">Amount in</p>
                    <div className="d-flex justify-content-between">
                      <h4 className="card-title">SGD </h4>
                      <h4 className="card-title">1,728.32</h4>
                    </div>
                  </div>
                  <div className="card-body text-center py-5 my-5 px-5">
                    <p className="card-text">
                      Transaction Completed Successfully.
                    </p>
                    <a href="#" className="btn btn-primary py-2 px-5 alpha-btn mt-4">
                      Ok
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
