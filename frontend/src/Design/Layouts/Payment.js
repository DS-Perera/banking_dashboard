import React from "react";
import Code from "../Components/Code";

export default function Payment() {
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
                  <div className="card-body px-5">
                    <p className="card-text">
                      From <br />{" "}
                      <span className="font-weight-bold">710-181002-2</span>
                    </p>
                    <p className="card-text">
                      To <br />{" "}
                      <span className="font-weight-bold">
                        2345-****-****-1067
                      </span>
                    </p>
                    <p className="card-text">
                      When <br />{" "}
                      <span className="font-weight-bold">17 - Nov - 2023</span>
                    </p>
                    <br />
                    <div className="d-flex justify-content-between mb-3 buttonSet">
                      <a
                        href="#"
                        className="btn btn-primary py-2 px-5 beta-btn "
                      >
                        Cancel
                      </a>
                      <a
                        href="#"
                        className="btn btn-primary py-2 px-5 alpha-btn "
                      >
                        Pay
                      </a>
                    </div>
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
