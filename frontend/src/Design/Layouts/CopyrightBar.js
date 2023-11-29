import React from "react";

export default function CopyrightBar() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-left">
              <a href="#left-link1" className="text-white">
                Terms & Conditions
              </a>{" "}
              |
              <a href="#left-link2" className="text-white">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="col-md-6 copyrihtLine">
            <p className="text-right">
              <a href="#right-link1" className="text-white">
                ©2023 ABC Bank. All rights reserved
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
