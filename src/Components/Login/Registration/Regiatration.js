import React from "react";
import { Link } from "react-router-dom";

const Regiatration = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body" data-theme="valentine">
            <h1 className="text-5xl font-bold">Register here!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                name="confirm_password"
                placeholder="Confirm password"
                className="input input-bordered"
              />
              <label className="label">
                {/* <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a> */}
                <p className="label-text-alt link link-hover">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create an account</button>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regiatration;
