import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { UserContext } from "../../../AuthContext/AuthContext";
import { setAuthToken } from "../../../authAPI/auth";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { user, loader, setLoader, signIn, googleLogin } =
    useContext(UserContext);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Handle User Login
  const handleLogin = (e) => {
    setShow(false);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setShow(true);
        setMessage("");
        console.log(result.user);
        setAuthToken(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setShow(true);
        setMessage(error.message);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setMessage("");
        setAuthToken(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => setMessage(error.message));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body" data-theme="valentine">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  {/* <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a> */}
                  <p>
                    Don't have an account?{" "}
                    <Link
                      className="label-text-alt link link-hover"
                      to="/registration"
                    >
                      Create an account
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                {show ? (
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                ) : (
                  <button className="btn btn-primary loading">Login</button>
                )}
              </div>
            </form>
            <div className="form-control mt-3">
              <button onClick={handleGoogleLogin} className="btn btn-primary">
                <FaGoogle className="mr-2"></FaGoogle> Login with Google
              </button>
            </div>
            <p className="text-red-700 text-center">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
