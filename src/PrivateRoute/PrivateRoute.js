import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";

const PrivateRoute = () => {
  const { user, loader } = useContext(UserContext);
  const location = useLocation();

  if (loader) {
    return <h1>Loading .......</h1>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
