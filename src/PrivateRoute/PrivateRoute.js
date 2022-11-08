import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";

const PrivateRoute = () => {
  const { user, loader } = useContext(UserContext);

  if (loader) {
    return <h1>Loading .......</h1>;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;
