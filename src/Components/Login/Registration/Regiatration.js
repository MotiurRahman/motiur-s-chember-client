import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { UserContext } from "../../../AuthContext/AuthContext";
import useTitle from "../../../hooks/useTitle";

const Regiatration = () => {
  useTitle("Registration");
  const { user, loader, creteUser, googleLogin, updateUser } =
    useContext(UserContext);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  const nevigate = useNavigate();

  // Handle User Registration
  const btnSubmit = (e) => {
    setShow(false);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    const confirm_password = form.confirm_password.value;
    if (password !== confirm_password) {
      toast("Password did not match");
      setMessage("Password did not match");
      setShow(true);

      return;
    }

    creteUser(email, confirm_password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const profile = { displayName, photoURL };
        updateUser(profile)
          .then(() => {
            setShow(true);
            nevigate("/login");
            setMessage("");
          })
          .catch((error) => {
            const errorMessage = error.message;
            setMessage(errorMessage);
          });
      })
      .catch((error) => {
        setShow(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
      });
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setMessage("");
        nevigate("/");
      })
      .catch((error) => setMessage(error.message));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body" data-theme="valentine">
            <h1 className="text-5xl font-bold">Register here!</h1>
            <form onSubmit={btnSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  placeholder="Enter Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Enter photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  {/* <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a> */}
                  <p>
                    Already have an account?{" "}
                    <Link
                      className="label-text-alt link link-hover"
                      to="/login"
                    >
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                {show ? (
                  <button type="submit" className="btn btn-primary">
                    Create an account
                  </button>
                ) : (
                  <button className="btn btn-primary loading">Creating</button>
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

export default Regiatration;
