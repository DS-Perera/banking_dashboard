import React from "react";
import user from "../Assets/user.png";
import lock from "../Assets/lock.png";

export default function LoginPage() {
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-md-5 my-5">
            <div className="card loginDetails  rounded-3">
              <div className="card-header primary-background px-5 py-4">
                <div className="productName text-center">
                  <span className="CompanyName text-center">ABC</span> |
                  iBanking
                </div>
              </div>
              <div className="card-body mb-3 px-5 pb-5 my-3">
                <form>
                  <h3 className="login-heading text-center pb-4 pt-4">System Login</h3>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <img src={user} alt="Username Icon" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control input-field"
                      id="username"
                      placeholder="Username"
                    />
                  </div>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <img src={lock} alt="Password Icon" />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control input-field"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    {/* <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input checkbox-custom-color"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label remember-text"
                        htmlFor="rememberMe"
                      >
                        Remember Me
                      </label>
                    </div> */}
                    <a href="#" className="ml-auto forgot-password">
                      Forgot UserName Or Password?
                    </a>
                  </div>
                  <div className="d-flex justify-content-between mb-1 w-100 mt-4">
                    <a
                      href="#"
                      className="btn btn-primary py-2 px-5 alpha-btn w-100"
                    >
                      Login
                    </a>
                  </div>
                  <div className="pt-2 d-flex justify-content-center">
                    <a href="#" className="ml-auto forgot-password">
                      Register for System
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
